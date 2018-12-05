BEGIN;

DROP TABLE IF EXISTS movies  CASCADE;

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year  INTEGER,
  movie_rank INTEGER ,
  movie_link TEXT ,
  image_link TEXT  ,
  director_name VARCHAR(255),
  actor_name TEXT

);

INSERT INTO movies (title,year,movie_rank,movie_link,image_link,director_name,actor_name) VALUES
('StudentOfTheYear',2012,100,'https://www.youtube.com/watch?v=ONvKqptisjA','https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/16/Pictures/_bf378250-b277-11e7-ab59-1b1e25230a21.jpg','Karan Johar','Sidharth Malhotra'),
('Omar',2013,100,'https://www.youtube.com/watch?v=dYIOam4vIi0','https://muhammadfaysal.files.wordpress.com/2014/05/occ.jpg','HaniAbuasad','Adam&Leen&waleed '),
('Shaandaar',2015,100,'https://www.youtube.com/watch?v=dYIOam4vIi0','http://media.glamsham.com/download/wallpaper/movies/images/s/shaandaar-wallpaper-21-12x9.jpg','fikas ','shahid kapoor&Alia Bahat '),
('Zanka',2015,100,'https://www.youtube.com/watch?v=R7dijhck8p0','http://photo.elcinema.com.s3.amazonaws.com/uploads/_640x_938fc9745c3a7f141a9406974dffe6923819ef2c5db85e79b2c180647a64454c.jpg','Khaleed  ','Amy Sammer&Hassan radad ');


COMMIT;
