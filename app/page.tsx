"use client";
import { useState } from "react";
import Quiz from "../app/components/Quiz";

const categories = ["Ai", "Cars", "Coding", "Sports"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Legend Saga Quiz</h1>
      {selectedCategory ? (
        <Quiz category={selectedCategory} />
      ) : (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:text-blue-600"
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="mt-6 block mx-auto bg-red-500 text-white px-4 py-2 rounded"
        >
          Back to Categories
        </button>
      )}
    </div>
  );
}
