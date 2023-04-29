CREATE USER IF NOT EXISTS 'dude'@'localhost' IDENTIFIED BY 'PW...Shhhhhh';
GRANT ALL PRIVILEGES ON *.* TO 'dude'@'localhost';

DROP DATABASE `built`;
CREATE DATABASE `built`;
USE built;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `pin` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE users AUTO_INCREMENT = 1;

insert into users (name, pin) values ('Mark','ABC1');
insert into users (name, pin) values ('Amy','123A');

select * from users;
