import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addPost = useStore(state => state.addPost);
  const posts = useStore(state => state.posts);
  const deletePost = useStore(state => state.deletePost);
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    addPost({
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString(),
      excerpt: content.slice(0, 150) + (content.length > 150 ? '...' : '')
    });
    setTitle('');
    setContent('');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">发布新文章</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">标题</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">内容 (支持 Markdown)</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            发布
          </button>
        </div>
      </form>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">文章管理</h2>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="flex justify-between items-center p-4 border rounded">
              <span className="font-medium">{post.title}</span>
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-600 hover:text-red-800"
              >
                删除
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}