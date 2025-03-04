const fs = require("fs");
module.exports.config = {
	name: "মদ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "daru",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("মদ")==0 || event.body.indexOf("মত")==0 || event.body.indexOf("Drinks")==0 || event.body.indexOf("drink")==0) {
		var msg = {
				body: "আসো সবাই মিলে মিশে মদ খাই 🍻🍷🍺",
				attachment: fs.createReadStream(__dirname + `/noprefix/daru.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
