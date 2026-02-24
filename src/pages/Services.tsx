import React from 'react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import {
  Wrench,
  Building2,
  Shield,
  Anchor,
  Droplets,
  Truck,
  CheckCircle,
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Automotive Sandblasting',
      description: 'Complete frame and chassis restoration for cars, trucks, and specialty vehicles. Our automotive sandblasting services strip away rust, old paint, and undercoating to reveal clean metal ready for primer and paint.',
      details: 'Perfect for classic car restoration, custom builds, and vehicle refurbishment. We handle everything from small automotive parts to complete frame-off restorations.',
      useCases: [
        'Classic car frame restoration',
        'Truck and SUV chassis cleaning',
        'Custom vehicle builds',
        'Automotive parts preparation',
        'Undercarriage rust removal',
        'Suspension component refinishing',
      ],
      link: '/services/automotive',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building2,
      title: 'Commercial Sandblasting',
      description: 'Professional surface preparation for commercial buildings, parking structures, warehouses, and retail facilities. Fast, efficient service with minimal disruption to your business operations.',
      details: 'We work with property managers, contractors, and business owners to maintain and restore commercial properties. Our mobile equipment allows us to work on-site without requiring facility downtime.',
      useCases: [
        'Building facade restoration',
        'Parking garage concrete cleaning',
        'Warehouse floor preparation',
        'Retail storefront refinishing',
        'Fire escape and stairwell cleaning',
        'Loading dock maintenance',
      ],
      link: '/services/commercial',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Industrial Sandblasting',
      description: 'Heavy-duty blasting for structural steel, tanks, piping, and industrial equipment. We remove heavy coatings, rust, and surface buildup, preparing your surfaces for long-lasting industrial coatings.',
      details: 'Specialized service for manufacturing facilities, refineries, power plants, and heavy industry. We handle large-scale projects requiring professional equipment and experienced operators.',
      useCases: [
        'Structural steel beam preparation',
        'Storage tank refurbishment',
        'Industrial piping systems',
        'Manufacturing equipment maintenance',
        'Conveyor systems cleaning',
        'Heavy machinery restoration',
      ],
      link: '/services/industrial',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Anchor,
      title: 'Marine Sandblasting',
      description: 'Hull cleaning, deck preparation, and marine equipment blasting. Complete salt and corrosion removal for boats, ships, and waterfront structures.',
      details: 'Marine environments create unique challenges with salt corrosion and specialized coatings. Our team understands marine surfaces and uses appropriate media to protect while cleaning effectively.',
      useCases: [
        'Boat hull preparation',
        'Ship deck restoration',
        'Marine equipment cleaning',
        'Dock and pier maintenance',
        'Yacht refinishing',
        'Waterfront structure restoration',
      ],
      link: '/services/marine',
      image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Droplets,
      title: 'Surface Cleaning & Rust Removal',
      description: 'Professional surface cleaning for concrete, brick, stone, and metal. Complete rust removal and surface profiling for optimal coating adhesion.',
      details: 'Whether you need graffiti removal, contamination cleaning, or surface preparation for recoating, we have the equipment and expertise to handle it. Our dustless blasting technology is particularly effective for delicate surfaces.',
      useCases: [
        'Graffiti removal from buildings',
        'Concrete surface preparation',
        'Brick and stone cleaning',
        'Rust removal from metal surfaces',
        'Paint stripping',
        'Contamination cleanup',
      ],
      link: '/services/surface-cleaning',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Truck,
      title: 'Truck Chassis Sandblasting & Painting',
      description: 'Specialized blasting and coating for dump trucks, trailers, and heavy equipment chassis. Complete rust removal, primer, and industrial paint application.',
      details: 'Fleet owners and trucking companies trust Our company for chassis restoration that extends vehicle life and maintains professional appearance. We handle everything from small utility trucks to large commercial vehicles.',
      useCases: [
        'Dump truck chassis restoration',
        'Trailer frame refinishing',
        'Box truck body preparation',
        'Heavy equipment undercarriage',
        'Fleet vehicle maintenance',
        'Commercial truck repainting',
      ],
      link: '/services/truck-chassis',
      image: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive sandblasting and industrial painting solutions for automotive, commercial, industrial, and marine applications
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{service.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.details}</p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Common Applications:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>

                  <Button to={service.link} variant="primary">
                    Learn More About {service.title}
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a free, detailed quote for your sandblasting or industrial painting project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Request a Quote
            </Button>
            <Button href="tel:+15713318485" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              Call (571) 331-8485
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
