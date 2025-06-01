import Image from "next/image";
import FeatureCard from "@/components/featureCard"; // Ensure FeatureCard is imported

export default function HomePage() {
  return (
    <> {/* Use a fragment to return multiple sections */}
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block">Supercharge Your Workflow</span>
          <span className="block text-sky-400">with AI Copilot</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Our AI Copilot helps you automate tasks, generate code, and solve complex problems faster than ever before. Boost your productivity and focus on what matters most.
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Get Started Now
        </button>
        <div className="mt-20">
          <Image
            src="https://via.placeholder.com/1200x400" // Placeholder image
            alt="AI Copilot in action"
            width={1200}
            height={400}
            className="rounded-lg shadow-2xl object-cover" // Added object-cover
          />
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-slate-100"> {/* Added a light background for contrast */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16">
          Unlock <span className="text-sky-600">Powerful Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            iconSrc="https://via.placeholder.com/100x100/007bff/ffffff?Text=Icon1" // Placeholder Icon
            title="Automated Task Completion"
            description="Let our AI handle repetitive tasks, freeing up your time for more critical work."
          />
          <FeatureCard
            iconSrc="https://via.placeholder.com/100x100/28a745/ffffff?Text=Icon2" // Placeholder Icon
            title="Intelligent Code Generation"
            description="Generate boilerplate code, debug existing scripts, and even write complex algorithms with AI assistance."
          />
          <FeatureCard
            iconSrc="https://via.placeholder.com/100x100/ffc107/000000?Text=Icon3" // Placeholder Icon
            title="Advanced Problem Solving"
            description="Tackle complex challenges with AI-powered insights and data analysis capabilities."
          />
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Productivity?
        </h2>
        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-xl mx-auto">
          Join thousands of developers and teams who are already leveraging the power of AI Copilot.
        </p>
        <button className="bg-white hover:bg-slate-100 text-sky-600 font-semibold py-4 px-10 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          Sign Up Free & Explore
        </button>
      </div>
    </section>
    </> // Close the fragment
  );
}
