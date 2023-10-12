import React from 'react';
import { calculateStatistics } from '../../utilities/statistics';
import { WineDataPrototype } from '../../data/WineData';

interface FlavanoidsTableProps {
    data: WineDataPrototype[]; // Replace 'any' with your data type
}


const FlavanoidsTable: React.FC<FlavanoidsTableProps> = ({ data }) => {
    const classNames = Array.from(new Set(data.map((item) => item.Alcohol))); // Get unique class names

    return (
        <div>
            <h2>Flavanoids Statistics</h2>
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
                <td>Flavanoids Mean</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Flavanoids', className, 'mean')).toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Flavanoids Median</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Flavanoids', className, 'median')).toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Flavanoids Mode</td>
                {classNames.map((className) => (
                  <td key={className}>
                    {Number(calculateStatistics(data, 'Flavanoids', className, 'mode')).toFixed(3)}
                  </td>
                ))}
              </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FlavanoidsTable;
