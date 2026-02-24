import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  light = false
}) => {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-8'}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
