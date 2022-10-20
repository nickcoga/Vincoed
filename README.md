# Hacking Challenge - Vincoed

Developer: Nick Correa Garcia

# Libraries/Tools used and why they were selected

The majority of the following tools that I've used on this project are the ones that I learned about first, and the ones that I have the most experience with.

### create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) because it helps me automatically setup these tools:

- automatic package.json created
- initial file structure
- default scripts (npm start, npm build)

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
