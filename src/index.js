console.log('How are we feeling?');
//setup

import dotenv from 'dotenv';

dotenv.config()
import { ActivityType, Guild } from 'discord.js';
import { Client, GatewayIntentBits, Role, messageLink, EmbedBuilder, IntentsBitField } from 'discord.js';
let discordIDRegex = /<@1140471945238937610>/
const discordID = '<@1140471945238937610>'


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
    ,
    partials: [
        "MESSAGE",
        "CHANNEL",
        "REACTION"
    ]
});

// Set the bot's status
client.once('ready', () => {
    console.log(`Feeling great! (${client.user.tag} has started)`);
  
// Set bot's status
client.user.setActivity('somethin', { type: ActivityType.Watching })
})

client.on('interactionCreate', async (interaction) => {

  try {


  if (interaction.commandName === 'hey') {
      await interaction.reply('Hello!');
  }

  if (interaction.commandName === 'gleebygleeby') {
      await interaction.reply('Holy what?? We have an alien in this server???');
  }

}catch (error) {
  console.error('Error!', error);
}
  
});

client.login(process.env.CLIENT_TOKEN);