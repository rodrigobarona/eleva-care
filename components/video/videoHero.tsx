import React from 'react';

interface VideoHeroProps {
  width?: number;
  height?: number;
  src: string;
  playsInline?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: string;
  className?: string;
}
export function VideoHero({
  width,
  height,
  src,
  playsInline,
  autoPlay,
  muted,
  loop,
  preload,
  className,
}: VideoHeroProps) {
  return (
    <video
      width={width}
      height={height}
      style={{ height: '100%', width: '100%' }}
      playsInline={playsInline}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      preload={preload}
      className={className}
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
export default VideoHero;
