import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';

export default function Header() {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const logout = useStore(state => state.logout);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                大圣素材网
              </span>
            </Link>
            <div className="hidden md:flex md:space-x-8 md:ml-10">
              <Link
                to="/resources/images"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                图片素材
              </Link>
              <Link
                to="/resources/videos"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                视频素材
              </Link>
              <Link
                to="/resources/audio"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                音频素材
              </Link>
              <Link
                to="/resources/templates"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                模板
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  管理后台
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50"
                >
                  退出登录
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  会员价格
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
                >
                  登录
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}