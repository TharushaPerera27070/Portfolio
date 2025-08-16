export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700 border-gray-400 dark:bg-[#121212] bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="dark:text-gray-400 text-gray-600">
          Tharusha Perera © {new Date().getFullYear()} | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
