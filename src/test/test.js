const test = require("tape");
const supertest = require('supertest');
const router = require('../server/router');



   const movies=[
     {
       title:'StudentOfTheYear',
        year: 2012,
        movie_rank:100,
        movie_link:'https://www.youtube.com/watch?v=ONvKqptisjA',
       image_link:'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/16/Pictures/_bf378250-b277-11e7-ab59-1b1e25230a21.jpg',
       director_name:'Karan Johar',
       actor_name:'Sidharth Malhotra'
     }
   ];


   test('Testing tape', (t) => {
     const expected = ''
     const accuual = ''
     t.equal(accuual, expected, 'Should return empty string')
     t.end()
   })

   test('Testing homeHandler', (t) => {
     supertest(router)
       .get('/')
       .expect(200)
       .expect('Content-Type', /html/)
       .end((error, result) => {
         t.error(error);
         t.end();
       });
   });
