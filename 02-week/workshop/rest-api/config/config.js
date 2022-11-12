const env = process.env.NODE_ENV || 'development';
const url = process.env.MONGODB_ATLAS_URL;

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/forum',
        // dbURL: 'mongodb+srv://test1:test123@cluster0.qfegruh.mongodb.net/?retryWrites=true&w=majority',
        // dbURL: url,
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

module.exports = config[env];
