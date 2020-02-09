const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone, salut a tous !", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), salut a tous !");
});

client.login("Njc1NzMzNjg0NTQ4MDA5OTg1.XkA3Rw.YOi1eviyXOpAVT6ToV_rL-J4_bs");
