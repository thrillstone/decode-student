import vmrConfig from "./vmrConfig";

export class MessagingService {
	topicsToCallbacks = {};

	constructor() {}

	getMessageBack(message) {
		console.log("Message: " + message);
	}

	connect() {
		return new Promise((resolve, reject) => {
			var factoryProps = new window.solace.SolclientFactoryProperties();
			factoryProps.profile = window.solace.SolclientFactoryProfiles.version10;
			window.solace.SolclientFactory.init(factoryProps);
			// window.solace.SolclientFactory.setLogLevel(window.solace.LogLevel.DEBUG);
			this.session = window.solace.SolclientFactory.createSession(vmrConfig);
			this.session.on(window.solace.SessionEventCode.UP_NOTICE, () => {
				resolve("connected to iVMR");
				// console.log("connected to iVMR");
			});
			this.session.on(window.solace.SessionEventCode.CONNECT_FAILED_ERROR, () => {
				reject("connection to iVMR failed");
				// console.log("connection to iVMR failed");
			});

			this.session.on(window.solace.SessionEventCode.MESSAGE, (message) => {
				const receivedMessage = JSON.parse(message.getBinaryAttachment());
				Object.keys(this.topicsToCallbacks).forEach((topic) => {
					const topicToCallback = this.topicsToCallbacks[topic];
					if (message.getDestination().getName().toString() === topicToCallback.topic) {
						topicToCallback.callback(receivedMessage);
					}
				});
			});
			try {
				this.session.connect();
			} catch (error) {
				console.log(error.toString());
			}
		});
	}
	
	publishMessage(topic, pubMessage) {
		let payload = JSON.stringify(pubMessage);
		// console.log("FROM publishMessage in MessagingService with Topic: " + topic + ", and message: " + payload);
		var message = window.solace.SolclientFactory.createMessage();
		message.setDestination(window.solace.SolclientFactory.createTopicDestination(topic));
		message.setBinaryAttachment(payload);
		message.setDeliveryMode(window.solace.MessageDeliveryModeType.DIRECT);
		if (this.session !== null) {
			try {
				this.session.send(message);
				// console.log("Message Published");
			} catch (error) {
				console.log(error.toString());
			}
		} else {
			console.log("Cannot publish because not connected to window.solace message router.");
		}
	}

	subscribeToTopic(topic, callback) {
		// console.log("FROM subscribeToTopic in MessagingService with Topic: " + topic);
		if (this.session !== null) {
			try {
				this.session.subscribe(
					window.solace.SolclientFactory.createTopic(topic),
					true, // generate confirmation when subscription is added successfully
					topic, // use topic name as correlation key
					10000 // 10 seconds timeout for this operation
				);
				let topicToCallback = {
					topic: topic,
					callback: callback
				};
				this.topicsToCallbacks[topic] = topicToCallback;
				console.log("I am now subscribed to " + topic);
			} catch (error) {
				console.log(error.toString());
			}
		} else {
			console.log("Cannot subscribe because not connected to window.solace message router.");
		}
	}
	disconnect() {
		this.session.exit();
		console.log("Disconnecting from iVMR");
	}
}
