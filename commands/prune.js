module.exports = {
	name: 'prune',
	description: 'Deletes the previous [2,100] messages in the channel',
	args: true,
	usage: '<amount>',
	execute(msg, args) {
		const amount = parseInt(args[0]);

		if (isNaN(amount)) {
			return msg.reply('That doesn\'t seem to be a valid number.');
		}
		else if (amount < 2 || amount > 100) {
			return msg.reply('You need to input a number between 2 and 100.');
		}

		// 2nd arg true ignores messages more than two weeks old
		msg.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			msg.channel.send('There was an error trying to prune messages in this channel.');
		});
	},
};