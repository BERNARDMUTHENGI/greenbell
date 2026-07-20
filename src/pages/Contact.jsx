import React, { useState } from 'react';
import { companyInfo } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 5 seconds (optional)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative bg-greenbell-50 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/shade4.jpg" 
            alt="Contact Greenbell" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="heading-primary text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or quotes
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-greenbell-50 p-6 rounded-2xl">
                <h3 className="font-semibold text-greenbell-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-sm text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-sm text-gray-600">{companyInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">{companyInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="font-medium text-gray-800">Working Hours</p>
                      <p className="text-sm text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-greenbell-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219672256785!3d-1.3028611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Greenbell Location"
                  className="w-full"
                />
                <div className="p-3 bg-greenbell-50 text-center">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">📍</span> {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-greenbell-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-greenbell-800 mb-6">Send Us a Message</h3>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold">Thank you for your message!</p>
                        <p className="text-sm">We have received your request and will get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                        placeholder="Inquiry about..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenbell-500 focus:border-greenbell-500 outline-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      isSubmitted 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-greenbell-600 text-white hover:bg-greenbell-700'
                    }`}
                  >
                    {isSubmitted ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;