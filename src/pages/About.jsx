import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shade6.jpg"
            alt="Greenbell team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24 text-center">
          <span className="text-greenbell-400 font-semibold text-sm uppercase tracking-wider">
            About Greenbell
          </span>
          <h1 className="heading-primary text-white mt-3">Committed to Excellence in Shade Solutions</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            Building premium shade solutions across Kenya since 2022
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Greenbell, we believe that everyone deserves a comfortable space to enjoy the outdoors.
                Founded in 2022, our mission is to provide high-quality, customizable shade solutions that
                enhance any environment, from bustling restaurants to serene backyards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a passion for innovation and a commitment to craftsmanship, we specialize in manufacturing
                a wide range of products, including restaurant canopies, car shades, tents, marquees, swimming
                pool shades, and much more. Each item is designed with both functionality and aesthetics in mind,
                ensuring that our customers receive durable and stylish solutions tailored to their unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-greenbell-800 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  "At Greenbell, our mission is to provide high-quality, customizable shade solutions
                  that enhance outdoor experiences, ensuring comfort and style for every customer, every time."
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-greenbell-800 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  "Our vision is to be the leading provider of innovative shade solutions in Kenya,
                  transforming outdoor spaces into inviting retreats for individuals and businesses alike."
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-greenbell-800 mb-2">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  {['Quality', 'Customer-Centricity', 'Innovation', 'Sustainability', 'Integrity'].map((value) => (
                    <span key={value} className="bg-gray-100 text-greenbell-700 px-3 py-1 rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Company Ethos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our ethos is grounded in a commitment to quality, innovation, and customer satisfaction.
                We believe that every outdoor space deserves to be transformed into a comfortable and
                inviting environment. This drives us to create high-quality, customizable shade solutions
                that cater to the diverse needs of our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additionally, we value sustainability and integrity in all our operations. We strive to minimize
                our environmental impact through responsible manufacturing practices and the use of eco-friendly
                materials. By fostering a culture of transparency and honesty, we aim to build lasting
                relationships with our customers and partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/images/shade10.jpg"
                  alt="Greenbell pergola installation"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/images/shade4.jpg"
                  alt="Greenbell pool shade"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="heading-secondary mb-4">Why Clients Trust Greenbell</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team consists of experienced professionals who prioritize quality and customer satisfaction.
                We take pride in our ability to create bespoke products that reflect our clients' visions, whether
                it's a vibrant branded gazebo for an event or a sturdy tarpaulin for a lorry. Every member of our
                team is dedicated to delivering excellence in every project we undertake.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
