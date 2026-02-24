import React, { useState } from 'react';
import { Button } from './Button';
import { Upload } from 'lucide-react';

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  title = "Request Your Free Sandblasting Quote",
  subtitle = "Share your project details and we'll get back to you within 24 hours."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    serviceType: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! In production, this would send your quote request.');
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Optional"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="(571) 555-0100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
              Project Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="City, State"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
              Type of Service *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="">Select a service</option>
              <option value="automotive">Automotive</option>
              <option value="industrial">Industrial</option>
              <option value="commercial">Commercial</option>
              <option value="marine">Marine</option>
              <option value="surface-cleaning">Surface Cleaning</option>
              <option value="truck-chassis">Truck Chassis</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Tell us about your project: What surfaces need blasting? Approximate size/dimensions? Any coating or painting needed?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Upload Photos or Documents
          </label>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
            <input type="file" multiple className="hidden" accept="image/*,.pdf" />
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Submit Quote Request
          </Button>
          <p className="text-xs text-gray-400 mt-3 text-center">
            We will never share your information. A Our company project manager will contact you within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
};
