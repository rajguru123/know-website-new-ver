import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Knowx Innovations — Embedded Systems & IoT Product Engineering',
  description: 'Contact Knowx Innovations for embedded systems design, IoT product development, hardware design, and firmware development. Based in Vijayanagar, Bangalore, India.',
  alternates: { canonical: 'https://www.knowxindia.com/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
