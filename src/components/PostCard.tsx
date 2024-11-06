import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="px-6 py-4">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        <time className="block mt-2 text-sm text-gray-500">
          {format(new Date(post.date), 'PPP', { locale: zhCN })}
        </time>
        <p className="mt-3 text-gray-600 leading-relaxed">{post.excerpt}</p>
        <Link 
          to={`/post/${post.id}`}
          className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
        >
          阅读全文 →
        </Link>
      </div>
    </article>
  );
}