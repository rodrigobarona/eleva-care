import React from 'react';

export function Video() {
  return (
    <video width="1920" height="1080">
      <source src="/videos/eleva-care-intro-banner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
