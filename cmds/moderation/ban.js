const Commando = require('discord.js-commando')
const { MessageEmbed } = require("discord.js");

module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      group: 'moderation',
      memberName: 'ban',
      description: 'Bans a member from the discord server',
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
        const banembed = new MessageEmbed()
        .setTitle('Please specify someone to Ban')
        .setColor('#1ecbe1')
        message.channel.send(banembed);
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.banembed) {
      member.ban()
      const banembed = new MessageEmbed()
      .setTitle('User has been banned')
      .setColor('#1ecbe1')
      message.channel.send(banembed);
      
    } else {
      const banembed = new MessageEmbed()
      .setTitle('Something went wrong')
      .setColor('#1ecbe1')
      message.channel.send(banembed);
    }
  }
}