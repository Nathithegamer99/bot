const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'set-welcome',
        group: 'misc',
        memberName: 'set-welcome',
        description: 'Welcomes a user who joins. For ping user use = <@>, can only be used once (Use testjoin to test the command)',
        argsType: 'multiple',
      })
    }
  
    async run(message, args) {

        return
    }
  }