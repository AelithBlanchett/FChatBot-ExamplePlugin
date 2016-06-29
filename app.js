//adapted from https://github.com/AelithBlanchett/fchatlib/blob/master/test/app.js
var FChatLib = require('fchatlib');

////with config file
//var options = require(__dirname+'/config/config.js');
////without config file
var options = {username: "MyAccount", password: "MyPassword", character: "MyNewShinyRobot", master: "YourCharacter", room: "ADH-someid"}; //you can obtain the room's ID you want the bot in by typing /code in F-chat

var myFchatBot = new FChatLib(options);
console.log("ok");
