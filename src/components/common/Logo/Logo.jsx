import { ChefHat } from 'lucide-react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div
        className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transform group-hover:rotate-12
           transition-transform duration-300"
      >
        <ChefHat className="w-6 h-6 text-primary-content" />
      </div>
      <span className="text-xl md:text-2xl font-bold">
        Kitchen<span className="text-primary">Connect</span>
      </span>
    </Link>
  );
}

export default Logo
