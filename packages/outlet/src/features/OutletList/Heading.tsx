import React, { useState } from 'react';

export default function Heading() {
  const [query, setQuery] = useState('');
  const quantity = 8;
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
      <input
        className="appearance-none max-w-s border border-gray-300 px-4 py-3 w-2/5 text-sm"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an outlet..."
      />
      <em className="text-sm font-bold text-gray-400">{`${quantity} Results`}</em>
    </header>
  );
}
