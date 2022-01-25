const loadEnvironmentvariable = (envName) => {
    if (process.env[envName]) {
        return process.env[envName];
    }

    throw new Error(`${envName} env does not exist`);
}

module.exports = {
    database_uri: loadEnvironmentvariable('POSTGRES_URI')
}