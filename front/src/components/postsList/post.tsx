import React from "react";
import { PostProps } from "./model";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Card
      className="max-w-sm"
      imgSrc={`http://localhost:8080/${post.imagePath}`}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.content}
      </p>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Writed By: {post.creator.name}
      </span>
      <div className="flex gap-2.5">
        <Link to={`/post/${post._id}`}>
          <Button>View</Button>
        </Link>
        <Button color="success">Edit</Button>
        <Button color="failure">Delete</Button>
      </div>
    </Card>
  );
};

export default Post;
