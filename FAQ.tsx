import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';
import { Button } from '../components/UI/Button';
import { faqs } from '../data/faqs';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <SEOHead
        title="Kitchen Renovation FAQ - Common Questions About Our Services"
        description="Get answers to frequently asked questions about kitchen renovations, timelines, costs, and our renovation process. Expert advice from Custom Kitchen Renovations."
        keywords="kitchen renovation FAQ, kitchen remodeling questions, renovation timeline, kitchen renovation cost"
        canonical="https://customkitchenrenovations.com/faq"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our kitchen renovation services, process, and what to expect 
              during your project.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team is here to help. Contact us for personalized answers to your kitchen renovation questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg">
                Ask a Question
              </Button>
              <Button href="tel:555-123-4567" variant="outline" size="lg">
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Tips for Your Kitchen Renovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful advice to make your kitchen renovation project successful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Plan Your Budget',
                description: 'Set aside 10-20% extra for unexpected expenses that may arise during renovation.'
              },
              {
                title: 'Choose Timeless Designs',
                description: 'Opt for classic styles that won\'t go out of fashion quickly to maximize your investment.'
              },
              {
                title: 'Consider Your Lifestyle',
                description: 'Think about how you use your kitchen daily and design accordingly for maximum functionality.'
              },
              {
                title: 'Quality Over Quantity',
                description: 'Invest in high-quality materials and appliances that will last for years to come.'
              },
              {
                title: 'Lighting is Key',
                description: 'Plan for multiple lighting sources including task, ambient, and accent lighting.'
              },
              {
                title: 'Professional Installation',
                description: 'Work with certified professionals to ensure proper installation and warranty coverage.'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};