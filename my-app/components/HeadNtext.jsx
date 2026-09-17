import React from "react";

const HeadNtext = ({ heading, text, styleText, className = "" }) => {
  return (
    <article
      className={`max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:px-6 lg:px-8 ${className}`}
    >
      <h2
        className={`capitalize text-2xl font-bold sm:text-3xl md:text-4xl ${styleText || "text-brand"}`}
      >
        {heading}
      </h2>
      <p
        className={`text-base leading-relaxed sm:text-lg ${styleText || "text-gray-600"}`}
      >
        {text}
      </p>
    </article>
  );
};

export default HeadNtext;
