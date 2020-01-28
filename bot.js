const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("655136051261734935")
setInterval(function() {
channel.send(`Yasser`);
}, 30)
})

client.login(process.env.BOT_TOKEN);