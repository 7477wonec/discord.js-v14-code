require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, Application } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: '헬로',
    description: '헬로!',
  },
  {
    name: 'calculate',
    description: 'Calculate two numbers.',
    options: [
      {
        name: 'first-number',
        description: 'The first number.',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'one',
            value: 1,
          },
          {
            name: 'two',
            value: 2,
          },
          {
            name: 'three',
            value: 3,
          },
        ],
        required: true,
      },
      {
        name: 'second-number',
        description: 'The second number.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
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
