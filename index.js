require('module-alias/register')

const path = require('path')
const Commando = require('discord.js-commando')

// const Discord = require('discord.js')
// const client = new Discord.Client()

const mongo = require('@util/mongo')
const config = require('@root/config.json')
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')


const client = new Commando.CommandoClient({
  owner: '509220327398703119',
  commandPrefix: config.prefix,
})



client.on('ready', async () => {
  console.log('The client is ready!')

  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

  client.user.setPresence({
    activity: {
        name: '!!help',
        type: "WATCHING"
    },
    status: 'online'

})
    .catch(console.error);

  client.registry
    .registerDefaultTypes()
    .registerGroups([
      ['misc', 'Misc commands'],
      ['moderation', 'Moderation commands'],
      // ['suggestion', 'suggestion command']
      ['games', 'Game commands'],
      // ['economy', 'economy commands'],
      ['doge', 'doge leaderboard and give commands'],
      ['warn', 'Warn commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
      help: true,
      ping: false,
      _eval: true,
      unknownCommand: true,
    })
    .registerCommandsIn(path.join(__dirname, 'cmds'))



  commandBase.loadPrefixes(client)
  loadCommands(client)
  loadFeatures(client)
  // welcome(client)
  // messageCount(client)

})

client.login(config.token)