import axios from "axios";

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
  return axios.get("http://localhost:8080/posts");
};
