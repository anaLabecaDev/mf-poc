import React from 'react';
import ReactDOM from 'react-dom';
import { DotStatus } from './components/DotStatus/DotStatus';

import './index.scss';

const App = () => (
  <div className='w-full h-full flex'>
    <DotStatus />
    <em>09904943094</em>
    <h1>Outlet Name</h1>
    <address>Outlet address, number</address>
    <div className='flex flex-row gap-4'>
      <button className='h-2.5 border-gray-800 text-sm font-bold'>
        Book Visit
      </button>
      <button className='h-2.5 border-gray-800 text-sm font-bold'>
        Show Route
      </button>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
