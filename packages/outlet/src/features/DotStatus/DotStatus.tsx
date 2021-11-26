import React from 'react';

export interface DotStatusProps {
  color: string;
}

export const DotStatus = () => {
  return <div aria-label="Status" className="w-2 h-2 bg-green-500 rounded-full" />;
};
