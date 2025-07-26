'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Prompt {
  id: string;
  title: string;
  prompt: string;
}

interface Category {
  id: string;
  name: string;
  prompts: Prompt[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch('/prompts.json');
      const data = await res.json();
      setCategories(data.categories);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(lowerCaseQuery) ||
      category.prompts.some(prompt =>
        prompt.title.toLowerCase().includes(lowerCaseQuery) ||
        prompt.prompt.toLowerCase().includes(lowerCaseQuery)
      )
    );
    setFilteredCategories(filtered);
  }, [searchQuery, categories]);

  return (
    <main className="py-8">
      <section className="text-center py-20 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Discover & Share AI Prompts</h1>
        <p className="text-xl mb-8 opacity-90">Unleash your creativity with a vast collection of prompts for all your AI needs.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search prompts or categories..."
            className="w-full max-w-md px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              <p className="text-gray-700">{category.prompts.length} prompts</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
