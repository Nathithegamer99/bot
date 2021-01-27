const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'warn',
        group: 'misc',
        memberName: 'warn',
        description: 'Warns a user',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }