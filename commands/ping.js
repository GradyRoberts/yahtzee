module.exports = {
	name: 'ping',
	description: 'Pong!',
	args: false,
	usage: '',
	execute(msg, _args) {
		msg.channel.send('Pong');
	},
};