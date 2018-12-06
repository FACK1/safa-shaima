const { Pool } = require('pg')
const url = require('url')

require('env2')('.env')

const { DATABASE_URL, DB_URL } = process.env

if(! DB_URL){
  throw Error('No Data Base URL');
}

const option = {
  connectionString: DB_URL
}

const hostname = url.parse(process.env.DATABASE_URL).hostname;

option.ssl = (hostname !== 'localhost');
module.exports = new Pool(option)
