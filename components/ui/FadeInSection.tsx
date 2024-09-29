"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

// Define the FadeInSection component with children type
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: config.molasses,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    // Check if domRef.current is not null before observing
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <animated.div ref={domRef} style={props}>
      {children}
    </animated.div>
  );
};

export default FadeInSection;
