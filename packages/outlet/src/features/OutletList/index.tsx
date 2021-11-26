import React from 'react';

export const OutletList = () => {
  const quantity = 8;
  return (
    <section>
      <header>
        <input type="text" placeholder="search" />
        <em>{quantity}</em>
      </header>
      <ol>
        <li>
          <p>83737373</p>
          <p>Customer name</p>
        </li>
      </ol>
    </section>
  );
};
