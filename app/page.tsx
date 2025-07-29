import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-600 mb-6">
        Welcome to the Pokémon Portal
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl">
        Explore the Pokémon universe, search for your favorite Pokémon, and
        learn all about their world!
      </p>
      <div className="mb-8 w-full max-w-lg">
        <Image
          src="/Pikachu.webp" // Зображення в /public
          alt="Pikachu waving"
          width={600}
          height={400}
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
      <Link
        href="/search"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition text-lg font-medium"
      >
        🔍 Start Exploring
      </Link>
    </section>
  );
}
