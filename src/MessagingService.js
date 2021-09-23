import solace from "../resources/solclientjs";

export class MessagingService {
	topicsToCallbacks = {};

	constructor() {}

	getMessageBack(message) {
		console.log("Message: " + message);
	}

	connect() {
		return new Promise((resolve, reject) => {
			var factoryProps = new solace.SolclientFactoryProperties();
			factoryProps.profile = solace.SolclientFactoryProfiles.version10;
			solace.SolclientFactory.init(factoryProps);
			// solace.SolclientFactory.setLogLevel(solace.LogLevel.DEBUG);
			this.session = solace.SolclientFactory.createSession({
				url: "wss://mr1rvhmgxllu7p.messaging.solace.cloud:443",
				vpnName: "hackathon3_omar",
				userName: "solace-cloud-client",
				password: "bscjqa5ibf3tnlr29a92gfi3c9"
			});
			this.session.on(solace.SessionEventCode.UP_NOTICE, () => {
				resolve("connected to iVMR");
				// console.log("connected to iVMR");
			});
			this.session.on(solace.SessionEventCode.CONNECT_FAILED_ERROR, () => {
				reject("connection to iVMR failed");
				// console.log("connection to iVMR failed");
			});

			this.session.on(solace.SessionEventCode.MESSAGE, (message) => {
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
	
	publishMessage(topic, message) {
		if (!topic.startsWith("reset")) {
			topic = this.organization + "/" + topic;
		}
		let payload = JSON.stringify(message);
		// console.log("FROM publishMessage in MessagingService with Topic: " + topic + ", and message: " + payload);
		var message = solace.SolclientFactory.createMessage();
		message.setDestination(solace.SolclientFactory.createTopicDestination(topic));
		message.setBinaryAttachment(payload);
		message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT);
		if (this.session !== null) {
			try {
				this.session.send(message);
				// console.log("Message Published");
			} catch (error) {
				console.log(error.toString());
			}
		} else {
			console.log("Cannot publish because not connected to Solace message router.");
		}
	}
	subscribeToTopic(topic, callback) {
		if (!topic.startsWith("game")) {
			topic = this.organization + "/" + topic;
		}
		// console.log("FROM subscribeToTopic in MessagingService with Topic: " + topic);
		if (this.session !== null) {
			try {
				this.session.subscribe(
					solace.SolclientFactory.createTopic(topic),
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
			console.log("Cannot subscribe because not connected to Solace message router.");
		}
	}
	disconnect() {
		this.session.exit();
		console.log("Disconnecting from iVMR");
	}
}
