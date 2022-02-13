const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log("up bot!!")
})

client.on('interactionCreate', async Interaction => {
    if (!Interaction.isCommand()) return;

    const { commandName } = Interaction;

    if (commandName === 'ping') {
        await Interaction.reply('Pong!');
    }
})

client.login(token)