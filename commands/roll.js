const Discord = require('discord.js');
// const sequelize = require('../index');

module.exports = {
	name: 'roll',
	description: 'Roll dice on your turn',
	args: false,
	usage: '',
	execute(msg, _args) {
		// TODO: Create db entry for this game and score boards
		const rollPath = 'C:/Users/Grady/Desktop/Yahtzee-Bot/images/tmpctm9dxmt.png';
		const rollImg = 'tmpctm9dxmt.png';
		const exampleEmbed = new Discord.MessageEmbed()
			.setTitle('Roll 1')
			.attachFiles([`${rollPath}`])
			.setImage(`attachment://${rollImg}`)
			.setDescription('Type `!keep 1 1 4 ...` to choose which dice to keep and reroll the rest');
		msg.channel.send(exampleEmbed);
	},
};