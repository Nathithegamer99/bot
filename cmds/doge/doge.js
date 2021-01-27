const Commando = require('discord.js-commando')
const dogeSchema = require('@schemas/doge-schema')

module.exports = class DogeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'give-doge',
      group: 'doge',
      memberName: 'give-doge',
      description: 'Gives a user a doge',
    })
  }

  run = async (message) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to give a doge')
      return
    }

    const { guild } = message
    const guildId = guild.id
    const targetId = target.id
    const authorId = message.author.id
    const now = new Date()

    if (targetId === authorId) {
      message.reply('You can\`t give yourself a doge')
      return
    }

    const authorData = await dogeSchema.findOne({
      userId: authorId,
      guildId,
    })

    if (authorData && authorData.lastGave) {
      const then = new Date(authorData.lastGave)

      const diff = now.getTime() - then.getTime()
      const diffHours = Math.round(diff / (1000 * 60 * 60))

      const hours = 24
      if (diffHours <= hours) {
        message.reply(
          `You have already given a doge to someone within the last ${hours} hours.`
        )
        return
      }
    }

    // Update the "lastGave" property for the command sender
    await dogeSchema.findOneAndUpdate(
      {
        userId: authorId,
        guildId,
      },
      {
        userId: authorId,
        guildId,
        lastGave: now,
      },
      {
        upsert: true,
      }
    )

    // Increase how many thanks the target user has had
    const result = await dogeSchema.findOneAndUpdate(
      {
        userId: targetId,
        guildId,
      },
      {
        userId: targetId,
        guildId,
        $inc: {
          received: 1,
        },
      },
      {
        upsert: true,
        new: true,
      }
    )

    const amount = result.received
    message.reply(
      `You have given <@${targetId}> a doge! They now have ${amount} doge.`
    )
  }
}