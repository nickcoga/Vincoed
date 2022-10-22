# Hacking Challenge - Vincoed

Developer: Nick Correa Garcia

![image](https://user-images.githubusercontent.com/68827067/197315635-0a9261fc-4a14-4bc8-a81d-8862544dbf56.png)

# Intruccions

This application is structured by 2 folders, one for the client for the frontend and another for the server for the backend.
It is developed under the technologies of Node JS with Postgress and React JS with CSS.
For the development of this application the following tools were used:

- Sequelize
- PostGress SQL
  *Express Morgan
  *nodemon
- React Router Sun v6.4
  In order to run this application in developer mode you must first install all the dependencies:
  \*npm install
  Then to be able to make the connection with the backend you must have postgres installed and configured for the connection.
  The connection is already found internally in the Server/src/database.js file with the credentials:
  database: vincoeddb
  user: postgres
  password: admin
  Once the connection is verified, you must run the following command within the server location to initialize the server:
- npm run dev

  If everything is done correctly, it should show you an image like this:

  ![image](https://user-images.githubusercontent.com/68827067/197311521-cef0d485-b529-42b5-acb1-3ad8372b2f17.png)

  As a next step you should start the frontend application from the client location with the command:

- npm star
  If everything is correct, it should show you an image connected to port 3000:

  ![image](https://user-images.githubusercontent.com/68827067/197312295-f5938e11-8529-468f-8c66-acba1b565ddb.png)

  Currently this application consists of the simulation of a restaurant search engine where we can create new restaurants as their dishes and at the same time filter them by name.

  As the first time the application will be completely empty you can register manually with your own data or you can also use the data from this file:

  - [server/seeders/seeds.md](https://github.com/nickcoga/Vincoed/blob/main/server/seeders/seeds.md)

  And with this you can now test and manage the Rest API within the application.

  ![image](https://user-images.githubusercontent.com/68827067/197315322-b03098e0-e9b8-4b26-bc1d-ed92f492e885.png)

  ![image](https://user-images.githubusercontent.com/68827067/197315366-2ab3da19-040a-41d8-ba35-820aaac6cdb1.png)

  ![image](https://user-images.githubusercontent.com/68827067/197315443-ccd0b184-5354-481f-aa3b-7fd75a217274.png)

# Libraries/Tools used and why they were selected

The majority of the following tools that I've used on this project are the ones that I learned about first, and the ones that I have the most experience with.

### create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) because it helps me automatically setup these tools:

- automatic package.json created
- initial file structure
- default scripts (npm start, npm build)

### Sequelize

Sequelize is an ORM for Nodejs that allows us to manipulate several SQL databases in a very simple way, among these databases we can find: mysql, sqlite, postgres, mssql.

### Media Queries

Definitions: In web development, media queries are a CSS3 module that allows the content representation to be adapted to device characteristics such as screen resolution (for example, a smartphone in front of high-definition screens) or the presence of accessibility features such as braille.

This css feature was used to achieve responsive design (view Web and view mobile min-width:768px) throughout all my aplicaction.

### Fetch API

Definition: The Fetch API allows you to asynchronously (Async) request for a resource. Use the fetch() method to return a promise that resolves into a Response object. To get the current data, you call one of the methods of the Response object e.g., text() or json(). These methods resolve into the actual data.

This method was used to receive and send query data through different endpoints.

### React Hooks

Definition: It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

This method was used in all components with differents props. One of the most important components was InputNumber in ContentPrice.

Hooks used:
useState to generate state for the application
useEffect to calculate price value
useHistory to move between pages (push and go back)
