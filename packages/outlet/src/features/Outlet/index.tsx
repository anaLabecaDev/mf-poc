// import Empty from 'main/Empty';
import React from 'react';
import OutletBaseInfo from '../../components/OutletBaseInfo';
import ProgressBar from '../../components/ProgressBar';

export const Outlet = () => {
  const Features = ['ORDERING'];
  return (
    <div className="w-screen h-screen flex">
      <div className="h-full w-2/5 max-w-sm bg-gray-300">
        <OutletBaseInfo />
        <ProgressBar score={56} />
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div className="h-full flex-grow">
        Nada
        {/* <Empty /> */}
      </div>
    </div>
  );
};
