
const fp = require('fastify-plugin');
const pgp = require('pg-promise')();
const applyMigration = require('./helper/migration');

const db = async (fastify, option, next) => {
    const dbConnection = pgp(process.env.POSTGRES_URI);

    // register db as decorator to  provide globally
    fastify.decorate('db', dbConnection);
    fastify.log.info('Migration is About to run');
    const migrationCount = await  applyMigration();
    fastify.log.info(`Migration is About to run: ${migrationCount}`); 
    next();
};

module.exports = fp(db);