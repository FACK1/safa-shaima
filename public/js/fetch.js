const searchMoive = function(value, cb){
var searchUrl = '/search?value=' + value;
fetch(searchUrl)
.then(function(response){
return response.json();
}).then(function(data){
cb(null, data);
}).catch(function(error){
cb(true);
});
}
