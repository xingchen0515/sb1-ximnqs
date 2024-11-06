import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import { marked } from 'marked';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export default function Post() {
  const { id } = useParams();
  const post = useStore(state => state.posts.find(p => p.id === id));

  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <article className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <time className="text-sm text-gray-500">
          {format(new Date(post.date), 'PPP', { locale: zhCN })}
        </time>
        <div 
          className="mt-6 prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </div>
    </article>
  );
}