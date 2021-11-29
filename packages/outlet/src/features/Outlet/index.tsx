import React from 'react';
import OutletBaseInfo from '../../components/OutletBaseInfo';
import ProgressBar from '../../components/ProgressBar';

export const Outlet = () => {
  const Features = ['ORDERING'];
  return (
    <div className="h-full w-screen flex flex-col">
      <div className="bg-gray-400">
        <OutletBaseInfo />
        <ProgressBar score={56} />
      </div>
      <div className="h-full">Right</div>
    </div>
  );
};
