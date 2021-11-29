import React from 'react';
import OutletBaseInfo from '../../components/OutletBaseInfo';
import ProgressBar from '../../components/ProgressBar';

export default function Table() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-200">
        <tr>
          <th scope="col" className="px-4 py-3 text-xs text-left text-gray-800 tracking-wider">
            Outlet
          </th>
          <th scope="col" className="px-4 py-3 text-xs text-left text-gray-800 tracking-wider">
            Score
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-4 whitespace-nowrap">
            <OutletBaseInfo />
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            <ProgressBar score={56} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
