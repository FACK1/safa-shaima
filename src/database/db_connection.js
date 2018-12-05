const {Pool} =require("pg");
require("env2")('.env');

const {DB_URL} = process.env;
console.log(DB_URL);
if(! DB_URL){
  throw Error ("No database URL")
}

const option = {
  connectionString: DB_URL
};

module.exports = new Pool(option);
