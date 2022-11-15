
CREATE TABLE `users` (
  `USER_SEQ` int NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(100) NOT NULL,
  `USER_PASSWORD` varchar(50) NOT NULL,
  `USER_EMAIL` varchar(100) NOT NULL,
  `USER_PROFILE_IMAGE_URL` varchar(500) DEFAULT '/img/noProfile.png',
  `USER_REGISTER_DATE` date DEFAULT NULL,
  `USER_CLSF` char(3) DEFAULT NULL,
  PRIMARY KEY (`USER_SEQ`),
  UNIQUE KEY `USER_EMAIL_UNIQUE` (`USER_EMAIL`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `board` (
  `BOARD_ID` int NOT NULL AUTO_INCREMENT,
  `USER_SEQ` int NOT NULL,
  `TITLE` varchar(500) DEFAULT NULL,
  `CONTENT` text,
  `REG_DT` datetime DEFAULT NULL,
  `READ_COUNT` int DEFAULT '0',
  PRIMARY KEY (`BOARD_ID`),
  KEY `FK_USER_idx` (`USER_SEQ`),
  CONSTRAINT `FK_USER` FOREIGN KEY (`USER_SEQ`) REFERENCES `users` (`USER_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=6339 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `board_file` (
  `FILE_ID` int NOT NULL AUTO_INCREMENT,
  `BOARD_ID` int NOT NULL,
  `FILE_NAME` varchar(500) NOT NULL,
  `FILE_SIZE` int NOT NULL,
  `FILE_CONTENT_TYPE` varchar(500) NOT NULL,
  `FILE_URL` varchar(500) NOT NULL,
  `REG_DT` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`FILE_ID`),
  KEY `BOARD_FILE_FK_idx` (`BOARD_ID`),
  CONSTRAINT `BOARD_FILE_FK` FOREIGN KEY (`BOARD_ID`) REFERENCES `board` (`BOARD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `board_user_read` (
  `board_id` int NOT NULL,
  `user_seq` int NOT NULL,
  KEY `BOARD_USER_READ_FK_02_idx` (`user_seq`),
  KEY `BOARD_USER_READ_FK_01_idx` (`board_id`),
  CONSTRAINT `BOARD_USER_READ_FK_01` FOREIGN KEY (`board_id`) REFERENCES `board` (`BOARD_ID`),
  CONSTRAINT `BOARD_USER_READ_FK_02` FOREIGN KEY (`user_seq`) REFERENCES `users` (`USER_SEQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `code` (
  `group_code` char(3) NOT NULL,
  `code` char(3) NOT NULL,
  `code_name` varchar(50) DEFAULT NULL,
  `use_yn` char(1) DEFAULT NULL,
  PRIMARY KEY (`group_code`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `group_code` (
  `group_code` char(3) NOT NULL,
  `group_code_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`group_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


insert into board_adv.users select * from board.users;

select * from board.board;
insert into board_adv.board select * from board.board;
insert into board_adv.board_file select * from board.board_file;
insert into board_adv.board_user_read select * from board.board_user_read;


