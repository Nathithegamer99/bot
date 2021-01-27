const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const { version } = require('@root/package.json')

module.exports = class BotInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'bot-info',
      group: 'misc',
      memberName: 'bot-info',
      description: 'Displays bot information',
    })
  }

  run = async (message) => {
    let totalMembers = 0

    for (const guild of this.client.guilds.cache) {
      totalMembers += (await guild[1].members.fetch()).size
    }

    const embed = new MessageEmbed()
      .setAuthor(
        `Information about the ${this.client.user.username} Bot`,
        this.client.user.displayAvatarURL()
      )
      .setColor('#1ecbe1')
      .addFields(
        {
          name: 'Bot tag',
          value: this.client.user.tag,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Version',
          value: version,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: "Server's command prefix",
          value: message.guild.commandPrefix,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'UpTime',
          value: `${process.uptime().toFixed(2)}s`,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Server count',
          value: this.client.guilds.cache.size,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Total members',
          value: totalMembers,
        }
      )

    message.channel.send(embed)
  }
}