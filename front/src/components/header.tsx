import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-purple-800 text-white flex justify-between py-3 px-5 items-center">
      <button className="border-white border-2 p-2">Message Node</button>
      <div className="font-medium text-lg flex gap-5">
        <Link to={"/"} className="text-orange-400">
          Feed
        </Link>
        <Link to={"/logout"}>Logout</Link>
      </div>
    </header>
  );
}
