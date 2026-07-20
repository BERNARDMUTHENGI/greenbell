import React from 'react';

const Stats = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '4+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-12 bg-greenbell-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-sm text-greenbell-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;