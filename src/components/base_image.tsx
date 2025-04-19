'use client';
import Image, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BaseImage(props: ImageProps) {
  const { src, alt, ...rest } = props;

  if (!alt || alt.trim() === '') {
    console.warn(`⚠️ Ảnh "${src}" thiếu alt text. Hãy bổ sung để tăng accessibility.`);
  }

  const newSrc =
    typeof src === 'string' && !src.startsWith('http')
      ? `${basePath}${src}`
      : src;

  return <Image src={newSrc} alt={alt} {...rest} />;
}
