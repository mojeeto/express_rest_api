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

export const newPost = (data: FormData) => {
  return axios.post("/post", data);
};

export const updatePost = (data: FormData, postId: string) => {
  return axios.put(`/post/${postId}`, data);
};

export const getPost = (postId: string) => {
  return axios.get(`/post/${postId}`);
};
