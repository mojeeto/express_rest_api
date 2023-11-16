import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { PostType, getPost } from "./model";

const PostPage: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  useEffect(() => {
    if (postId) {
      getPost(postId)
        .then((post) => {
          console.log(post);
          setPost(post.data.post as PostType);
        })
        .catch((err) => {
          throw err;
        });
    }
    redirect("/");
  }, []);
  return <div>{post?.content}</div>;
};

export default PostPage;
