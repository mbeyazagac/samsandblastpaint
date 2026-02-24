import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Wrench, Building2, Shield, Anchor, Truck, Droplets } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fleet of Dump Trucks - Complete Restoration',
      category: 'Truck Chassis',
      icon: Truck,
      description: 'Complete sandblasting and industrial coating for a fleet of 12 dump trucks. Removed heavy rust and old coating, applied industrial primer and durable topcoat.',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Commercial Trucking Company | Duration: 3 weeks | Location: Fairfax, VA',
    },
    {
      title: 'Warehouse Structural Steel Maintenance',
      category: 'Industrial',
      icon: Shield,
      description: 'Industrial facility steel beam and racking system blasting and recoating. Worked night shifts to avoid production disruption.',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Manufacturing Facility | Duration: 2 weeks | Location: Prince William County, VA',
    },
    {
      title: 'Parking Garage Restoration',
      category: 'Commercial',
      icon: Building2,
      description: 'Complete concrete surface preparation and coating for a 4-level commercial parking structure. Removed old coatings and applied protective sealers.',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Property Management Company | Duration: 4 weeks | Location: Arlington, VA',
    },
    {
      title: 'Classic Car Frame Restoration',
      category: 'Automotive',
      icon: Wrench,
      description: 'Complete frame-off restoration for a 1969 Mustang. Dustless blasting removed all rust and old paint, preparing for show-quality finish.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Classic Car Enthusiast | Duration: 1 week | Location: Manassas, VA',
    },
    {
      title: 'Marine Vessel Hull Preparation',
      category: 'Marine',
      icon: Anchor,
      description: 'Commercial fishing vessel hull blasting and anti-fouling coating application. Removed salt corrosion and old bottom paint.',
      image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Commercial Fishing Operation | Duration: 10 days | Location: Maryland',
    },
    {
      title: 'Building Facade Graffiti Removal',
      category: 'Surface Cleaning',
      icon: Droplets,
      description: 'Removed extensive graffiti from historic brick building facade without damaging the original masonry. Restored building to original appearance.',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Municipal Building Authority | Duration: 3 days | Location: Washington DC',
    },
    {
      title: 'Industrial Tank Refurbishment',
      category: 'Industrial',
      icon: Shield,
      description: 'Complete blasting and coating of multiple large storage tanks. Removed old industrial coatings and applied new protective system.',
      image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Chemical Processing Facility | Duration: 6 weeks | Location: Maryland',
    },
    {
      title: 'Trailer Fleet Maintenance Program',
      category: 'Truck Chassis',
      icon: Truck,
      description: 'Ongoing maintenance program for trucking company. Rotating schedule to blast and repaint trailers as needed.',
      image: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: National Trucking Company | Duration: Ongoing | Location: Northern Virginia',
    },
    {
      title: 'Commercial Building Fire Escape Restoration',
      category: 'Commercial',
      icon: Building2,
      description: 'Restored fire escapes and metal stairways for multiple commercial buildings. Removed rust and applied protective coatings.',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Client: Real Estate Investment Firm | Duration: 2 weeks | Location: Alexandria, VA',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Showcasing our expertise across automotive, commercial, industrial, and marine sandblasting projects
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of recent projects demonstrating our capabilities and quality"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <project.icon className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{project.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have trusted Our company Sand Blasting & Painting LLC for their surface preparation and coating needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-orange-600 text-white rounded hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request a Free Quote
              </a>
              <a
                href="tel:+15713318485"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gray-700 text-white rounded hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
              >
                Call (571) 331-8485
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
