# LAB - Class 06

## Project: Basic Auth

### Author: Donna Ada

### Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard.


#### Using an HTTP REST client or a web form

- Make a POST request to the/signup route with username and password.
- Your server should support both JSON and FORM data as input.
- On a successful account creation, return a 201 status with the user object in the body.
- On any error, trigger your error handler with an appropriate error.

#### Using am HTTP REST client, or a web form

- Make a POST request to the /signin route.
- Send a basic authentication header with a properly encoded username and password combination.
- On a successful account login, return a 200 status with the user object in the body.
- On any error, trigger your error handler with the message “Invalid Login”.

#### #Get One Record

- CRUD Operation: Read
- REST Method: GET
- Path: /food/1
- Returns: The object from the database, which has the id matching that which is in the path.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/donnaada/basic-auth/actions)
- [back-end server url](https://api-server-6a4s.onrender.com)
-

### Collaborators

Referenced Ryan Gallaway's Demo Code
Help on associations from Aaron Imbrock

### Setup

#### `.env` requirements (where applicable)

Port variable located within .env.sample

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

Clone repo, `npm i`, `npm run db:create`, then run `nodemon` in terminal

#### Features / Routes

- Feature One: Details of feature
- POST : `/signup`
- POST : `/signin`

#### UML

![Lab UML](./assets/uml.png)
