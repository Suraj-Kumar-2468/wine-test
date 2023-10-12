import React from 'react';
import { calculateStatistics } from '../../utilities/statistics';

interface GammaTableProps {
  data: any[]; // Replace 'any' with your data type
}

const GammaTable: React.FC<GammaTableProps> = ({ data }) => {
  const classNames = Array.from(new Set(data.map((item) => item.Alcohol))); // Get unique class names

  return (
    <div>
      <h2>Gamma Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measures</th>
            {classNames.map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        <tr>
                <td>Gamma Mean</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Gamma', className, 'mean')).toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Gamma Median</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Gamma', className, 'median')).toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Gamma Mode</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Gamma', className, 'mode')).toFixed(3)}
                  </td>
                ))}
              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaTable;
