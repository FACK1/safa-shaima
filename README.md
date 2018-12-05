# 123Movies

### About:
A website for searching about movies , allows users to search any movie they want and display information  and image  for its.
### User journey: 
In our app you can  search for your favourite movie by putting the name of it in the place of search and you can also add a movie through add button . 
### Site Link in Heroku :
[123Movies](https://moviesworkshop.herokuapp.com/) 
### Site design :

### Architecture :
- Front-End :

  we create  public folder and put inside its folders like :
   - css :
   
       style.css

       resets.css
  - js :
  
       dom.js

      fetch.js
   
  - index.html 
  
- Back-End:

  we create src folder and put folders in its like :

  - database :
  
      db_build.js

      db_build.sql 

      db_connection.js
    
  - queries :
  
      getMovies.js
      
      postMovies.js

     

  - handlerfunction :

      search.js
      
  - Server :
  
      server.js

      router.js
   
      handlers.js
  - Test :
  
      test.js
 
-  Database schema:

![untitled diagram](https://user-images.githubusercontent.com/37650536/49534231-aad21180-f886-11e8-90b9-2555491a31d1.png)



- HTML structure :
our website is a  page contains a title for website with background , then will find a box to enter the name for the movie  in the same line have a button to search for the movie and button to add movies  .



 ### How to run our site on your machine?

1- Clone this repo.

2- Open your command line.

3- Put in terminal : **npm install**.

4- Then put in terminal : **npm run nodemon** to run the server. 

5- Open your browser and put in terminal: **localhost:4001**.


### Movies Names:
The user can search for serveral movies like:

-StudentOfTheYear

-Omar

-Shaandaar

-Zana et Settat



#### Travis CI:

[![Build Status](https://travis-ci.org/FACK1/safa-shaima.svg?branch=master)](https://travis-ci.org/FACK1/safa-shaima)
### Team Member:

- [Shaima' Azmi](https://github.com/shaima96)
- [Safa amro](https://github.com/safaaamro)



