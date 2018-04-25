module.exports = {
	getConnect: function(topic, clientId, cb, bool) {
		var clstrx = '192.168.200.114:1884';
		var clstr = clstrx.split(":");
		//console.log(555, clstr)
		var topic1 = topic;
		var client = new Paho.MQTT.Client(clstr[0], clstr[1], clientId);
		client.onConnectionLost = onConnectionLost;
		client.onMessageArrived = onMessageArrived;
		client.connect({
			onSuccess: onConnect
		});

		function onConnect() {
			// Once a connection has been made, make a subscription and send a message.
			if (bool) {
				client.subscribe(topic1);
				console.log("onConnect")
			} else {
				client.unsubscribe(topic1);
				console.log("unConnect")
			}
			// client.subscribe(topic1);      /**主题**/
			// message = new Paho.MQTT.Message("Hello");
			// message.destinationName = "World";
			// client.send(message);
		}
		// called when the client loses its connection
		function onConnectionLost(responseObject) {

			if (responseObject.errorCode !== 0) {
				// console.log(1);
				console.log("onConnectionLost:" + responseObject.errorMessage);
				// this.props.getdata(dataa,pages);
				// console.log(11) 192.168.10.210a
				//cb('connectlost')
			}
		}

		// called when a message arrives
		function onMessageArrived(message) {
			var fdata = (message._getPayloadString)();

			//JSON.parse((message._getPayloadString)());

			//var PLC1 = JSON.parse((message._getPayloadString)());
			//var M31150_BELT13 = PLC1['M31150_BELT13'];
			//console.log(22, M31150_BELT13);
			cb('999', fdata)


		}

	},

};