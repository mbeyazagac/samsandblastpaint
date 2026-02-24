import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Droplets } from 'lucide-react';

export const SurfaceCleaning: React.FC = () => {
  return (
    <ServiceDetail
      icon={Droplets}
      title="Surface Cleaning & Rust Removal"
      subtitle="Professional cleaning and preparation for all surface types"
      heroImage="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC provides professional surface cleaning and rust removal services for residential, commercial, and industrial properties. Whether you need graffiti removal, contamination cleaning, concrete preparation, or complete rust removal from metal surfaces, we have the equipment and expertise to handle it. Our dustless blasting technology is particularly effective for delicate surfaces like brick and stone, removing unwanted coatings and contamination without causing damage. We create the proper surface profile for optimal coating adhesion, ensuring your recoating project starts with a properly prepared substrate."
      benefits={[
        'Complete rust and corrosion removal',
        'Graffiti removal without surface damage',
        'Concrete and masonry cleaning',
        'Creates proper surface profile',
        'Removes paint, coatings, and stains',
        'Environmentally friendly process',
        'Faster than chemical stripping',
        'Prepares surfaces for optimal coating adhesion',
      ]}
      process={[
        {
          title: 'Surface Evaluation',
          description: 'We assess the surface type, contamination level, and surrounding area to determine the best cleaning method and media for your specific situation.',
        },
        {
          title: 'Area Preparation',
          description: 'Adjacent areas and landscaping are protected. We establish proper containment and safety measures for the cleaning operation.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Using appropriate blasting media and techniques, we remove rust, graffiti, coatings, or contaminants while preserving the underlying surface.',
        },
        {
          title: 'Final Preparation',
          description: 'Surfaces are cleaned and inspected. We can apply rust inhibitors, sealers, or prepare for coating application as needed for your project.',
        },
      ]}
      applications={[
        'Graffiti removal from buildings and structures',
        'Concrete surface preparation and cleaning',
        'Brick and stone facade restoration',
        'Metal surface rust removal',
        'Paint stripping from various surfaces',
        'Contamination and residue cleanup',
        'Surface profiling for coating adhesion',
        'Stain removal from concrete and masonry',
        'Pool deck and patio cleaning',
        'Historic building restoration',
      ]}
      whyChoose={[
        'Gentle on delicate surfaces',
        'No harsh chemicals required',
        'Effective graffiti removal',
        'Complete rust elimination',
        'Environmentally responsible',
        'Proper surface preparation',
        'Experienced technicians',
        'Mobile service available',
      ]}
      relatedServices={[
        { title: 'Commercial Sandblasting', link: '/services/commercial' },
        { title: 'Automotive Sandblasting', link: '/services/automotive' },
        { title: 'Marine Sandblasting', link: '/services/marine' },
      ]}
    />
  );
};
