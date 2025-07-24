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

async function getCategories(): Promise<Category[]> {
  const res = await fetch('http://localhost:3000/prompts.json');
  const data = await res.json();
  return data.categories;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="py-12">
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Discover & Share AI Prompts</h1>
        <p className="text-xl mb-8 opacity-90">Unleash your creativity with a vast collection of prompts for all your AI needs.</p>
        <Link href="#categories" className="btn-primary">
          Explore Prompts
        </Link>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.prompts.length} prompts</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
