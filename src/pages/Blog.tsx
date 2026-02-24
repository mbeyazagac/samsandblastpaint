import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Benefits of Dustless Blasting for Fleet Owners',
      excerpt: 'Discover how modern dustless blasting technology can save fleet owners time and money while delivering superior results for truck and trailer maintenance.',
      author: 'Our company Team',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Fleet Maintenance',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'benefits-dustless-blasting-fleet-owners',
    },
    {
      title: 'How to Prepare Your Equipment for Sandblasting',
      excerpt: 'A comprehensive guide to preparing vehicles, equipment, and facilities for professional sandblasting services to ensure the best possible results.',
      author: 'Our company Team',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'Preparation Tips',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'prepare-equipment-for-sandblasting',
    },
    {
      title: 'Sandblasting vs Power Washing: What\'s the Difference?',
      excerpt: 'Understanding when to use sandblasting versus power washing for surface cleaning and preparation. Learn which method is best for your project.',
      author: 'Our company Team',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'sandblasting-vs-power-washing',
    },
    {
      title: 'The Importance of Surface Preparation Before Painting',
      excerpt: 'Why proper surface preparation through sandblasting is critical for coating longevity and performance in industrial applications.',
      author: 'Our company Team',
      date: 'December 28, 2024',
      readTime: '8 min read',
      category: 'Industrial Coating',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'importance-surface-preparation-painting',
    },
    {
      title: 'Choosing the Right Blasting Media for Your Project',
      excerpt: 'A guide to understanding different blasting media types and how to select the right one for your specific surface and application.',
      author: 'Our company Team',
      date: 'December 20, 2024',
      readTime: '6 min read',
      category: 'Technical Guide',
      image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'choosing-right-blasting-media',
    },
    {
      title: 'Rust Prevention Tips After Sandblasting',
      excerpt: 'Learn how to protect freshly sandblasted surfaces from rust and corrosion while awaiting coating application.',
      author: 'Our company Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'rust-prevention-after-sandblasting',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, tips, and guides on sandblasting, surface preparation, and industrial coating
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Articles"
            subtitle="Stay informed with our expert knowledge and industry insights"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Sandblasting?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get expert advice and a free quote for your sandblasting or industrial painting project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-orange-600 text-white rounded hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+15713318485"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gray-700 text-white rounded hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
              >
                Call (571) 331-8485
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
