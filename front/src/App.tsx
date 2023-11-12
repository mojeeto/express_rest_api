import PostsList from "./components/postsList";
import { getPosts } from "./components/postsList/model";

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
};

export default function App() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <PostsList />
    </div>
  );
}
