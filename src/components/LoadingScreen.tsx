'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Bắt đầu fade in sau 0.5s
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // Giả lập loading xong sau 3s
    const loadingTimeout = setTimeout(() => {
      setAnimateOut(true); // bắt đầu vén màn lên
      setTimeout(() => setShowLoader(false), 1000); // chờ animation hoàn tất
    }, 3000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden transition-all duration-1000
        ${animateOut ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <div
        className={`transition-all duration-1000 flex items-center justify-center flex-col
          ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          ${animateOut ? 'opacity-0 -translate-y-10' : ''}
        `}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent" />
        <p className="mt-4 text-gray-500 text-sm">Đang tải...</p>
      </div>
    </div>
  );
}
