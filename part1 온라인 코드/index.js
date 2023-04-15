require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

client.on('ready', (c) => {
    console.log(`${(c.user.tag)}는(은) 온라인이 되었습니다!`)
});

client.login(process.env.TOKEN);
