import Sequelize from 'sequelize';

import confingDatabase from '../config/database';

import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(confingDatabase);
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
