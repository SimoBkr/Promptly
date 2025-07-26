import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-text-rgb">About Promptly</h1>
      <div className="max-w-2xl mx-auto bg-card-background-rgb p-8 rounded-lg shadow-md border border-border-rgb text-text-rgb">
        <p className="mb-4 text-lg font-semibold">
          Hi, my name is Mohamed Bakadir. I&apos;m a software engineer, and I built this platform. 
          You can connect with me on <Link href="https://www.linkedin.com/in/mohamed-b-405263110/" target="_blank" rel="noopener noreferrer" className="text-primary-rgb hover:underline">LinkedIn</Link>.
        </p>
        <p className="mb-4">
          This project is open source! Feel free to contribute on <Link href="https://github.com/SimoBkr/Promptly" target="_blank" rel="noopener noreferrer" className="text-primary-rgb hover:underline">GitHub</Link>.
        </p>
        <hr className="my-6 border-border-rgb" />
        <p className="mb-4">
          Promptly is your go-to platform for discovering, sharing, and managing AI prompts. 
          In the rapidly evolving world of artificial intelligence, having access to high-quality, 
          creative, and effective prompts is crucial for getting the best results from your AI models.
        </p>
        <p className="mb-4">
          Our mission is to build a vibrant community where AI enthusiasts, developers, 
          and creators can collaborate and expand the possibilities of AI. Whether you&apos;re 
          looking for prompts for image generation, natural language processing, 
          code generation, or anything in between, Promptly has you covered.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Our Vision</h2>
        <p className="mb-4">
          We envision a future where AI is accessible and empowering for everyone. 
          By fostering a collaborative environment for prompt engineering, we aim to 
          democratize access to powerful AI capabilities and inspire innovation across various fields.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Join Our Community</h2>
        <p>
          Become a part of Promptly today! Share your best prompts, explore what others have created, 
          and contribute to a growing knowledge base that benefits the entire AI community.
        </p>
      </div>
    </div>
  );
}