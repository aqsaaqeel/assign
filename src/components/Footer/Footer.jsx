export function Footer() {
    return (
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">
            © {new Date().getFullYear()} User's World. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }