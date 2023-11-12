import { useEffect, useState } from "react";
import { PostType, getPosts } from "./model";
import Post from "./post";

export default function PostsList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts()
      .then((reponse) => {
        if (reponse.status !== 200) {
          throw Error;
        }
        setLoading(false);
        setPosts(reponse.data);
      })
      .catch((err) => {
        throw new Error("Error while getting posts");
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })
      ) : (
        <div>No post exists</div>
      )}
    </div>
  );
}
