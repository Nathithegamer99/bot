const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'has-role',
        group: 'misc',
        memberName: 'has-role',
        description: 'Checks if a user has the certain role. (note must type the role, not @role)',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }