const Commando = require('discord.js-commando')
const { MessageEmbed } = require("discord.js");

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      group: 'moderation',
      memberName: 'kick',
      description: 'Kicks a member from the discord server',
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
      const kickembed = new MessageEmbed()
      .setTitle('Please specify someone to kick')
      .setColor('#1ecbe1')
      message.channel.send(kickembed);
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.kickable) {
      member.kick()
      const kickembed = new MessageEmbed()
      .setTitle('User has been kicked')
      .setColor('#1ecbe1')
      message.channel.send(kickembed);
      
    } else {
      const kickembed = new MessageEmbed()
      .setTitle('Something went wrong')
      .setColor('#1ecbe1')
      message.channel.send(kickembed);
    }
  }
}