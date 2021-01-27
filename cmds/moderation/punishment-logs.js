const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'punishment-log',
        group: 'moderation',
        memberName: 'punishment-log',
        description: 'Shows a user punishments logs',
        argsType: 'multiple',
      })
    }
  
    async run(message) {

        return
    }
  }