const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

module.exports = () => open({
    filename: __dirname + '/database.sqlite',
    driver: sqlite3.Database
});