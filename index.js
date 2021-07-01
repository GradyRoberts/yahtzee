const { Sequelize } = require('sequelize');
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// --- Create Discord bot client ---
const client = new Discord.Client({ ws: { intents: ['GUILD_MESSAGES', 'DIRECT_MESSAGES'] } });
client.commands = new Discord.Collection();

// --- Load bot commands ---
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// --- Create DB conn instance and initialize models ---
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const modelDefiners = [
	require('./models/game.model'),
	require('./models/board.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

sequelize.sync();

// --- Bot is ready to receive commands ---
client.once('ready', () => {
	console.log('Ready!');
});

// --- Listen for command messages ---
client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	console.log(msg.content);

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if (command.args && !args.length) {
		return msg.reply('you didn\'t provide any arguments!');
	}

	try {
		command.execute(msg, args);
	}
	catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command.');
	}
});

client.login(token);

module.exports = sequelize;