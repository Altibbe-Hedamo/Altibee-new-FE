import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../pages/BlogPage';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="p-8 text-center text-red-600">Post not found</div>;

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-emerald-600 font-mono mb-8">
          {post.date} • {post.category}
        </p>
        <img
          src={post.thumbnail}
          alt={post.title}
          className="rounded-2xl shadow-xl w-full h-64 md:h-96 object-cover mb-8"
        />
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link
          to="/blog"
          className="btn-mono mt-12 inline-flex items-center"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}