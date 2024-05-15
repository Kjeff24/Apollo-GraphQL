export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        addAuthor(author: AddAuthorInput!): Author
        updateGame(id: ID!, edits: EditGameInput!): Game
        updateAuthor(id: ID!, edits: EditAuthorInput!): Author
        deleteGame(id: ID!): [Game]
        deleteAuthor(id: ID!): [Author]
        deleteReview(id: ID!): [Review]
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input AddAuthorInput {
        name: String!
        verified: Boolean!
    }
    input EditGameInput {
        title: String,
        platform: [String!]
    }
    input EditAuthorInput {
        name: String!
        verified: Boolean!
    }
`;
