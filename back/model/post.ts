import { model, Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  imagePath: string;
  content: string;
  creator: object;
}

const ProductSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    creator: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IPost>("Post", ProductSchema);
