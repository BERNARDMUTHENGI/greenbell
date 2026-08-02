import React, { useState } from 'react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your quote request! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-greenbell-600 py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-lg md:text-xl text-greenbell-100 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a customized solution and quote
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-greenbell-800 mb-2">Project Details</h2>
            <p className="text-gray-600 mb-6">Fill in the form below and we'll get back to you with a detailed quote.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                    placeholder="Bernard Muthengi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                    placeholder="bernarmuthengi9@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="canopy">Restaurant Canopy</option>
                    <option value="car-shade">Car Shade</option>
                    <option value="tent">Event Tent / Marquee</option>
                    <option value="pool-shade">Swimming Pool Shade</option>
                    <option value="gazebo">Branded Gazebo</option>
                    <option value="tarpaulin">Custom Tarpaulin</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under KES 50,000</option>
                    <option value="50k-100k">KES 50,000 - 100,000</option>
                    <option value="100k-200k">KES 100,000 - 200,000</option>
                    <option value="200k-500k">KES 200,000 - 500,000</option>
                    <option value="above-500k">Above KES 500,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                    <option value="soon">Soon (Within 2-4 weeks)</option>
                    <option value="planned">Planned (1-3 months)</option>
                    <option value="future">Future (3+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                  placeholder="Describe your project requirements, dimensions, preferences, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-greenbell-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-greenbell-700 transition-colors"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuote;