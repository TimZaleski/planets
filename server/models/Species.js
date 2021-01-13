import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Species = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
