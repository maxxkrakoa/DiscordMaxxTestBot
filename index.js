console.log("Beep boop");

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on("ready", discordReady);
client.on("message", discordMessage);

function discordReady() {
    console.log("Ready...");
}

function discordMessage(msg) {
    //console.log(msg.content);

    if (msg.content === "ping" && msg.channel.id === "795319250478694450") {
        msg.reply("pong");
    }
}