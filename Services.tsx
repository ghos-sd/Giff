import React from 'react';
import { Check, Star } from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';
import { Button } from '../components/UI/Button';
import { services } from '../data/services';

export const Services: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Kitchen Renovation Services - Custom Kitchen Design & Remodeling"
        description="Comprehensive kitchen renovation services from essential refreshes to luxury custom designs. Professional installation, premium materials, and expert craftsmanship."
        keywords="kitchen renovation services, custom kitchen design, kitchen remodeling packages, luxury kitchen renovation"
        canonical="https://customkitchenrenovations.com/services"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Kitchen Renovation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From essential updates to complete luxury transformations, we offer comprehensive kitchen renovation 
              services tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  service.popular ? 'ring-2 ring-gray-900' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gray-900 text-white px-3 py-1 text-sm font-medium">
                    <Star className="h-4 w-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">{service.priceRange}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    to="/contact" 
                    className="w-full"
                    variant={service.popular ? 'primary' : 'outline'}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process designed to deliver exceptional results with minimal disruption to your life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your vision, needs, and budget to create a personalized plan.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our designers create detailed plans and 3D renderings for your approval.'
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Our skilled craftsmen execute the renovation with precision and care.'
              },
              {
                step: '04',
                title: 'Final Walkthrough',
                description: 'We ensure every detail meets our high standards and your expectations.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to complete your kitchen renovation project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Kitchen Design Consultation',
                description: 'Professional design advice and space planning services.',
                price: 'Starting at $500'
              },
              {
                title: 'Appliance Selection',
                description: 'Expert guidance on selecting the perfect appliances for your needs.',
                price: 'Complimentary with renovation'
              },
              {
                title: 'Permit Assistance',
                description: 'We handle all necessary permits and inspections.',
                price: 'Included in Premium & Luxury'
              },
              {
                title: 'Color Consultation',
                description: 'Professional color selection for cabinets, countertops, and finishes.',
                price: 'Starting at $300'
              },
              {
                title: 'Lighting Design',
                description: 'Custom lighting solutions for optimal functionality and ambiance.',
                price: 'Starting at $800'
              },
              {
                title: 'Project Management',
                description: 'Dedicated project manager to oversee every aspect of your renovation.',
                price: 'Included in all packages'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-900 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Kitchen Renovation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and detailed quote for your kitchen renovation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Get Free Quote
            </Button>
            <Button to="/portfolio" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};