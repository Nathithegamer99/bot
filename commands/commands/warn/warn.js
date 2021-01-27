// description: "",



const mongo = require('@util/mongo')
const warnSchema = require('@schemas/warn-schema')
const { MessageEmbed } = require("discord.js");
module.exports = {
  commands: 'warn',
  minArgs: 2,
  expectedArgs: "<Target user's @> {reason}",
  permissions: ['MANAGE_GUILD'],
  description: "Warns a user",
  callback: async (message, arguments) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    arguments.shift()

    const guildId = message.guild.id
    const userId = target.id
    const reason = arguments.join(' ')

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

    const warnembed = new MessageEmbed()
    .setTitle('Member was warned')
    .setColor('#1ecbe1')
    message.channel.send(warnembed);
   
    await mongo().then(async (mongoose) => {
      try {
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )
      } finally {
        mongoose.connection.close()
      }
    })
    

  },
}