const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'remove-role',
        group: 'misc',
        memberName: 'remove-role',
        description: 'Removes a user from a certain role. (note must type the role, not @role)',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }