module.exports = {
	name: 'avatar',
	description: 'Display avatars of mentioned users or sender',
	args: false,
	usage: '[optional @ mentions of users]',
	execute(msg, args) {
		if (args.length === 0 || !msg.mentions.users.size) {
			return msg.channel.send(`Your avatar: ${msg.author.displayAvatarURL({ 'format': 'png', 'dynamic': true })}`);
		}

		const avatarList = msg.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ 'format': 'png', 'dynamic': true })}`;
		});

		msg.channel.send(avatarList);
	},
};