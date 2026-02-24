import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { QuoteForm } from '../components/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch for a free quote or to discuss your sandblasting and industrial painting needs
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Contact Our company Sand Blasting & Painting LLC today for professional mobile sandblasting services throughout the DMV area and beyond.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      8013 Quaking Aspen Rd<br />
                      Gainsville, VA 20155
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+15713318485" className="text-orange-600 hover:text-orange-700 font-semibold">
                      (571) 331-8485
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@ctnsandblasting.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                      info@ctnsandblasting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: By Appointment<br />
                      <span className="text-sm text-orange-600 font-semibold">Evening & Weekend Service Available</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong>Primary:</strong> DMV Region (DC, Maryland, Virginia)
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Extended:</strong> We travel across North America for larger industrial and commercial projects
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <QuoteForm
                title="Request a Free Quote"
                subtitle="Fill out the form below and we'll get back to you within 24 hours with a detailed estimate"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gray-50">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.123!2d-77.5876!3d38.7803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ2JzQ5LjEiTiA3N8KwMzUnMTUuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our company Sandblasting Location"
          ></iframe>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Call us now for immediate assistance or to schedule a site visit for your sandblasting project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15713318485"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-orange-600 text-white rounded hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (571) 331-8485
              </a>
              <a
                href="mailto:info@ctnsandblasting.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gray-700 text-white rounded hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
