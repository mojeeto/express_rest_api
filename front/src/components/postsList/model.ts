import axios from "../../../utils/axios";

export type PostType = {
  _id: string;
  title: string;
  content: string;
  imagePath: string;
  creator: {
    name: string;
  };
  createAt: Date;
  updatedAt: Date;
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

export const getPost = (postId: string) => {
  return axios.get(`/post/${postId}`);
};
