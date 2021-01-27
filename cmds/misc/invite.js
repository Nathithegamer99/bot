const Commando = require('discord.js-commando')

module.exports = class InviteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'misc',
      memberName: 'invite',
      description: 'invites the bot',
    })
  }

  async run(message) {
    
    message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=794385317993644062&permissions=8&scope=bot`)
  }
}