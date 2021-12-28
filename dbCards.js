import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  imgUrl: String,
});

const Cards = mongoose.model("Cards", cardSchema);

export default Cards;
