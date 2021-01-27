const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            group: 'moderation',
            memberName: 'clear',
            description: 'clears a certain amount of messages',
            userPermissions: ['MANAGE_MESSAGES'],
            argsType: 'multiple',
        })
    }

    async run(message) {
        const messageArray = message.content.split(' ');
        const args = messageArray.slice(1);

        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number between 1-100 only!') }

        if (parseInt(args[0]) > 99) {
            return message.reply('You can only delete 99 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
        .then((message) => {
            message.delete({ timeout: 5000 })
        })
    }
}