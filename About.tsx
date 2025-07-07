import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';
import { Button } from '../components/UI/Button';
import { testimonials } from '../data/testimonials';

export const About: React.FC = () => {
  const achievements = [
    { number: '500+', label: 'Kitchens Transformed' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const certifications = [
    'Licensed General Contractor',
    'NKBA Certified Kitchen Designer',
    'Better Business Bureau A+ Rating',
    'Fully Insured & Bonded',
  ];

  return (
    <>
      <SEOHead
        title="About Custom Kitchen Renovations - Expert Kitchen Renovation Team"
        description="Learn about our experienced team of kitchen renovation specialists. Over 15 years of expertise in custom kitchen design and renovation in Los Angeles."
        keywords="kitchen renovation experts, kitchen design team, Los Angeles kitchen contractors"
        canonical="https://customkitchenrenovations.com/about"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Custom Kitchen Renovations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we've been transforming kitchens throughout Los Angeles with uncompromising quality, 
              innovative design, and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Custom Kitchen Renovations began with a simple mission: to create beautiful, 
                functional kitchens that enhance our clients' daily lives. What started as a small family business 
                has grown into one of Los Angeles' most trusted kitchen renovation companies.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, with over two decades of experience in construction and design, recognized that 
                the kitchen is truly the heart of every home. We've built our reputation on delivering 
                exceptional results while maintaining the highest standards of customer service.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we continue to push the boundaries of kitchen design, incorporating the latest trends 
                and technologies while honoring timeless craftsmanship principles.
              </p>
              <Button to="/contact" size="lg">
                Work With Us
              </Button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every material, every detail, every finish is selected 
                and executed to the highest standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                Your vision is our priority. We listen, collaborate, and work tirelessly to bring 
                your dream kitchen to life exactly as you imagined.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We respect your time and schedule. Our projects are completed on time, within budget, 
                and with minimal disruption to your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our credentials and certifications ensure you're working with qualified professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who trusted us with their kitchen renovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
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
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss your kitchen renovation project. Get started with a free consultation today.
          </p>
          <Button to="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
};