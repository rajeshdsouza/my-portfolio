// File: /pages/blog.tsx
import { useState } from 'react';
import BlogCard from '../components/BlogCard';

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

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications",
    description: "A comprehensive guide to creating scalable and maintainable web applications using modern technologies.",
    mediumUrl: "https://medium.com/@yourusername/article-1",
    image: "/api/placeholder/400/225",
    date: "Feb 20, 2024",
    readTime: "8 min read",
    tags: ["Web Development", "React", "Tutorial"]
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-zinc-400 max-w-2xl">
            Thoughts, learnings, and insights about technology, development, and business.
            All articles are also published on Medium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
