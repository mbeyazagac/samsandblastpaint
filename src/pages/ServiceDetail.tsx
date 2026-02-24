import React from 'react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { QuoteForm } from '../components/QuoteForm';
import { CheckCircle, Phone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: string[];
  process: { title: string; description: string }[];
  applications: string[];
  whyChoose: string[];
  relatedServices: { title: string; link: string }[];
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  icon: Icon,
  title,
  subtitle,
  heroImage,
  description,
  benefits,
  process,
  applications,
  whyChoose,
  relatedServices,
}) => {
  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-orange-600 rounded-lg flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="text-xl text-gray-300 mt-2">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
            <Button href="tel:+15713318485" variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (571) 331-8485
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{description}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6 mb-12">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our company?</h3>
                <div className="space-y-3 mb-6">
                  {whyChoose.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
                <Button to="/contact" variant="primary" className="w-full mb-4">
                  Request a Quote
                </Button>
                <Button href="tel:+15713318485" variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Related Services</h4>
                  <div className="space-y-2">
                    {relatedServices.map((service, index) => (
                      <Button key={index} to={service.link} variant="outline" size="sm" className="w-full justify-start">
                        {service.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            title={`Get a Quote for ${title}`}
            subtitle="Share your project details and we'll provide a detailed estimate within 24 hours"
          />
        </div>
      </section>
    </div>
  );
};
