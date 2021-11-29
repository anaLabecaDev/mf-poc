import React from 'react';

export type ProgressBarProps = { score: number };

export default function ProgressBar({ score }: ProgressBarProps) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-end">
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-green-500">{`${score}%`}</span>
        </div>
      </div>
      <div className="overflow-hidden h-1 text-xs flex rounded bg-green-200">
        <div
          style={{ width: `${score}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        />
      </div>
    </div>
  );
}
