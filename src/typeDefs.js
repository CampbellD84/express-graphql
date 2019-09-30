import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    songs: [Song!]!
  }

  type Song {
    id: ID!
    song_title: String!
  }

  type Mutation {
    createSong(song_title: String!): Song!
  }
`;
