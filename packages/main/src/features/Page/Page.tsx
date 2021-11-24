import React from 'react';

export interface PageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
  <section className="w-full h-full flex">
    <header className="h-20">header</header>
    <article className="flex-grow">content</article>
  </section>
);
