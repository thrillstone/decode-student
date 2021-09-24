import vmrConfig from "./vmrConfig";

export class MessagingService {
	topicsToCallbacks = {};

	constructor() {
		this.solace = window.solace;
	}

	getMessageBack(message) {
		console.log("Message: " + message);
	}

	connect() {
		return new Promise((resolve, reject) => {
			var factoryProps = new this.solace.SolclientFactoryProperties();
			factoryProps.profile = this.solace.SolclientFactoryProfiles.version10;
			this.solace.SolclientFactory.init(factoryProps);
			this.session = this.solace.SolclientFactory.createSession(vmrConfig);
			this.session.on(this.solace.SessionEventCode.UP_NOTICE, () => {
				resolve("connected to iVMR");
			});
			this.session.on(this.solace.SessionEventCode.CONNECT_FAILED_ERROR, () => {
				reject("connection to iVMR failed");
			});

			this.session.on(this.solace.SessionEventCode.MESSAGE, (message) => {
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
		var message = this.solace.SolclientFactory.createMessage();
		message.setDestination(this.solace.SolclientFactory.createTopicDestination(topic));
		message.setBinaryAttachment(payload);
		message.setDeliveryMode(this.solace.MessageDeliveryModeType.DIRECT);
		if (this.session !== null) {
			try {
				this.session.send(message);
				// console.log("Message Published");
			} catch (error) {
				console.log(error.toString());
			}
		} else {
			console.log("Cannot publish because not connected to solace message router.");
		}
	}

	subscribeToTopic(topic, callback) {
		// console.log("FROM subscribeToTopic in MessagingService with Topic: " + topic);
		if (this.session !== null) {
			try {
				this.session.subscribe(
					this.solace.SolclientFactory.createTopic(topic),
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
			console.log("Cannot subscribe because not connected to solace message router.");
		}
	}
	disconnect() {
		this.session.disconnect();
		console.log("Disconnecting from the solace message router");
	}
}
