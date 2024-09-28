import React from "react";

const HeroSection = ({ t }) => {
  return (
    <section>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      {/* Add buttons and other elements */}
    </section>
  );
};

export default HeroSection;
