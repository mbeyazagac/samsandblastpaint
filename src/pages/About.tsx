import React from 'react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { Shield, Award, Clock, Users, CheckCircle, Phone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our company Sandblasting</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Three decades of excellence in mobile sandblasting and industrial painting across the DMV and beyond
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                30+ Years of Professional Sandblasting Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our company Sand Blasting & Painting LLC has been providing professional mobile sandblasting and industrial
                painting services for over 30 years. What started as a small operation has grown into one of the
                DMV region's most trusted names in surface preparation and coating application.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our commitment to quality, safety, and customer satisfaction has earned us long-term relationships
                with contractors, fleet owners, manufacturers, and property managers throughout the region. We've
                completed hundreds of projects ranging from single vehicle restorations to large-scale industrial
                facility maintenance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Today, we continue to invest in the latest dustless blasting technology, maintain our commitment to
                OSHA safety standards, and deliver the same personalized service that has been our hallmark for
                three decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Get a Free Quote
                </Button>
                <Button href="tel:+15713318485" variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Today
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial sandblasting equipment"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'OSHA-compliant operations, proper PPE, and comprehensive safety protocols on every job.',
              },
              {
                icon: Award,
                title: 'Quality Workmanship',
                description: 'Professional results using the best equipment, techniques, and industrial-grade materials.',
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'We show up on time, work efficiently, and complete projects as promised without shortcuts.',
              },
              {
                icon: Users,
                title: 'Customer Service',
                description: 'Clear communication, transparent pricing, and dedication to exceeding your expectations.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Journey" subtitle="Milestones in our 30+ year history" centered />
          <div className="space-y-8">
            {[
              {
                year: 'Early 1990s',
                title: 'Company Founded',
                description: 'Our company Sand Blasting & Painting LLC was established in the DMV area, focusing on quality sandblasting and industrial painting services for local contractors and businesses.',
              },
              {
                year: '2000s',
                title: 'Expansion & Growth',
                description: 'Expanded our service area and capabilities, building strong relationships with fleet owners, manufacturers, and industrial facilities. Invested in advanced mobile sandblasting equipment.',
              },
              {
                year: '2010s',
                title: 'Dustless Blasting Technology',
                description: 'Adopted state-of-the-art dustless blasting technology, improving efficiency, reducing environmental impact, and expanding our service capabilities for delicate surfaces.',
              },
              {
                year: 'Present Day',
                title: 'Industry Leaders',
                description: 'Serving the entire DMV region and traveling across North America for large projects. Trusted by hundreds of satisfied customers with a proven track record of excellence.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-orange-600 font-bold text-sm mb-2">{milestone.year}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Customers Choose Our company" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Over 30 years of hands-on experience',
              'Mobile service - we come to your location',
              'State-of-the-art dustless blasting equipment',
              'Industrial-grade compressors and equipment',
              'OSHA-compliant safety standards',
              'Fully insured and licensed',
              'Flexible scheduling including nights and weekends',
              'Complete service: blasting, priming, and painting',
              'Transparent, all-inclusive pricing',
              'Serving DMV and traveling nationwide',
              'Hundreds of satisfied customers',
              'Professional project management',
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Experience the quality and professionalism that has kept customers coming back for 30+ years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Request a Free Quote
            </Button>
            <Button to="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
