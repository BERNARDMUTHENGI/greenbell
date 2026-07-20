import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-greenbell-50 py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-center">About Greenbell</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Committed to excellence in shade solutions since 2022
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
              <div className="bg-greenbell-50 p-6 rounded-2xl">
                <h3 className="font-bold text-greenbell-800 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  "At Greenbell, our mission is to provide high-quality, customizable shade solutions 
                  that enhance outdoor experiences, ensuring comfort and style for every customer, every time."
                </p>
              </div>
              <div className="bg-greenbell-50 p-6 rounded-2xl">
                <h3 className="font-bold text-greenbell-800 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  "Our vision is to be the leading provider of innovative shade solutions in Kenya, 
                  transforming outdoor spaces into inviting retreats for individuals and businesses alike."
                </p>
              </div>
              <div className="bg-greenbell-50 p-6 rounded-2xl">
                <h3 className="font-bold text-greenbell-800 mb-2">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  {['Quality', 'Customer-Centricity', 'Innovation', 'Sustainability', 'Integrity'].map((value) => (
                    <span key={value} className="bg-greenbell-100 text-greenbell-700 px-3 py-1 rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-secondary mb-4">Our Team</h2>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of experienced professionals who prioritize quality and customer satisfaction. 
                We take pride in our ability to create bespoke products that reflect our clients' visions, whether 
                it's a vibrant branded gazebo for an event or a sturdy tarpaulin for a lorry. Every member of our 
                team is dedicated to delivering excellence in every project we undertake.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;