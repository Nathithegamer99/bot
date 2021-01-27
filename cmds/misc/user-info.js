const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class UserInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'user-info',
      group: 'misc',
      memberName: 'user-info',
      description: 'Displays information a user',
    })
  }

  run = async (message) => {
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    console.log(member)

    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .setColor('#1ecbe1')
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Is bot',
          value: user.bot,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        }
      )

    channel.send(embed)
  }
}