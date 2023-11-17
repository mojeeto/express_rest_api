import PostsList from "./components/postsList";
import Modal from "./components/modal";

export default function App() {
  return (
    <div className="mt-16 flex flex-col items-center gap-5">
      <Modal buttenValue="New Post" color="purple" />
      <PostsList />
    </div>
  );
}
