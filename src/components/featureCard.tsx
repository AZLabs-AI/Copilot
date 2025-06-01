import Image from 'next/image'; // Using Next.js Image component for potential optimization

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function FeatureCard({ iconSrc, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-1">
      <div className="w-20 h-20 mb-6 relative flex items-center justify-center bg-sky-100 rounded-full">
        {/* Placeholder for a more sophisticated icon or image handling */}
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={48} // Adjust size as needed
          height={48}
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
