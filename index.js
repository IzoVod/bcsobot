var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot op");
});

Client.login("MTAxNjM2NTc4NTgzODUzODgwNA.GxL2iQ.h1pOspcSiGu2SECGCShQRzRn85gXdrGWXFP8T0")