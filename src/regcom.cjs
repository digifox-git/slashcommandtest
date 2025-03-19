require('dotenv').config();

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Does something cool',
    },
    {
        name: 'role',
        description: 'Give yourself some roles!',
        options: [
            {
                name: 'role-name',
                description: 'Ask and you shall recieve...',
                type: ApplicationCommandOptionType.Role
            }
        ]
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

(async () => {
    try {
        console.log('Slash Commands - Registering (1/2)');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log('Slash Commands - Registered! (2/2)');
    } catch (error) {
        console.log(`Error! ${error}`);
    }
})();