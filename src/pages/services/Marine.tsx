import React from 'react';
import { ServiceDetail } from '../ServiceDetail';
import { Anchor } from 'lucide-react';

export const Marine: React.FC = () => {
  return (
    <ServiceDetail
      icon={Anchor}
      title="Marine Sandblasting"
      subtitle="Specialized blasting services for boats, ships, and waterfront structures"
      heroImage="https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=1920"
      description="Our company Sand Blasting & Painting LLC offers professional marine sandblasting services for boat owners, marinas, and commercial maritime operations. Marine environments create unique challenges with salt corrosion, specialized coatings, and the need to protect sensitive equipment. Our team understands marine surfaces and uses appropriate dustless blasting techniques and media to effectively clean and prepare hulls, decks, and marine equipment without causing damage. Whether you have a small pleasure craft or a commercial vessel, we provide the expertise needed to properly prepare marine surfaces for protective coatings that withstand harsh saltwater environments."
      benefits={[
        'Effective salt and corrosion removal',
        'Gentle on gelcoat and marine surfaces',
        'Dustless blasting minimizes cleanup',
        'Preserves hull integrity',
        'Removes marine growth and fouling',
        'Prepares for anti-fouling coatings',
        'Mobile service to marinas and boatyards',
        'Experienced with marine materials',
      ]}
      process={[
        {
          title: 'Marine Surface Assessment',
          description: 'We evaluate your vessel or marine structure to understand the coating system, corrosion level, and surface type. We select appropriate media and techniques for marine applications.',
        },
        {
          title: 'Vessel Preparation',
          description: 'Sensitive equipment, through-hulls, and areas not being blasted are properly protected. We ensure proper setup for marina or boatyard work.',
        },
        {
          title: 'Marine Blasting',
          description: 'Using dustless blasting with marine-appropriate media, we remove salt, corrosion, old bottom paint, and coatings while preserving the integrity of the hull or structure.',
        },
        {
          title: 'Coating Application',
          description: 'Surfaces are inspected and prepared for marine coatings. We can apply barrier coats, primers, anti-fouling bottom paint, or topside finishes as needed.',
        },
      ]}
      applications={[
        'Boat hull preparation and cleaning',
        'Bottom paint and anti-fouling removal',
        'Yacht restoration and refinishing',
        'Commercial vessel maintenance',
        'Ship deck and superstructure',
        'Marine equipment and machinery',
        'Dock and pier structure maintenance',
        'Waterfront facility restoration',
        'Sea wall and bulkhead cleaning',
        'Marina infrastructure maintenance',
      ]}
      whyChoose={[
        'Marine surface expertise',
        'Appropriate media selection',
        'Gentle dustless blasting',
        'Protects gelcoat and fiberglass',
        'Saltwater corrosion removal',
        'Marine coating knowledge',
        'Mobile marina service',
        'Competitive marine pricing',
      ]}
      relatedServices={[
        { title: 'Surface Cleaning', link: '/services/surface-cleaning' },
        { title: 'Industrial Sandblasting', link: '/services/industrial' },
        { title: 'Commercial Sandblasting', link: '/services/commercial' },
      ]}
    />
  );
};
