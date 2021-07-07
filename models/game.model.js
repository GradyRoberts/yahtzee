const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Game', {
		// gameID: {
		// 	type: DataTypes.INTEGER,
		// 	unique: true,
		// 	autoIncrement: true,
		// 	primaryKey: true,
		// },
		player1: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		player2: {
			type: DataTypes.STRING,
			unique: true,
		},
		player3: {
			type: DataTypes.STRING,
			unique: true,
		},
		player4: {
			type: DataTypes.STRING,
			unique: true,
		},
		player5: {
			type: DataTypes.STRING,
			unique: true,
		},
		round: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 13,
			},
		},
		lastRollValue: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '6-6-6-6-6',
		},
		lastRollImg: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '../images/base.png',
		},
		currentPlayer: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 5,
			},
		},
		currentRoll: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 3,
			},
		},
	}, {
		tableName: 'Games',
	});
};