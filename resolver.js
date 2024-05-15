import db from "./_db.js";

export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)

        }
    },
    Review: {
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games
        },
        deleteReview(_, args) {
            db.reviews = db.reviews.filter((review) => review.id !== args.id)
            return db.reviews
        },
        deleteAuthor(_, args) {
            db.authors = db.authors.filter((author) => author.id !== args.id)
            return db.authors
        },
        addGame(_, args) {
            let game = {
                ...args.game, 
                id: Math.floor(Math.random() * 10000)
            }
            db.games.push(game)
            return game
        },
        addAuthor(_, args) {
            let author = {
                ...args.author, 
                id: Math.floor(Math.random() * 10000)
            }
            db.authors.push(author)
            return author
        },
        updateGame(_, args) {
            db.games = db.games.map((g) => {
                if(g.id === args.id) {
                    return {...g, ...args.edits}
                }
                return g
            })
            return db.games.find((g) => g.id === args.id)
        },
        updateAuthor(_, args) {
            db.authors = db.authors.map((a) => {
                if(a.id === args.id) {
                    return {...a, ...args.edits}
                }
                return a
            })
            return db.authors.find((a) => a.id === args.id)
        }
    }
}
