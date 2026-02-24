import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-600">
      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-orange-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <Link to={link} className="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center">
        Learn More
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
};
