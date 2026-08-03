import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cantileverPrices, curvedPrices, companyInfo } from '../data/content';

const PriceTable = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
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

const CarShadePrices = () => {
  const [comment, setComment] = useState({ name: '', email: '', website: '', message: '' });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setCommentSubmitted(true);
    setComment({ name: '', email: '', website: '', message: '' });
    setTimeout(() => setCommentSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shade1.jpg"
            alt="Car shades in Nairobi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24 text-center">
          <span className="text-greenbell-400 font-semibold text-sm uppercase tracking-wider">
            Car Shades Cost
          </span>
          <h1 className="heading-primary text-white mt-3">Car Shade Prices in Nairobi Kenya (2026 Guide)</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            A complete guide to car parking shade prices, designs, and installation costs in Kenya.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-gray-600 leading-relaxed mb-6">
            Car parking shades have become an essential addition for many homes and commercial properties across
            Kenya. With the increasing number of vehicles on Kenyan roads, property owners are investing in durable
            and modern shade solutions to protect their cars from harsh sunlight, rain, dust, and UV damage.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you own a residential home, apartment complex, office building, school, or commercial parking
            area, installing a quality car shade helps protect your vehicles while also improving the appearance
            and value of your property.
          </p>
          <p className="text-gray-600 leading-relaxed mb-12">
            At Greenbell Group, we specialize in the design and installation of modern car parking shades across
            Nairobi, Kiambu, Machakos, and other parts of Kenya. In this guide, we break down the latest car shade
            prices in Kenya, the different designs available, and the factors that affect installation costs.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img
              src="/images/shade9.jpg"
              alt="Car parking shade structure"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* What Are Car Parking Shades */}
          <h2 className="heading-secondary mb-4">What Are Car Parking Shades?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Car parking shades are specially designed outdoor structures used to protect vehicles from direct
            sunlight, rain, bird droppings, and other environmental elements. They are commonly installed in:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              'Residential homes',
              'Apartment buildings',
              'Office parking areas',
              'Shopping centres',
              'Schools and institutions',
              'Commercial parking yards',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-greenbell-600 mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-12">
            Modern car shades are designed using strong steel structures combined with durable shade net or
            waterproof materials to provide long-term protection and a clean modern look.
          </p>

          {/* Types */}
          <h2 className="heading-secondary mb-4">Types of Car Parking Shades in Kenya</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            There are different types of car shade designs available in Kenya depending on your needs, budget,
            and preferred appearance.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-greenbell-800 mb-3">1. Cantilever Car Shades</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cantilever car shades are among the most popular options in Nairobi and across Kenya. They feature
              a modern design with support posts positioned strategically to maximize parking space.
            </p>
            <p className="font-semibold text-greenbell-800 mb-3">Benefits of Cantilever Car Shades</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {['Modern appearance', 'Efficient use of parking space', 'Strong and durable', 'Ideal for homes and commercial properties'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-greenbell-600 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-xl font-bold text-greenbell-800 mb-3">2. Curved Car Shades</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Curved car shades offer a premium and elegant look compared to standard flat designs. These shades
              are commonly used in high-end residential homes, office buildings, and commercial properties.
            </p>
            <p className="font-semibold text-greenbell-800 mb-3">Benefits of Curved Car Shades</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {['Stylish modern appearance', 'Improved water drainage', 'Premium finish', 'Excellent durability'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-greenbell-600 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price tables */}
          <h2 className="heading-secondary mb-4">Cantilever Car Shades Prices in Kenya (Standard Design)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The cost of cantilever car shades depends on the number of cars, size of the structure, materials
            used, and whether you choose 90% shade net or 100% waterproof materials.
          </p>
          <PriceTable data={cantileverPrices} />

          <h2 className="heading-secondary mb-4">Curved Car Shades Prices in Kenya (Premium Design)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Curved shades are considered premium structures and generally cost slightly more due to their design
            complexity and finishing.
          </p>
          <PriceTable data={curvedPrices} />

          {/* 90% vs 100% */}
          <h2 className="heading-secondary mb-4">What Is the Difference Between 90% and 100% Waterproof Materials?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            One of the most common questions clients ask is the difference between 90% shade net materials and
            fully waterproof materials.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-6">
            <h3 className="text-lg font-bold text-greenbell-800 mb-3">90% Non-Waterproof Shade Nets</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              These materials provide excellent UV protection while allowing airflow and partial water penetration.
            </p>
            <p className="font-semibold text-greenbell-800 mb-2">Advantages</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-4">
              {['Better ventilation', 'Cooler parking area', 'More affordable', 'Modern appearance'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-greenbell-600 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-semibold text-greenbell-800 mb-2">These are ideal for:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>Residential homes</li>
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>Open parking areas</li>
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>Areas with less concern about rainwater</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-bold text-greenbell-800 mb-3">100% Waterproof Materials</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Waterproof car shades completely block rain and provide maximum protection for vehicles.
            </p>
            <p className="font-semibold text-greenbell-800 mb-2">Advantages</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-4">
              {['Full rain protection', 'Premium finish', 'Better for commercial properties', 'Reduced water penetration'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-greenbell-600 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-semibold text-greenbell-800 mb-2">These are ideal for:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>Commercial parking areas</li>
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>High-end residential properties</li>
              <li className="flex items-start gap-2"><span className="text-greenbell-600 mt-1">▸</span>Offices and apartment buildings</li>
            </ul>
          </div>

          {/* Factors */}
          <h2 className="heading-secondary mb-4">Factors That Affect Car Shade Prices in Kenya</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Several factors determine the final cost of installing a car shade in Kenya.
          </p>
          <div className="space-y-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-greenbell-800 mb-1">1. Size of the Structure</h3>
              <p className="text-sm text-gray-600">
                Larger parking areas require more steel, fabric, and labour, increasing the overall cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-greenbell-800 mb-1">2. Material Type</h3>
              <p className="text-sm text-gray-600">
                100% waterproof materials cost more than standard 90% shade nets due to their enhanced protection and durability.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-greenbell-800 mb-1">3. Design Type</h3>
              <p className="text-sm text-gray-600">
                Curved and custom-designed shades are generally more expensive than standard cantilever structures.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-greenbell-800 mb-1">4. Steel Quality</h3>
              <p className="text-sm text-gray-600">
                Heavy-duty steel structures with anti-rust coatings and premium finishing typically cost more but last longer.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-greenbell-800 mb-1">5. Installation Location</h3>
              <p className="text-sm text-gray-600">
                Projects outside Nairobi may attract additional transport and labour costs depending on the location.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <h2 className="heading-secondary mb-4">Benefits of Installing Car Parking Shades</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Installing a quality car shade offers many long-term benefits.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-greenbell-800 mb-3">Vehicle Protection</h3>
              <p className="text-sm text-gray-600 mb-3">Car shades help protect vehicles from:</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['UV rays', 'Rain', 'Dust', 'Bird droppings', 'Excessive heat'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-greenbell-600 mt-1">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-greenbell-800 mb-2">Improved Property Appearance</h3>
                <p className="text-sm text-gray-600">
                  Modern car shades enhance the visual appeal of homes and commercial properties.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-greenbell-800 mb-2">Increased Property Value</h3>
                <p className="text-sm text-gray-600">
                  Well-designed outdoor structures can improve the value and attractiveness of a property.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-greenbell-800 mb-2">Better Comfort</h3>
                <p className="text-sm text-gray-600">
                  Vehicles parked under shades remain cooler compared to direct sun exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Residential and Commercial */}
          <h2 className="heading-secondary mb-4">Residential and Commercial Car Shades</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Greenbell Group, we install car parking shades for both residential and commercial clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-greenbell-800 mb-3">Residential Projects</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['Homes', 'Villas', 'Apartment parking'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-greenbell-600 mt-1">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-greenbell-800 mb-3">Commercial Projects</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['Office buildings', 'Schools', 'Churches', 'Shopping centres', 'Hotels'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-greenbell-600 mt-1">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to choose */}
          <h2 className="heading-secondary mb-4">How to Choose the Right Car Shade Company in Kenya</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When selecting a car shade installer, consider:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              'Experience and reputation',
              'Quality of materials used',
              'Previous projects',
              'Pricing transparency',
              'Professional installation',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-greenbell-600 mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-12">
            A reliable company should provide clear quotations, durable materials, and quality workmanship.
          </p>

          {/* CTA */}
          <div className="bg-greenbell-700 rounded-3xl p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Your Custom Quote Today</h3>
            <p className="text-greenbell-100 mb-6 max-w-xl mx-auto">
              Contact Greenbell Group for a free site visit and accurate quotation for your car shade project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-quote" className="bg-white text-greenbell-700 px-8 py-3 rounded-full font-semibold border border-greenbell-700 hover:bg-gray-50 transition-colors">
                Request a Quote
              </Link>
              <a href="tel:+254716807767" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-greenbell-700 transition-colors">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Comment section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-greenbell-800 mb-2">Leave a Comment</h3>
            <p className="text-sm text-gray-500 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>

            {commentSubmitted && (
              <div className="mb-6 p-4 bg-greenbell-600 text-white rounded-lg animate-fade-in">
                <p className="font-semibold">Thank you for your comment!</p>
                <p className="text-sm">Your comment has been received and will appear after review.</p>
              </div>
            )}

            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <textarea
                name="message"
                value={comment.message}
                onChange={handleCommentChange}
                required
                rows="5"
                placeholder="Type here.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={comment.name}
                    onChange={handleCommentChange}
                    required
                    placeholder="Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={comment.email}
                    onChange={handleCommentChange}
                    required
                    placeholder="Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={comment.website}
                    onChange={handleCommentChange}
                    placeholder="Website"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              <button
                type="submit"
                className="bg-greenbell-600 text-white px-8 py-3 rounded-full font-medium hover:bg-greenbell-700 transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarShadePrices;
