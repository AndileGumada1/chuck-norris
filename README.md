## Overview
This project is my first reactjs app which i wrote for a technical challange.With no prior experience in reactJS ,i was required to create a react app that generate Chuck Norris jokes from Chucknorris.io using GraphQL API .Chucknorris.io is a free JSON API for hand curated Chuck Norris facts. 

 
## Project

In the project directory, you can run:npm install && node server/server.js 

the app will open on port 4000 

- ReactJs 
- Apollo Client (react-apollo)
- Apollo Server
- NodeJS 
- Centralised state management (Redux/Context API + Action/Reducer pattern)
- solution was implemented in VSCode


### `App`

The app is broken down into two 
distinct parts, server and client:

### `Server`
Apollo GraphQL API that wraps chucknorris.io 
GraphQL API has a Query type that resolves all Categories (https://api.chucknorris.io/jokes/categories)
GraphQL API has a Query type that resolves a random joke given a Category as an argument (https://api.chucknorris.io/jokes/random?category={category})

### `Client`
Single Page App (SPA)
Consumes the above GraphQL API 
home page with a list of categories
When a category is clicked,  a random joke is displayed appropriately 
