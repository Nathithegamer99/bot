const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'add-role',
        group: 'misc',
        memberName: 'add-role',
        description: 'Gives a user a certain role. (note must type the role, not @role)',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }