import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import confingDatabase from '../config/database';

import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(confingDatabase);
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			'mongodb://localhost:27017/devburger'
		)
	}
}

export default new Database();
