import Image from "next/image";
import FeatureCard from "@/components/featureCard";

export default function HomePage() {
  return (
    <div className="pt-20"> {/* Add top padding for fixed header */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 animate-fadeInUp shadow-soft">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ Enterprise Teams
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeInUp">
            <span className="block text-neutral-900" style={{animationDelay: '200ms'}}>Supercharge Your</span>
            <span className="block text-gradient" style={{animationDelay: '400ms'}}>Development</span>
            <span className="block text-neutral-700 text-2xl md:text-3xl lg:text-4xl font-normal mt-4" style={{animationDelay: '600ms'}}>
              with Enterprise AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '800ms'}}>
            Transform your development workflow with our enterprise-grade AI platform. 
            Automate complex tasks, generate production-ready code, and accelerate innovation 
            with unparalleled security and compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{animationDelay: '1000ms'}}>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-neutral-700 font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-neutral-200 hover:border-neutral-300">
              Watch Demo
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto animate-fadeInUp" style={{animationDelay: '1200ms'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl transform scale-105"></div>
              <Image
                src="https://via.placeholder.com/1200x600/f8fafc/1e293b?text=Enterprise+AI+Dashboard"
                alt="AI Copilot Enterprise Dashboard"
                width={1200}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500K+", label: "Lines of Code Generated", delay: 0 },
              { value: "99.9%", label: "Uptime Guarantee", delay: 200 },
              { value: "10x", label: "Faster Development", delay: 400 },
              { value: "24/7", label: "Enterprise Support", delay: 600 }
            ].map((stat, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${stat.delay}ms`}}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-neutral-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Enterprise Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Unlock <span className="text-gradient">Powerful Capabilities</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our enterprise AI platform provides everything you need to transform your development process 
              with cutting-edge automation and intelligent assistance.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              iconSrc="https://via.placeholder.com/100x100/3b82f6/ffffff?text=AI"
              title="Intelligent Code Generation"
              description="Generate production-ready code, complete functions, and entire modules with enterprise-grade AI that understands your codebase and follows your patterns."
              gradient="from-blue-50 to-indigo-100"
              delay={0}
            />
            <FeatureCard
              iconSrc="https://via.placeholder.com/100x100/10b981/ffffff?text=AUTO"
              title="Automated Testing & QA"
              description="Automatically generate comprehensive test suites, identify edge cases, and ensure code quality with AI-powered testing and quality assurance."
              gradient="from-emerald-50 to-teal-100"
              delay={200}
            />
            <FeatureCard
              iconSrc="https://via.placeholder.com/100x100/8b5cf6/ffffff?text=SEC"
              title="Security & Compliance"
              description="Built-in security scanning, compliance checks, and enterprise-grade data protection ensure your code meets the highest industry standards."
              gradient="from-purple-50 to-violet-100"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development Process?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of enterprises who trust our AI platform to accelerate their development cycles 
            and deliver exceptional software faster than ever before.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Free Enterprise Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-sm font-medium">Trusted by Fortune 500</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-sm font-medium">SOC 2 Compliant</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-sm font-medium">99.99% SLA</div>
          </div>
        </div>
      </section>
    </div>
  );
}
