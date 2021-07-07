const { Sequelize } = require('sequelize');

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

// Define relationships
const { Game, Board } = sequelize.models;
Game.hasMany(Board, {
	foreignKey: {
		allowNull: false,
	},
});
Board.belongsTo(Game);

// Sync database models
sequelize.sync();

module.exports = sequelize;