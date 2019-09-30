import mongoose from "mongoose";

export const Song = mongoose.model("Song", {
  song_title: String
});
