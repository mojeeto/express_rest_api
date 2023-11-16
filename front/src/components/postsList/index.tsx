import { useEffect, useState } from "react";
import { getPosts } from "./model";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../utils/redux";
import { addAllPostsAction } from "../../../utils/redux/action/postAction";

export default function PostsList() {
  const [loading, setLoading] = useState<boolean>(true);
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    getPosts()
      .then((reponse) => {
        if (reponse.status !== 200) {
          throw Error;
        }
        setLoading(false);
        dispatch(addAllPostsAction(reponse.data));
      })
      .catch((err) => {
        throw new Error("Error while getting posts");
      });
  }, []);
  return (
    <div className="flex flex-col gap-5">
      {loading ? (
        <div>Loading</div>
      ) : posts.length > 0 ? (
        posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })
      ) : (
        <div>No post exists</div>
      )}
    </div>
  );
}
