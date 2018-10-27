CREATE DATABASE burgers;
USE burgers;

CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burgerName` VARCHAR( 255 ) NOT NULL,
  `isEaten` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
