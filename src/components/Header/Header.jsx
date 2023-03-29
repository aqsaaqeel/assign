import { FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
    return (
      <header className="bg-gray-800 py-2 lg:py-4">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
          <div className="flex items-center">
            <img src="https://picsum.photos/200/300" alt="Logo" className="w-12 h-12" />
            <h1 className="ml-2 text-white text-2xl font-bold">Pizza World</h1>
          </div>
          <div className="flex items-center">

            <button className="ml-4 lg:hidden">
              <FiMenu className="w-6 h-6 text-white" />
            </button>
            <button className="ml-4">
              <FiShoppingCart className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>
    );
  }