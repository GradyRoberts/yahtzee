const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('board', {
		gameID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		playerID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		ones: DataTypes.INTEGER,
		twos: DataTypes.INTEGER,
		threes: DataTypes.INTEGER,
		fours: DataTypes.INTEGER,
		fives: DataTypes.INTEGER,
		sixes: DataTypes.INTEGER,
		threeOAK: DataTypes.INTEGER,
		fourOAK: DataTypes.INTEGER,
		fullHouse: DataTypes.INTEGER,
		smStraight: DataTypes.INTEGER,
		lgStraight: DataTypes.INTEGER,
		yahtzee: DataTypes.INTEGER,
		chance: DataTypes.INTEGER,
		yahtzeeBonusCnt: DataTypes.INTEGER,
	}, {
		tableName: 'Boards',
	});
};