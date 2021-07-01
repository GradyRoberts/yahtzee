const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('game', {
		gameID: {
			type: DataTypes.INTEGER,
			unique: true,
			autoIncrement: true,
			primaryKey: true,
		},
		player1: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		player2: DataTypes.STRING,
		player3: DataTypes.STRING,
		player4: DataTypes.STRING,
		player5: DataTypes.STRING,
		round: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 13,
			},
		},
	}, {
		tableName: 'Games',
	});
};