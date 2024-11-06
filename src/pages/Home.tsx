import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhotoIcon, 
  VideoCameraIcon, 
  MusicalNoteIcon, 
  DocumentIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const categories = [
  { name: '图片素材', icon: PhotoIcon, count: '10,000+', color: 'bg-pink-500' },
  { name: '视频素材', icon: VideoCameraIcon, count: '5,000+', color: 'bg-blue-500' },
  { name: '音频素材', icon: MusicalNoteIcon, count: '3,000+', color: 'bg-purple-500' },
  { name: '文档模板', icon: DocumentIcon, count: '2,000+', color: 'bg-green-500' },
];

const featuredResources = [
  {
    id: 1,
    title: '商务简约PPT模板',
    category: '模板',
    downloads: 1234,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format'
  },
  {
    id: 2,
    title: '创意海报背景',
    category: '图片',
    downloads: 856,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format'
  },
  {
    id: 3,
    title: '科技感视频背景',
    category: '视频',
    downloads: 677,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format'
  },
  {
    id: 4,
    title: '商业配乐素材',
    category: '音频',
    downloads: 432,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format'
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 英雄区域 */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            大圣素材网
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100">
            海量正版设计素材，让创作更简单
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                className="block w-full rounded-l-lg border-0 py-4 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                placeholder="搜索素材..."
              />
              <button className="flex-none bg-indigo-500 px-6 text-white font-semibold rounded-r-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 分类区域 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">素材分类</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg ${category.color}`}>
                <category.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{category.count} 个文件</p>
            </div>
          ))}
        </div>
      </div>

      {/* 热门素材 */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">热门素材</h2>
          <Link 
            to="/resources" 
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            查看更多 →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative pt-[56.25%]">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {resource.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                    {resource.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <FireIcon className="h-4 w-4 text-orange-500 mr-1" />
                    {resource.downloads}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 会员区域 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              加入会员
              <br />
              获取海量优质素材
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              每天更新上千个精选素材，助力创作无限可能
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="rounded-md shadow">
              <Link
                to="/pricing"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 md:py-4 md:px-10 md:text-lg"
              >
                立即开通
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}