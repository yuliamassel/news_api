CREATE TABLE users (
  id VARCHAR(128),
  name VARCHAR (64) NOT NULL,
  email VARCHAR (64) NOT NULL,
  password VARCHAR (64) NOT NULL,
  username VARCHAR (64),
  addres VARCHAR (128),
  telephone VARCHAR (64),
  about TEXT,
  job VARCHAR (64),
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP,
  PRIMARY KEY (id)
);