require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: '헬로',
    description: '헬로!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('슬래시 명령어를 등록하고 있습니다.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

    console.log('슬래시 명령어 등록이 완료되었습니다.');
  } catch (error) {
    console.error(error);
  }
})();
