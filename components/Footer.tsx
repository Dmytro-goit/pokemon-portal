export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-700 text-sm mt-8 py-4">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} Pokemon Portal. All rights are reserved
      </div>
    </footer>
  );
}
