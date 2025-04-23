import React, { useRef, useState } from 'react';

const SwipeUnlock: React.FC = () => {
  const [offsetX, setOffsetX] = useState(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);

  const thresholdRatio = 0.8;
  const redirectUrl = 'https://github.com/vitdonut/';

  const handleStart = (x: number) => {
    isDragging.current = true;
    startX.current = x;
  };

  const handleMove = (x: number) => {
    if (!isDragging.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const delta = x - startX.current;

    const clamped = Math.min(Math.max(0, delta), containerWidth); // giới hạn trong container
    setOffsetX(clamped);
  };

  const handleEnd = () => {
    isDragging.current = false;

    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const threshold = containerWidth * thresholdRatio;

    if (offsetX >= threshold) {
      window.open(redirectUrl, '_blank');
    }

    // reset về đầu
    setOffsetX(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-20 mx-auto mt-20 bg-gray-200 rounded-full overflow-hidden select-none"
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold">
        Vuốt để mở quảng cáo
      </div>

      <div
        className="absolute top-0 left-0 h-full w-20 bg-blue-600 rounded-full z-10 text-white flex items-center justify-center font-bold shadow-lg cursor-pointer touch-none"
        style={{ transform: `translateX(${offsetX}px)` }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      >
        ▶
      </div>
    </div>
  );
};

export default SwipeUnlock;
