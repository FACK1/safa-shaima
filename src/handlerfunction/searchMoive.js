require('env2')('.env')
const request = require('request');
const handlers = require('../server/handlers');
const getMoives = require('../queries/getMovies.js');

const search = (req, res, value) => {
getMoives(value,(err,result)=>{
  if(err){
    console.log(err);
  }else {
    res.writeHead(200,{ 'content-type': 'application/json '});
    const output=JSON.stringify(result);
    res.end(output);
  }
  })
};

module.exports = { search };
