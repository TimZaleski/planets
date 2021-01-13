import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Moon = new Schema(
  {
    name: { type: String, required: true },
    planet: { type: ObjectId, ref: "Planet", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
