const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'warnings',
        group: 'misc',
        memberName: 'warnings',
        description: 'Shows a user\'s warns',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }