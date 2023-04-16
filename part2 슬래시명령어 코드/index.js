require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

client.on('ready', (c) => {
    console.log(`${(c.user.tag)}는(은) 온라인이 되었습니다!`)
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
    
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === '헬로') {
      await interaction.reply('헬로!');
    }
  });

client.login(process.env.TOKEN);