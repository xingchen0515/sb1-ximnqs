import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  resources: [
    { name: '图片素材', href: '/resources/images' },
    { name: '视频素材', href: '/resources/videos' },
    { name: '音频素材', href: '/resources/audio' },
    { name: '文档模板', href: '/resources/templates' },
  ],
  support: [
    { name: '使用指南', href: '/guide' },
    { name: '常见问题', href: '/faq' },
    { name: '联系我们', href: '/contact' },
    { name: '关于我们', href: '/about' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '使用条款', href: '/terms' },
    { name: '版权声明', href: '/copyright' },
  ],
  social: [
    {
      name: '微信公众号',
      href: '#',
    },
    {
      name: '微博',
      href: '#',
    },
    {
      name: '知乎',
      href: '#',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              大圣素材网
            </Link>
            <p className="text-gray-500 text-base">
              提供海量正版设计素材，让创作更简单、更高效
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  素材资源
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  支持
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  法律
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2023 大圣素材网. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}