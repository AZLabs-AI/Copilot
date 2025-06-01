import Image from 'next/image'; // Using Next.js Image component for potential optimization

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
}

export default function FeatureCard({ 
  iconSrc, 
  title, 
  description, 
  gradient = "from-blue-50 to-indigo-100",
  delay = 0 
}: FeatureCardProps) {
  return (
    <div 
      className={`group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp border border-neutral-100/50 hover:border-blue-200/50 overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Icon Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={40}
              height={40}
              className="filter brightness-0 invert"
            />
          </div>
          {/* Floating accent */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full border-2 border-white shadow-md animate-float"></div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed text-sm group-hover:text-neutral-700 transition-colors duration-300">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:text-blue-700 transition-colors">
            Learn more
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border border-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border border-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
    </div>
  );
}
