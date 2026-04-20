import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  href: string;
}

export function CategoryCard({ title, icon: Icon, image, href }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        <Icon className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
    </Link>
  );
}
