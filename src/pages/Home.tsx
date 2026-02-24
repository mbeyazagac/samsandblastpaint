import React from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { SectionTitle } from '../components/SectionTitle';
import { QuoteForm } from '../components/QuoteForm';
import {
  Shield,
  Truck,
  Building2,
  Anchor,
  Droplets,
  Wrench,
  CheckCircle,
  Award,
  Clock,
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Hero.jpeg)',
            opacity: 0.4,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mobile Sandblasting & Industrial Painting<br />Across the DMV & Beyond
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            With 30+ years of experience, Sand Blasting & Painting LLC delivers on-site dustless blasting,
            surface prep, and professional coatings for automotive, commercial, industrial, and marine projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button to="/contact" variant="primary" size="lg">
              Request a Free Quote
            </Button>
            <Button href="tel:+15713318485" variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base">Mobile Dustless Blasting</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base">OSHA-Compliant Safety Standards</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm md:text-base">Serving DMV & North America</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">30+</h3>
              <p className="text-gray-300 text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">500+</h3>
              <p className="text-gray-300 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">100%</h3>
              <p className="text-gray-300 text-sm">Fully Insured & Certified</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Truck className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Mobile</h3>
              <p className="text-gray-300 text-sm">We Come to You</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Professional Mobile Sandblasting & Surface Preparation"
            subtitle="Our company provides affordable, mobile sandblasting services for the DMV area and travels across North America for larger industrial and commercial jobs."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you need automotive frame restoration, truck chassis blasting, heavy equipment refinishing,
                or industrial facility surface prep, Our company Sand Blasting & Painting LLC has the expertise and equipment
                to handle projects of any size.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We handle everything from automotive frames and truck chassis to storage tanks, structural steel,
                marine hulls, graffiti removal, and complete industrial facility preparation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automotive & Truck Chassis Sandblasting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Industrial & Commercial Facilities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Marine & Structural Steel</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Rust, Paint & Coating Removal</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Surface Cleaning & Prep for Recoating</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Graffiti & Contamination Removal</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial sandblasting equipment"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-bold text-lg mb-1">Ready to Start?</p>
                <p className="text-sm mb-3">Get your free project quote today</p>
                <Button to="/contact" variant="secondary" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Services"
            subtitle="Comprehensive sandblasting and industrial painting solutions for every industry"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Wrench}
              title="Automotive Sandblasting"
              description="Complete frame and chassis restoration for cars, trucks, and specialty vehicles. Remove rust, old paint, and coatings to prepare for primer and paint."
              link="/services/automotive"
            />
            <ServiceCard
              icon={Building2}
              title="Commercial Sandblasting"
              description="Surface preparation for commercial buildings, parking structures, warehouses, and retail facilities. Fast, efficient, and minimal disruption to operations."
              link="/services/commercial"
            />
            <ServiceCard
              icon={Shield}
              title="Industrial Sandblasting"
              description="Heavy-duty blasting for structural steel, tanks, piping, and industrial equipment. Remove heavy coatings, rust, and surface buildup for long-lasting industrial coatings."
              link="/services/industrial"
            />
            <ServiceCard
              icon={Anchor}
              title="Marine Sandblasting"
              description="Hull cleaning, deck preparation, and marine equipment blasting. Salt and corrosion removal for boats, ships, and waterfront structures."
              link="/services/marine"
            />
            <ServiceCard
              icon={Droplets}
              title="Surface Cleaning & Rust Removal"
              description="Professional surface cleaning for concrete, brick, stone, and metal. Complete rust removal and surface profiling for optimal coating adhesion."
              link="/services/surface-cleaning"
            />
            <ServiceCard
              icon={Truck}
              title="Truck Chassis Sandblasting & Painting"
              description="Specialized blasting and coating for dump trucks, trailers, and heavy equipment chassis. Complete rust removal, primer, and industrial paint application."
              link="/services/truck-chassis"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Industries We Work In"
            subtitle="Trusted by professionals across multiple sectors"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Construction & Contractors',
                description: 'Steel beams, structural components, scaffolding, and construction equipment preparation.',
                icon: Building2,
              },
              {
                title: 'Fleet Owners & Trucking',
                description: 'Truck chassis, trailers, dump bodies, and fleet vehicle restoration and recoating.',
                icon: Truck,
              },
              {
                title: 'Manufacturing & Warehouses',
                description: 'Equipment maintenance, facility prep, racking systems, and production line components.',
                icon: Shield,
              },
              {
                title: 'Municipalities & Public Works',
                description: 'Bridges, water tanks, public equipment, playground structures, and infrastructure maintenance.',
                icon: Award,
              },
              {
                title: 'Marine & Boatyards',
                description: 'Boat hulls, marine equipment, dock structures, and waterfront facility maintenance.',
                icon: Anchor,
              },
              {
                title: 'Property Managers',
                description: 'Building facades, parking structures, railings, fire escapes, and commercial property maintenance.',
                icon: CheckCircle,
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <industry.icon className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Simple 4-Step Process"
            subtitle="From quote to completion, we make sandblasting easy"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Request a Quote',
                description: 'Send us your project details, photos, dimensions, and location. We respond within 24 hours with a detailed estimate.',
              },
              {
                step: '2',
                title: 'Site Visit & Plan',
                description: 'We review the site, assess surface conditions, and recommend the best media, pressure, and coating options.',
              },
              {
                step: '3',
                title: 'Blasting & Coating',
                description: 'Our team arrives on-site with professional equipment for dustless or traditional blasting, followed by primer and paint if needed.',
              },
              {
                step: '4',
                title: 'Final Inspection',
                description: 'Quality check, surface verification, and complete cleanup of blasting media. Your satisfaction is guaranteed.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Before & After Results"
            subtitle="See the transformation our sandblasting services deliver"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                before: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600',
                after: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Dump Truck Chassis',
                description: 'Complete rust removal and industrial coating application',
              },
              {
                before: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=600',
                after: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Structural Steel Beams',
                description: 'Old coating removal and surface preparation',
              },
              {
                before: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=600',
                after: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Marine Equipment',
                description: 'Salt corrosion removal and protective coating',
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={project.before} alt="Before" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt="After" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Our company Sandblasting?"
            subtitle="Three decades of excellence in mobile sandblasting and industrial painting"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">30+ Years of Hands-On Experience</h3>
                  <p className="text-gray-600">Proven expertise in all types of sandblasting and industrial coating projects.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Mobile Dustless Blasting Equipment</h3>
                  <p className="text-gray-600">State-of-the-art mobile units bring professional service directly to your location.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Industrial-Grade Equipment & Media</h3>
                  <p className="text-gray-600">Professional compressors and appropriate blasting media for every surface type.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">OSHA-Compliant Safety Standards</h3>
                  <p className="text-gray-600">Full PPE, safety protocols, and environmental compliance on every job.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Flexible Scheduling Options</h3>
                  <p className="text-gray-600">Nights, weekends, and off-hours available to minimize disruption to your operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Complete Service: Blast, Prime & Paint</h3>
                  <p className="text-gray-600">One contractor handles your entire project from surface prep through final coating.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Up-Front, All-Inclusive Pricing</h3>
                  <p className="text-gray-600">Transparent quotes that include materials and labor with no hidden fees.</p>
                </div>
              </div>
              <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-2">
                  "Our company did an outstanding job on our fleet of dump trucks. Professional, on time, and the quality speaks for itself."
                </p>
                <p className="font-bold">- Mike R., Fleet Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Service Area"
            subtitle="Local expertise with nationwide reach"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DMV Region (Primary Service Area)</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We're based in Manassas, Virginia, and proudly serve the entire DMV area including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Northern Virginia: Manassas, Fairfax, Prince William County, Loudoun, Arlington</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Washington DC and surrounding metro area</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Maryland: Montgomery County, Prince George's County, and Baltimore area</span>
                </li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">National Projects</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                For larger industrial and commercial projects, we travel across North America. Contact us to discuss
                your project location and requirements.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-semibold mb-2">Manassas, VA</p>
                <p className="text-gray-500">10819 Violet Ct, Manassas, VA 20109</p>
                <p className="text-gray-500 mt-4">Serving DMV & Beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our sandblasting services"
            centered
          />
          <div className="space-y-4">
            {[
              {
                question: 'Do you come to my job site?',
                answer: 'Yes! We specialize in mobile sandblasting services. Our equipment comes directly to your location, whether it\'s a residential property, commercial facility, or industrial site. This saves you the hassle and expense of transporting heavy equipment or structures.',
              },
              {
                question: 'What surfaces can you sandblast?',
                answer: 'We can sandblast virtually any surface including metal (steel, aluminum, iron), concrete, brick, stone, wood, and more. Common projects include automotive frames, truck chassis, structural steel, tanks, marine vessels, building facades, and industrial equipment.',
              },
              {
                question: 'How does dustless blasting work?',
                answer: 'Dustless blasting mixes water with abrasive media, which suppresses dust by up to 92% compared to traditional sandblasting. This makes it safer for operators, reduces environmental impact, and is often faster and more effective at removing coatings and rust.',
              },
              {
                question: 'Will sandblasting damage my equipment?',
                answer: 'When performed by experienced professionals like Our company, sandblasting is safe and effective. We select the appropriate media type, pressure, and technique for each specific surface and application. Our 30+ years of experience ensures your equipment is properly prepared without damage.',
              },
              {
                question: 'How do you price a project?',
                answer: 'Pricing depends on several factors: surface area, surface condition, accessibility, coating type being removed, and whether painting is needed. We provide free, detailed quotes after reviewing your project details and photos. All quotes include materials and labor with no hidden fees.',
              },
              {
                question: 'Can you also prime and paint after blasting?',
                answer: 'Absolutely! We offer complete surface preparation and coating services. After blasting, we can apply primer, paint, or specialized industrial coatings. This ensures proper adhesion and eliminates the need to coordinate multiple contractors.',
              },
              {
                question: 'Are you insured and certified?',
                answer: 'Yes, Our company Sand Blasting & Painting LLC is fully insured and follows all OSHA safety standards. We maintain proper liability coverage and workers\' compensation insurance. Our team uses professional-grade safety equipment and follows industry best practices.',
              },
              {
                question: 'How far will you travel for a project?',
                answer: 'We primarily serve the DMV area (DC, Maryland, Virginia) and can typically mobilize within 24-48 hours. For larger industrial or commercial projects, we travel across North America. Contact us to discuss your project location and we\'ll provide a detailed mobilization quote.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-orange-600 transform group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};
