import React, { useRef } from 'react';

const SwipeRedirect = () => {
  const touchStartX = useRef<number | null>(null); // 👈 thêm kiểu number | null

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return; // 👈 đảm bảo không null

    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;

    const threshold = window.innerWidth * 0.8;
    if (diff > threshold) {
      window.open('https://github.com/vitdonut/', '_blank');
    }

    // Reset sau khi xử lý xong
    touchStartX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-screen h-screen bg-blue-600 z-100 text-white flex items-center justify-center text-2xl font-bold select-none"
      style={{ touchAction: 'pan-y' }}
    >
      Vuốt sang phải để mở quảng cáo
    </div>
  );
};

export default SwipeRedirect;
