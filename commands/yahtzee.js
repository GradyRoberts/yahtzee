const sequelize = require('../sequelize');
// const { SequelizeUniqueConstraintError } = require('sequelize');
const { Game, Board } = sequelize.models;

async function gameSetup(gameData) {
	const game = await Game.create(gameData);
	return game;
}

async function boardSetup(boardData) {
	await Board.create(boardData);
}

module.exports = {
	name: 'yahtzee',
	description: 'Initialize a game of Yahtzee',
	args: false,
	usage: '[@s for other players, empty for single-player]',
	execute(msg, _args) {
		const gameData = {
			player1: msg.author.id,
		};

		const mentions = msg.mentions.users;
		for (let i = 0; i < mentions.length; i++) {
			const key = `player${i}`;
			gameData[key] = mentions[i].id;
		}

		gameSetup(gameData).then(game => {
			boardSetup({
				GameId: game.id,
				playerId: msg.author.id,
			});
			for (let i = 0; i < mentions.length; i++) {
				boardSetup({
					GameId: game.id,
					playerId: mentions[i].id });
			}
		}).then(() => {
			return msg.reply('type `!roll` to begin your turn!');
		}).catch(e => {
			if (e.name === 'SequelizeUniqueConstraintError') {
				return msg.reply('one of you is already involved in a game! Please wait and try again.');
			}
		});
	},
};