const Commando = require('discord.js-commando')
const dogeLeaderboardSchema = require('@schemas/doge-leaderboard-schema')

module.exports = class SetLeaderboarCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'set-leaderboard',
      group: 'doge',
      memberName: 'setleaderboard',
      userPermissions: ['ADMINISTRATOR'],
      description: 'Sets up a doge leaderboard',
    })
  }

  run = async (message) => {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await dogeLeaderboardSchema.findOneAndUpdate(
      {
        _id: guildId,
        channelId,
      },
      {
        _id: guildId,
        channelId,
      },
      {
        upsert: true,
      }
    )

    message.reply('Doge leaderboard set!').then((message) => {
      message.delete({
        timeout: 1000 * 5,
      })
    })
    message.delete()
  }
}