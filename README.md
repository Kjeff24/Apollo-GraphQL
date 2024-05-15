# GRAPHQL 
This project is a simple graphql server that uses the apollo server to create a graphql server. 

## USAGE
1. Clone this repo [Apollo-GraphQL](https://github.com/Kjeff24/Apollo-GraphQL.git)
2. Run `npm install` to install all dependencies
3. Run `npm install -g nodemon` if you do not have nodemon installed
4. Start the server `nodemon index`

## TECHNOLOGIES
1. Node.js
2. Apollo Server

## ADDITIONAL INFORMATION
- `index.js` is the main file of the project that creates the apollo server and initialize the server.
- `schema.js` contains the definition of your GraphQL schema using the Schema Definition Language (SDL) or GraphQL schema builder functions.
- `resolver.js` contains the resolver functions responsible for fetching the data associated with each field in your GraphQL schema.
- The server is able to create, read, update, and delete items in `_db.js`

## CRUD EXAMPLES
Eg.1
```
Read Operation 1:
query Games {
  games {
    id,
    title,
    platform,
    reviews {
        content
    }  
  }
}

Read Operation 2:
query Games($id: ID!) {
  game(id: $id) {
    id,
    platform,
    title,
    reviews {
      content
    }
  }
}

Variables:

{
  "id": "1"
}

```

Eg.2
``` 
Add Operation:

mutation AddGameMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id,
    title,
    platform
  }
}

Variables:

{
  "game": {
  "title": "a new game",
  "platform": ["x-box", "ps5"]

  }
}
```

Eg.3
```
Update Operation: 

mutation UpdateMutation($id: ID!, $edits: EditGameInput!){
  updateGame(id: $id, edits: $edits) {
    id,
    platform,
    title
  }
}

Variables: 

{
  "id": "5",
  "edits": {
  "title": "an old game",
  "platform": ["x-box", "ps5"]
  }
}

```

Eg.4
```
Delete Operation:

mutation deleteGame($id: ID!){
  deleteGame(id: $id) {
    id,
    platform,
    title
  }
}

Variables:

{
  "id": "1"
}

```