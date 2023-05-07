require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

client.on('ready', (c) => {
    console.log(`${(c.user.tag)}는(은) 온라인이 되었습니다!`)
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      interaction.reply('Pong!');
    }
  
    if (interaction.commandName === '헬로') {
      interaction.reply('헬로!');
    }

    if (interaction.commandName === 'calculate') {
      const num1 = interaction.options.get('first-number')?.value;
      const num2 = interaction.options.get('second-number')?.value;
      
      interaction.reply(`The sum is ${num1 + num2}.`);
    }
  });

client.login(process.env.TOKEN);