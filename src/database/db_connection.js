const { Pool } = require('pg')
const url = require('url')

require('env2')('.env')

const { DATABASE_URL } = process.env
if (!DATABASE_URL) {
  throw Error('No database URL')
}

const option = {
  connectionString: DATABASE_URL
}

const hostname = url.parse(process.env.DATABASE_URL).hostname;


option.ssl = (hostname !== 'localhost');
module.exports = new Pool(option)
