import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Wrench } from 'lucide-react';

export const Automotive: React.FC = () => {
  return (
    <ServiceDetail
      icon={Wrench}
      title="Automotive Sandblasting"
      subtitle="Professional frame and chassis restoration for vehicles of all types"
      heroImage="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC specializes in automotive sandblasting services for classic car restoration, custom builds, and vehicle refurbishment. Our mobile dustless blasting equipment comes to your location, stripping away rust, old paint, undercoating, and surface contaminants to reveal clean metal ready for primer and paint. Whether you're restoring a classic muscle car, building a custom hot rod, or refurbishing a work truck, we have the expertise and equipment to prepare your vehicle's frame and components for a professional finish."
      benefits={[
        'Complete rust and corrosion removal',
        'Strips old paint and undercoating efficiently',
        'Mobile service - we come to you',
        'Dustless blasting reduces cleanup',
        'Preserves metal integrity',
        'Prepares surface for optimal paint adhesion',
        'Works on frames, chassis, and components',
        'Fast turnaround times',
      ]}
      process={[
        {
          title: 'Vehicle Assessment',
          description: 'We inspect your vehicle or components to assess surface condition, coating type, and determine the best blasting media and approach for your specific needs.',
        },
        {
          title: 'Surface Preparation',
          description: 'Areas not being blasted are masked and protected. We ensure proper setup for efficient blasting and minimal overspray.',
        },
        {
          title: 'Dustless Blasting',
          description: 'Using our mobile dustless blasting equipment, we remove rust, paint, and coatings down to bare metal. The water-based process suppresses dust and is faster than traditional methods.',
        },
        {
          title: 'Quality Check & Coating',
          description: 'We inspect the blasted surface for complete coverage and proper profile. If requested, we apply rust inhibitor, primer, or complete paint system.',
        },
      ]}
      applications={[
        'Classic car frame restoration',
        'Truck and SUV chassis cleaning',
        'Custom vehicle builds and fabrication',
        'Automotive suspension components',
        'Engine compartment preparation',
        'Undercarriage rust removal',
        'Wheel and rim refinishing',
        'Body panels and sheet metal',
        'Motorcycle frames and parts',
        'Vintage and antique vehicles',
      ]}
      whyChoose={[
        '30+ years automotive experience',
        'Mobile service - no need to transport',
        'Dustless blasting technology',
        'Gentle on thin sheet metal',
        'Complete primer and paint services',
        'Classic car restoration expertise',
        'Flexible scheduling',
        'Competitive pricing',
      ]}
      relatedServices={[
        { title: 'Industrial Sandblasting', link: '/services/industrial' },
        { title: 'Truck Chassis Services', link: '/services/truck-chassis' },
        { title: 'Surface Cleaning', link: '/services/surface-cleaning' },
      ]}
    />
  );
};
