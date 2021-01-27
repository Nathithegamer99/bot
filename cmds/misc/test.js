const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'test',
        group: 'misc',
        memberName: 'test',
        description: 'tests the welcome message',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }