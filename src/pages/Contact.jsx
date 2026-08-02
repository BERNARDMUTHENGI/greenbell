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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with prefilled message
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shade4.jpg"
            alt="Contact Greenbell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container-custom relative z-10 py-24 text-center">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="heading-primary text-white mt-3">Contact Us</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
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
              <div className="bg-greenbell-50 p-6 rounded-2xl border border-greenbell-100">
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
                      <a href="tel:+254716807767" className="text-sm text-gray-600 hover:text-greenbell-600 transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-600 hover:text-greenbell-600 transition-colors">
                        {companyInfo.email}
                      </a>
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

              <div className="bg-greenbell-700 text-white p-6 rounded-2xl">
                <h3 className="font-semibold mb-3">Prefer to Talk?</h3>
                <p className="text-sm text-red-100 mb-4">
                  Call us directly and speak to our team about your project.
                </p>
                <a
                  href="tel:+254716807767"
                  className="inline-block bg-white text-greenbell-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-greenbell-50 transition-colors"
                >
                  Call {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-greenbell-50 p-8 md:p-10 rounded-2xl border border-greenbell-100">
                <h3 className="text-2xl font-bold text-greenbell-800 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Fill in the form below and your email client will open with your message ready to send.
                </p>

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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
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
                    className="w-full bg-greenbell-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-greenbell-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-0">
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219672256785!3d-1.3028611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greenbell Location"
          />
        </div>
        <div className="container-custom py-6 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">📍</span> {companyInfo.address}
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
