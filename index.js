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
    } else if (commandName === 'server') {
        await Interaction.reply(`サーバー名: ${Interaction.guild.name}\n参加人数: ${Interaction.guild.memberCount}`)
    }
})

client.login(token);