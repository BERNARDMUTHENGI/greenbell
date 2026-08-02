import React from 'react';
import { companyInfo } from '../../data/content';

const MapSection = () => {
  return (
    <section className="bg-white">
      <div className="container-custom py-12">
        <div className="text-center mb-8">
          <span className="text-greenbell-600 font-semibold text-sm uppercase tracking-wider">Find Us</span>
          <h2 className="heading-primary mt-2">Visit Our Offices</h2>
          <p className="text-gray-600 mt-3">
            {companyInfo.address}
          </p>
        </div>
      </div>
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219672256785!3d-1.3028611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Greenbell Group Location"
        />
      </div>
    </section>
  );
};

export default MapSection;
