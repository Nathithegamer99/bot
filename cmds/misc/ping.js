const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'ping',
        group: 'misc',
        memberName: 'ping',
        description: 'Shows the bot\'s ping',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }