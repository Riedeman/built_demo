CREATE USER IF NOT EXISTS 'dude'@'localhost' IDENTIFIED BY 'PW...Shhhhhh';
GRANT ALL PRIVILEGES ON *.* TO 'dude'@'localhost';

DROP DATABASE `built`;
CREATE DATABASE `built`;
USE built;

DROP TABLE IF EXISTS posts;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `contents` longtext,
  `timeStamp` datetime DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE posts AUTO_INCREMENT = 1;

DROP TABLE IF EXISTS categories;
CREATE TABLE `built`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
