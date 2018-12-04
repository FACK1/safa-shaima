BEGIN;

DROP TABLE IF EXISTS Moive  CASCADE;

CREATE TABLE Moive(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year  DATE,
  moive_rank INTEGER ,
  moive_link TEXT ,
  moive_image TEXT  ,
  name_director VARCHAR(255),
  name_actors TEXT

);

INSERT INTO superheroes (name,superpower,weight) VALUES
('StudentOfTheYear',2012,100,'https://www.youtube.com/watch?v=ONvKqptisjA','https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/16/Pictures/_bf378250-b277-11e7-ab59-1b1e25230a21.jpg','Karan Johar','Sidharth Malhotra'),
('Omar',2013,100,'https://www.youtube.com/watch?v=dYIOam4vIi0','https://muhammadfaysal.files.wordpress.com/2014/05/occ.jpg','HaniAbuasad','Adam&Leen&waleed '),
('Shaandaar',2015,100,'https://www.youtube.com/watch?v=dYIOam4vIi0','http://media.glamsham.com/download/wallpaper/movies/images/s/shaandaar-wallpaper-21-12x9.jpg','fikas ','ShahedKappor&AliaBahat '),
('Zanka',2015,100,'https://www.youtube.com/watch?v=R7dijhck8p0','http://photo.elcinema.com.s3.amazonaws.com/uploads/_640x_938fc9745c3a7f141a9406974dffe6923819ef2c5db85e79b2c180647a64454c.jpg','Khaleed  ','EmySammer&HassanALradad ')


COMMIT;
