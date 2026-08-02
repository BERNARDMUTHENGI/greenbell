import React from 'react';
import { Link } from 'react-router-dom';
import { cantileverPrices, curvedPrices } from '../../data/content';

const PriceTable = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-greenbell-700 text-white px-6 py-4">
        <h3 className="font-bold text-lg">{data.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-greenbell-800">
              {data.columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, idx) => (
              <tr key={idx} className={`border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                {row.map((cell, cidx) => (
                  <td key={cidx} className={`px-4 py-3 whitespace-nowrap ${cidx === 0 ? 'font-semibold text-greenbell-800' : 'text-gray-600'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PriceSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-4">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="heading-primary mt-2 text-2xl md:text-3xl text-blue-900">Car Shades Prices in Nairobi, Kenya</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            The cost of installing car parking shades in Nairobi depends on the number of cars, design type,
            and materials used. Standard cantilever car shades start from around KSh 92,400 for one car,
            while waterproof options range from KSh 102,025 and above. Larger installations for multiple cars
            can go up to KSh 400,000+.
          </p>
        </div>

        <div className="space-y-10 mt-10">
          <PriceTable data={cantileverPrices} />
          <PriceTable data={curvedPrices} />
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Curved (premium) designs cost slightly more due to design and structural requirements.
          </p>
          <Link to="/car-shade-prices" className="btn-primary">
            View Full Car Shade Price Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
