const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    dateJoined: String!
    favorites: [Favorite]
    friends: [User]
    bands: [Band]
  }

  type Band {
    _id: ID!
    bandname: String!
    members: [User]
    stream_links: [String]
  }

  type Favorite {
    _id: ID!
    bandname: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    bands: [Band]
    band(_id: ID!): Band
  }

  input UserInput {
    _id: ID!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(username: String!, password: String!): Auth
    createBand(bandname: String!, members: [UserInput]): Band
    updateBand(bandname: String, members: [UserInput]): Band
    addFavorite(bandname: String!): User
    removeFavorite(bandname: String): User
  }
`;

module.exports = typeDefs;
