import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Building2 } from 'lucide-react';

export const Commercial: React.FC = () => {
  return (
    <ServiceDetail
      icon={Building2}
      title="Commercial Sandblasting"
      subtitle="Professional surface preparation for commercial properties and facilities"
      heroImage="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC provides comprehensive commercial sandblasting services for property managers, contractors, and business owners throughout the DMV area. We specialize in building facade restoration, parking structure maintenance, warehouse preparation, and commercial property refinishing. Our mobile equipment allows us to work efficiently on-site with minimal disruption to your business operations. Whether you need to restore a building exterior, clean a parking garage, or prepare surfaces for recoating, we deliver professional results that enhance property value and extend surface life."
      benefits={[
        'Minimal disruption to business operations',
        'Mobile service - no facility downtime',
        'Improves property appearance and value',
        'Extends surface life and reduces maintenance',
        'Flexible scheduling including off-hours',
        'Professional project management',
        'All necessary insurance and permits',
        'Complete restoration or maintenance services',
      ]}
      process={[
        {
          title: 'Property Evaluation',
          description: 'We assess your property and surfaces to understand the scope of work, access requirements, and develop a plan that minimizes business disruption.',
        },
        {
          title: 'Scheduling & Site Preparation',
          description: 'We coordinate timing to minimize impact on your operations and tenants. All necessary containment, protection, and safety measures are established.',
        },
        {
          title: 'Professional Blasting',
          description: 'Our team uses appropriate blasting methods and media for your specific surfaces - from delicate facades to heavy concrete structures.',
        },
        {
          title: 'Coating & Finishing',
          description: 'Surfaces are inspected and prepared for coating. We can apply sealers, primers, or complete paint systems as specified for your project.',
        },
      ]}
      applications={[
        'Building facade restoration and cleaning',
        'Parking garage concrete preparation',
        'Warehouse floor and wall maintenance',
        'Retail storefront refinishing',
        'Office building exterior maintenance',
        'Fire escapes and stairwell restoration',
        'Loading dock area maintenance',
        'Commercial railing and metal work',
        'Shopping center maintenance',
        'Multi-unit residential properties',
      ]}
      whyChoose={[
        'Experienced with commercial properties',
        'Minimal business disruption',
        'Proper insurance and bonding',
        'Professional project management',
        'Flexible scheduling options',
        'Complete documentation',
        'Quality workmanship guarantee',
        'Competitive commercial pricing',
      ]}
      relatedServices={[
        { title: 'Industrial Sandblasting', link: '/services/industrial' },
        { title: 'Surface Cleaning', link: '/services/surface-cleaning' },
        { title: 'Marine Sandblasting', link: '/services/marine' },
      ]}
    />
  );
};
