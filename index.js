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

let bot = {
    client,
    prefix: "n.",
    owners: ["735782372737417276"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require('./handlers/events')(bot, reload)
client.loadCommands = (bot, reload) => require('./handlers/commands')(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

/*client.on('ready', (messageOn) => {
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
})*/

client.login(process.env.TOKEN)