import axios from "../../../utils/axios";

export type PostType = {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  creator: {
    name: string;
  };
  date: Date;
};

export type PostProps = {
  post: PostType;
};

export const getPosts = () => {
  return axios.get("/posts");
};

export const newPost = (data: { title: string; content: string }) => {
  return axios.post("/post", data);
};
