import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Truck } from 'lucide-react';

export const TruckChassis: React.FC = () => {
  return (
    <ServiceDetail
      icon={Truck}
      title="Truck Chassis Sandblasting & Painting"
      subtitle="Complete restoration and coating services for commercial vehicles"
      heroImage="https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC specializes in truck chassis sandblasting and industrial painting for fleet owners, trucking companies, and commercial vehicle operators. We provide complete chassis restoration that extends vehicle life, maintains professional appearance, and protects your investment from rust and corrosion. Our mobile service comes to your facility, allowing us to work on your vehicles without expensive transport costs or extended downtime. We handle everything from small utility trucks to large commercial vehicles, including dump trucks, trailers, box trucks, and heavy equipment. Our process includes complete rust removal, proper primer application, and durable industrial paint that withstands daily commercial use."
      benefits={[
        'Extends vehicle life and protects investment',
        'Mobile service reduces vehicle downtime',
        'Complete rust removal and prevention',
        'Industrial-grade coatings withstand abuse',
        'Maintains professional fleet appearance',
        'Flexible scheduling around operations',
        'All-in-one blasting and painting service',
        'Competitive fleet pricing available',
      ]}
      process={[
        {
          title: 'Vehicle Inspection',
          description: 'We assess your truck or equipment to evaluate rust damage, existing coating condition, and determine the scope of work needed for proper restoration.',
        },
        {
          title: 'Chassis Preparation',
          description: 'Mechanical components, hydraulics, and areas not being coated are protected. The chassis is prepared for efficient blasting operations.',
        },
        {
          title: 'Blasting & Rust Removal',
          description: 'Complete sandblasting removes rust, old paint, and scale from the chassis frame, body mounts, and undercarriage to reveal clean metal.',
        },
        {
          title: 'Primer & Paint Application',
          description: 'Industrial primer is applied for corrosion protection, followed by durable topcoat in your specified color. Multiple coat systems ensure long-lasting protection.',
        },
      ]}
      applications={[
        'Dump truck chassis restoration and painting',
        'Trailer frame refinishing and coating',
        'Box truck body preparation and painting',
        'Heavy equipment chassis maintenance',
        'Fleet vehicle restoration programs',
        'Utility truck chassis refurbishment',
        'Commercial truck repainting',
        'Equipment resale preparation',
        'Tow truck and recovery vehicle restoration',
        'Municipal vehicle maintenance',
      ]}
      whyChoose={[
        'Fleet restoration expertise',
        'Mobile service to your facility',
        'Minimal vehicle downtime',
        'Industrial paint systems',
        'Rust prevention focus',
        'Professional fleet appearance',
        'Volume fleet pricing',
        'Complete project management',
      ]}
      relatedServices={[
        { title: 'Industrial Sandblasting', link: '/services/industrial' },
        { title: 'Automotive Sandblasting', link: '/services/automotive' },
        { title: 'Surface Cleaning', link: '/services/surface-cleaning' },
      ]}
    />
  );
};
