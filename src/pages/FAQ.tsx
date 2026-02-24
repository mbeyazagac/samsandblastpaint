import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '../components/Button';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'Do you come to my job site?',
          answer: 'Yes! We specialize in mobile sandblasting services. Our equipment comes directly to your location, whether it\'s a residential property, commercial facility, or industrial site anywhere in the DMV area. This saves you the hassle and expense of transporting heavy equipment or structures. For larger projects outside the DMV, we can travel across North America.',
        },
        {
          question: 'What areas do you serve?',
          answer: 'Our primary service area is the DMV region including Northern Virginia (Manassas, Fairfax, Loudoun, Arlington, Prince William County), Washington DC metro area, and Maryland (Montgomery County, Prince George\'s County, Baltimore area). For larger industrial and commercial projects, we travel nationwide across North America.',
        },
        {
          question: 'How quickly can you start my project?',
          answer: 'For local DMV projects, we can typically mobilize within 24-48 hours for urgent needs. Standard scheduling is usually within one week. We also offer flexible scheduling including nights and weekends to minimize disruption to your operations.',
        },
      ],
    },
    {
      category: 'Services & Capabilities',
      questions: [
        {
          question: 'What surfaces can you sandblast?',
          answer: 'We can sandblast virtually any surface including all types of metal (steel, aluminum, iron, stainless), concrete, brick, stone, wood, fiberglass, and more. Common projects include automotive frames, truck chassis, structural steel, tanks, marine vessels, building facades, and industrial equipment. We select appropriate media and techniques for each surface type.',
        },
        {
          question: 'How does dustless blasting work?',
          answer: 'Dustless blasting mixes water with abrasive media, which suppresses dust by up to 92% compared to traditional dry sandblasting. This water-based process is safer for operators, reduces environmental impact, prevents warping of thin metal, and is often faster and more effective at removing coatings and rust. It\'s particularly good for automotive work and delicate surfaces.',
        },
        {
          question: 'Can you also prime and paint after blasting?',
          answer: 'Absolutely! We offer complete surface preparation and coating services. After blasting, we can apply rust inhibitors, primers, industrial paints, or specialized coatings. This ensures proper adhesion and eliminates the need to coordinate multiple contractors. We use high-quality industrial coatings appropriate for your specific application.',
        },
        {
          question: 'What\'s the difference between sandblasting and dustless blasting?',
          answer: 'Traditional sandblasting uses compressed air and dry abrasive media, creating significant dust. Dustless blasting adds water to the process, suppressing up to 92% of dust. Dustless blasting is faster, uses less media, prevents heat buildup and warping, reduces cleanup, and is more environmentally friendly. It\'s our preferred method for most applications.',
        },
      ],
    },
    {
      category: 'Safety & Compliance',
      questions: [
        {
          question: 'Will sandblasting damage my equipment or surfaces?',
          answer: 'When performed by experienced professionals like Our company, sandblasting is safe and effective. We select the appropriate media type (glass bead, aluminum oxide, crushed glass, etc.), pressure, and technique for each specific surface and application. Our 30+ years of experience ensures your equipment and surfaces are properly prepared without damage.',
        },
        {
          question: 'Are you insured and certified?',
          answer: 'Yes, Our company Sand Blasting & Painting LLC is fully insured with comprehensive liability coverage and workers\' compensation insurance. We follow all OSHA safety standards and regulations. Our team uses professional-grade safety equipment including proper PPE, and we maintain all required permits and certifications for our work.',
        },
        {
          question: 'What safety measures do you take?',
          answer: 'Safety is our top priority. We follow OSHA standards, use proper containment and ventilation systems, ensure all operators wear appropriate PPE (respirators, protective suits, face shields), protect surrounding areas and equipment, conduct safety briefings before each job, and coordinate with facility safety teams on industrial projects.',
        },
      ],
    },
    {
      category: 'Pricing & Process',
      questions: [
        {
          question: 'How do you price a project?',
          answer: 'Pricing depends on several factors: surface area to be blasted, surface condition and coating type, accessibility and site conditions, media type required, whether painting/coating is needed, and project location. We provide free, detailed quotes after reviewing your project details, photos, and specifications. All quotes include materials and labor with no hidden fees.',
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We provide free, no-obligation quotes for all projects. Simply contact us with your project details, location, and photos if available. We can often provide preliminary estimates over the phone or email, and will schedule a site visit for larger or more complex projects to ensure accurate pricing.',
        },
        {
          question: 'What information do you need for a quote?',
          answer: 'To provide an accurate quote, we need: project location (city/state), type of service needed (automotive, industrial, commercial, etc.), surface area or dimensions, current surface condition (photos are very helpful), coating type being removed if known, whether primer/paint is needed, and any timeline or scheduling requirements.',
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project duration varies widely based on scope. A single vehicle chassis might take 1-2 days. A small commercial project could take 3-5 days. Large industrial projects might span several weeks. We provide detailed timelines with each quote and work efficiently to minimize disruption while maintaining quality standards.',
        },
      ],
    },
    {
      category: 'Specialized Services',
      questions: [
        {
          question: 'Can you remove graffiti?',
          answer: 'Yes! Dustless blasting is highly effective for graffiti removal from brick, concrete, stone, and metal surfaces. It removes spray paint without damaging the underlying surface and without harsh chemicals. We\'ve successfully removed graffiti from commercial buildings, bridges, signs, and public structures.',
        },
        {
          question: 'Do you work on marine vessels?',
          answer: 'Absolutely. We provide specialized marine sandblasting services including hull cleaning, bottom paint removal, deck preparation, and marine equipment blasting. We understand marine surfaces and use appropriate media to remove salt corrosion and fouling without damaging gelcoat or fiberglass. We can work at marinas and boatyards throughout the region.',
        },
        {
          question: 'Can you blast concrete or masonry?',
          answer: 'Yes, we frequently work on concrete and masonry surfaces. This includes parking garage floors and walls, building facades, sidewalks, bridge structures, and more. We adjust pressure and media to clean and prepare concrete without causing surface damage, and can create proper surface profile for coating adhesion.',
        },
        {
          question: 'How far will you travel for a project?',
          answer: 'We primarily serve the DMV area (DC, Maryland, Virginia) and can typically mobilize within 24-48 hours locally. For larger industrial or commercial projects with sufficient scope, we travel across North America. Contact us to discuss your project location and we\'ll provide a detailed mobilization quote as part of your project estimate.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to know about our sandblasting and industrial painting services
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-orange-600">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-md p-6 group hover:shadow-lg transition-shadow"
                    >
                      <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-start">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <ChevronRight className="w-5 h-5 text-orange-600 transform group-open:rotate-90 transition-transform flex-shrink-0 mt-1" />
                      </summary>
                      <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help! Contact us directly and we'll be happy to answer any questions about your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="tel:+15713318485" variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (571) 331-8485
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
