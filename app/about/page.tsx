"use client";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto text-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-orange-600">
        About the Pokémon World
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        The Pokémon world is a vast and diverse place filled with mysterious
        creatures known as Pokémon. These creatures coexist with humans and can
        be trained to battle, evolve, and even form deep friendships.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        From the lush forests of Kanto to the icy peaks of Sinnoh, each region
        brings unique environments, Pokémon species, and cultures. The journey
        of a Pokémon trainer is not just about catching them all — it’s a
        journey of growth, adventure, and discovery.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Whether you are new to the world of Pokémon or a long-time fan, this
        universe continues to expand with new stories, games, and unforgettable
        moments.
      </p>
      <div className="mb-8">
        <Image
          src="/Alola.webp"
          alt="Pokémon Regions Map"
          width={800}
          height={450}
          className="w-full h-auto rounded shadow-md"
        />
        <p className="text-sm text-gray-600 text-center mt-2">
          Map of regions from the Pokémon anime (source: Bulbapedia)
        </p>
      </div>
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
