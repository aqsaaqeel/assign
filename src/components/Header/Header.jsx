import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="bg-gray-800 py-2 lg:py-4">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/200/300"
            alt="Logo"
            className="w-12 h-12"
          />
          <Link to="/"><h1 className="ml-2 text-white text-2xl font-bold">People's World</h1></Link>
        </div>
        <div className="flex items-center">
          <div className="text-white text-lg font-semibold cursor-pointer">Get Users</div>
        </div>
      </div>
    </header>
  );
}
