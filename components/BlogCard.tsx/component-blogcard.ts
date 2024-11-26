// File: /components/BlogCard.tsx
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  mediumUrl: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="aspect-[16/9] bg-zinc-700 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-zinc-700 text-custom-cyan rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">
          {post.title}
        </h3>

        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm text-zinc-500 mb-3">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <a 
          href={post.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-custom-cyan hover:text-custom-cyan/80 text-sm"
        >
          Read on Medium →
        </a>
      </div>
    </motion.div>
  );
}
