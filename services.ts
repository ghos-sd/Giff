import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'essential',
    title: 'Essential Kitchen Refresh',
    description: 'Perfect for updating your kitchen with modern finishes and improved functionality.',
    features: [
      'Cabinet refacing or painting',
      'Countertop replacement',
      'New backsplash installation',
      'Updated lighting fixtures',
      'New hardware and faucets',
      'Basic appliance upgrade',
      'Color consultation',
      '3-month warranty'
    ],
    priceRange: '$15,000 - $35,000'
  },
  {
    id: 'premium',
    title: 'Premium Renovation',
    description: 'Comprehensive renovation with custom elements and premium materials.',
    features: [
      'Custom cabinet design',
      'Premium countertops (quartz/granite)',
      'Designer backsplash',
      'Professional lighting design',
      'High-end appliance package',
      'Plumbing and electrical updates',
      'Custom storage solutions',
      'Project management',
      '2-year warranty'
    ],
    priceRange: '$50,000 - $85,000',
    popular: true
  },
  {
    id: 'luxury',
    title: 'Luxury Custom Design',
    description: 'Complete transformation with luxury materials and bespoke design elements.',
    features: [
      'Fully custom cabinetry',
      'Luxury stone countertops',
      'Artisan tile work',
      'Smart home integration',
      'Premium appliance suite',
      'Structural modifications',
      'Wine storage solutions',
      'Custom millwork',
      'Dedicated project manager',
      '5-year warranty'
    ],
    priceRange: '$100,000+'
  }
];