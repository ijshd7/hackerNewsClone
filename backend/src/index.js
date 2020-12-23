const { ApolloServer } = require('apollo-server');

// 1
// defines GraphQL schema
const typeDefs = `
  type Query {
    info: String!
  }
`

// 2
// implementation
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// 3
// schema and resolvers are passed to the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );