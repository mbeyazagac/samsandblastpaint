import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Shield } from 'lucide-react';

export const Industrial: React.FC = () => {
  return (
    <ServiceDetail
      icon={Shield}
      title="Industrial Sandblasting"
      subtitle="Heavy-duty surface preparation for manufacturing and industrial facilities"
      heroImage="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC provides professional industrial sandblasting services for manufacturing facilities, refineries, power plants, and heavy industry operations. We specialize in removing heavy coatings, rust, scale, and surface buildup from structural steel, storage tanks, piping systems, and industrial equipment. Our experienced team uses industrial-grade compressors and appropriate blasting media to prepare surfaces for long-lasting industrial coatings that withstand harsh operating environments. We understand the importance of minimizing downtime and can work around your production schedule, including nights and weekends."
      benefits={[
        'Heavy-duty industrial equipment',
        'Removes thick coatings and heavy rust',
        'Minimal facility downtime',
        'Flexible scheduling around operations',
        'OSHA-compliant safety procedures',
        'Proper surface profile for coating adhesion',
        'Experienced with industrial environments',
        'Complete coating application services',
      ]}
      process={[
        {
          title: 'Facility Assessment & Planning',
          description: 'We conduct a site visit to assess your facility, equipment, and surfaces. We develop a detailed plan that minimizes disruption to your operations and ensures safety compliance.',
        },
        {
          title: 'Safety Preparation & Containment',
          description: 'All necessary safety measures are implemented including containment systems, ventilation, and proper PPE. We coordinate with your safety team to ensure full compliance.',
        },
        {
          title: 'Industrial Blasting Operations',
          description: 'Using industrial-grade equipment and appropriate media, we remove coatings, rust, and contaminants to achieve the specified surface profile for your coating system.',
        },
        {
          title: 'Surface Verification & Coating',
          description: 'Surface cleanliness and profile are verified to meet coating specifications. We can apply primers and industrial coatings as needed for complete project delivery.',
        },
      ]}
      applications={[
        'Structural steel beams and frameworks',
        'Storage tanks and pressure vessels',
        'Industrial piping and valve systems',
        'Manufacturing equipment maintenance',
        'Conveyor systems and material handling',
        'Heavy machinery restoration',
        'Plant infrastructure maintenance',
        'Bridge and overpass structures',
        'Refinery and chemical plant equipment',
        'Power generation facilities',
      ]}
      whyChoose={[
        'Industrial-grade equipment',
        '30+ years industrial experience',
        'Safety-focused operations',
        'Licensed and insured',
        'Flexible scheduling options',
        'Minimal production disruption',
        'Complete project management',
        'Qualified industrial coating application',
      ]}
      relatedServices={[
        { title: 'Commercial Sandblasting', link: '/services/commercial' },
        { title: 'Truck Chassis Services', link: '/services/truck-chassis' },
        { title: 'Surface Cleaning', link: '/services/surface-cleaning' },
      ]}
    />
  );
};
