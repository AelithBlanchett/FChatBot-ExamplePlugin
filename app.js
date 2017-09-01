//adapted from https://github.com/AelithBlanchett/fchatlib/blob/master/test/app.js
var FChatLib = require("fchatlib").default;

var options = {username: "MyAccount", password: "MyPassword", character: "MyNewShinyRobot", room: "ADH-someid"}; //you can obtain the room's ID you want the bot in by typing /code in F-chat
var myFchatBot = new FChatLib(options);
myFchatBot.connect();