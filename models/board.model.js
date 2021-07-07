const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Board', {
		playerId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			primaryKey: true,
		},
		ones: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		twos: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		threes: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		fours: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		fives: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		sixes: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		threeOAK: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		fourOAK: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		fullHouse: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		smStraight: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		lgStraight: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		yahtzee: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		chance: {
			type: DataTypes.INTEGER,
			defaultValue: -1,
		},
		yahtzeeBonusCnt: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	}, {
		tableName: 'Boards',
	});
};