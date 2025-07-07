import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Star } from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';
import { Button } from '../components/UI/Button';
import { testimonials } from '../data/testimonials';

export const Home: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-gray-800" />,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship for your dream kitchen.'
    },
    {
      icon: <Users className="h-8 w-8 text-gray-800" />,
      title: 'Expert Team',
      description: 'Skilled designers and craftsmen with over 15 years of experience.'
    },
    {
      icon: <Clock className="h-8 w-8 text-gray-800" />,
      title: 'On-Time Delivery',
      description: 'We complete projects on schedule with minimal disruption to your life.'
    }
  ];

  const featuredProjects = [
    {
      title: 'Modern Luxury Kitchen',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary design with premium finishes'
    },
    {
      title: 'Classic Farmhouse Style',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Timeless charm with modern functionality'
    },
    {
      title: 'Gourmet Chef\'s Kitchen',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional-grade appliances and workspace'
    }
  ];

  return (
    <>
      <SEOHead
        title="Custom Kitchen Renovations - Transform Your Kitchen Into a Luxury Space"
        description="Professional kitchen renovation services in Los Angeles. Custom design, premium materials, and expert craftsmanship. Get your free consultation today."
        keywords="kitchen renovation, custom kitchens, luxury kitchen design, kitchen remodeling Los Angeles"
        canonical="https://customkitchenrenovations.com"
      />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Luxury kitchen renovation"
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Kitchen Into a Luxury Space
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200">
              Expert kitchen renovations with premium materials, custom designs, and exceptional craftsmanship. 
              Your dream kitchen awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Book Your Free Design Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Custom Kitchen Renovations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative design, premium materials, and skilled craftsmanship to create kitchens that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent kitchen transformations and see the quality of our work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to="/portfolio" className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/portfolio" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their kitchen renovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get started with a free design consultation. Our experts will work with you to create the perfect kitchen for your home and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};