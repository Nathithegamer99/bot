const Commando = require('discord.js-commando')
module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: 'delete-channel',
        group: 'moderation',
        memberName: 'delete-channel',
        description: 'deletes the channel where the command was run',
        userPermissions: ['ADMINISTRATOR'],
      })
    }
  
    async run(message, args) {

        message.channel.delete()
    }
  }