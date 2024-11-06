import React from 'react';

export default function EmptyState() {
  return (
    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-600">暂无文章</h2>
      <p className="mt-2 text-gray-500">请以管理员身份登录后发布第一篇文章</p>
      <p className="mt-4 text-sm text-gray-400">用户名和密码都是：admin</p>
    </div>
  );
}