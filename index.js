const  Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on('ready', (messageOn) => {
    console.log('Successfully Logged In')
})

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!')
    }
})

client.login(process.env.TOKEN)