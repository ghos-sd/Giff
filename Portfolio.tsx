import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';
import { Modal } from '../components/UI/Modal';
import { Button } from '../components/UI/Button';
import { projects } from '../data/projects';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const categories = ['All', 'Modern', 'Contemporary', 'Traditional', 'Luxury'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setShowBefore(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowBefore(false);
  };

  return (
    <>
      <SEOHead
        title="Kitchen Renovation Portfolio - Our Best Kitchen Transformations"
        description="Explore our portfolio of stunning kitchen renovations. View before and after photos of our luxury kitchen remodeling projects in Los Angeles."
        keywords="kitchen renovation portfolio, before after kitchen photos, luxury kitchen transformations, kitchen remodeling examples"
        canonical="https://customkitchenrenovations.com/portfolio"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of stunning kitchen transformations. Each project represents our commitment 
              to quality, creativity, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative group">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
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
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create a kitchen that exceeds your expectations.
          </p>
          <Button to="/contact" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={closeModal} size="xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {selectedProject.category}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={showBefore ? selectedProject.beforeImage : selectedProject.afterImage}
                alt={`${selectedProject.title} - ${showBefore ? 'Before' : 'After'}`}
                className="w-full h-96 object-cover rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {showBefore ? 'Before' : 'After'}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowBefore(!showBefore)}
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                  >
                    {showBefore ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => setShowBefore(false)}
                variant={!showBefore ? 'primary' : 'outline'}
                size="sm"
              >
                After
              </Button>
              <Button
                onClick={() => setShowBefore(true)}
                variant={showBefore ? 'primary' : 'outline'}
                size="sm"
              >
                Before
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};