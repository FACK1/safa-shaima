const dbConnection = require('../database/db_connection.js');

const getMoives = (title,cb) => {
  const query = 'SELECT * FROM movies where title = $1';
  dbConnection.query(query ,[title], (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports =getMoives;
