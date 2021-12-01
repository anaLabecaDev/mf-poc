import React from 'react';
import { Link } from 'react-router-dom';

export default function OutletBaseInfo() {
  const outletId = '09904943094';
  return (
    <Link style={{ display: 'block', margin: '1rem 0' }} to="/outlet">
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span aria-label="Status" className="w-2.5 h-2.5 bg-green-500 rounded-full" />
          <span aria-label="OutletId" className="text-xs text-gray-600">
            09904943094
          </span>
        </div>
        <h2 className="text-sm text-gray-800 font-bold">Customer name</h2>
      </div>
    </Link>
  );
}
