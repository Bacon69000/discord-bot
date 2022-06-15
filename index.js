const  Discord = require('discord.js')
require('dotenv').config()

const generateImage = require('./generateImage')

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

const welcomeChannelID = '986505216897720330'

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)