import { Song } from "./models/Song";

export const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL",
    songs: () => Song.find()
  },
  Mutation: {
    createSong: async (_, { song_title }) => {
      const tune = new Song({ song_title });
      await tune.save();
      return tune;
    }
  }
};

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
