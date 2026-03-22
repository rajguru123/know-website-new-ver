import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Knowx Innovations — Embedded Systems & IoT Product Engineering Company',
  description: 'Knowx Innovations is a Bangalore-based embedded systems and IoT product engineering company founded in 2005. Hardware design, firmware development, IoT products, and industry-ready engineer training.',
  alternates: { canonical: 'https://www.knowxindia.com/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
