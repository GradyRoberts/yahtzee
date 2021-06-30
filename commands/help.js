const config = require('../config.json');
const prefix = config.prefix;

module.exports = {
	name: 'help',
	description: 'Display all commands or info about specific command',
	args: false,
	usage: '[optional command name]',
	execute(msg, args) {
		const data = [];
		const { commands } = msg.client;

		if (!args.length) {
			data.push('Here\'s a list of available commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nType \`${prefix}help [command name]\` for more info on a command.`);

			return msg.author.send(data, { split: true })
				.then(() => {
					if (msg.channel.type === 'dm') return;
					msg.reply('Check your DMs...');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${msg.author.tag}.\n`, error);
					msg.reply('I was unable to DM you! Please enable DMs and try again.');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name);

		if (!command) {
			return msg.reply('that\'s not a valid command!');
		}

		data.push(`**Name**: ${command.name}`);

		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		msg.channel.send(data, { split: true });
	},
};