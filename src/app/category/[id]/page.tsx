'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

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

export default function CategoryPage() {
  const params = useParams();
  
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await fetch('/prompts.json');
        const data = await res.json();
        const foundCategory = data.categories.find((c: Category) => c.id === params.id);
        setCategory(foundCategory || null);
      } catch (error) {
        console.error("Failed to fetch category:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategory();
  }, [params.id]);

  const handleCopy = (promptText: string, promptId: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(promptId);
    setTimeout(() => setCopiedPromptId(null), 2000); // Reset after 2 seconds
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-text-rgb">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.prompts.map((prompt) => (
          <div key={prompt.id} className="card p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-2 text-text-rgb">{prompt.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow">{prompt.prompt}</p>
            <button
              className={`w-full px-4 py-2 rounded-lg transition-colors ${copiedPromptId === prompt.id ? 'bg-accent-rgb' : 'bg-cyan-500 hover:bg-cyan-600'} text-white`}
              onClick={() => handleCopy(prompt.prompt, prompt.id)}
            >
              {copiedPromptId === prompt.id ? 'Copied!' : 'Copy Prompt'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}