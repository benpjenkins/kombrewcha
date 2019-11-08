//database collection
import mongoose, { Schema } from "mongoose";

export const BatchesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.models.batches ||
  mongoose.model("batches", BatchesSchema);
