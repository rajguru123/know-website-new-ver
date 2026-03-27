import type { Metadata } from 'next';
import EmbeddedClient from './EmbeddedClient';

export const metadata: Metadata = {
  title: 'Top Embedded System Design and Software Development Services in Bangalore | Expert Solutions',
  description: 'Looking for embedded system design and software development services in Bangalore? We deliver expert firmware, hardware, and embedded solutions for industrial, IoT, and smart devices. Contact us today!',
  alternates: { canonical: 'https://www.knowxindia.com/embedded-system-design-software-development-bangalore' },
  openGraph: {
    title: 'Embedded System Design & Firmware Development Services | Knowx Innovations',
    description: 'We design and develop reliable embedded systems, firmware, and software that power next-generation products — from industrial machines to smart devices.',
    url: 'https://www.knowxindia.com/embedded-system-design-software-development-bangalore',
    images: [
      {
        url: '/images/banner-embedded-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Embedded System Design and Firmware Development Services by Knowx Innovations Bangalore',
      },
    ],
  },
};

export default function EmbeddedSystemPage() {
  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is embedded system design and software development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Embedded system design and software development involve creating hardware and firmware that work together to perform specific functions within a device. This includes PCB design, microcontroller programming, RTOS integration, and device driver development.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is embedded system development different from IoT development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Embedded systems focus on the device itself — hardware and firmware working together for a specific function. IoT adds connectivity and cloud integration to those devices, enabling remote monitoring and data analytics.',
                },
              },
              {
                '@type': 'Question',
                name: 'What programming languages are used in embedded systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The most common languages are C and C++ for low-level firmware development. RTOS platforms like FreeRTOS and Zephyr are used for real-time applications. Python is sometimes used for higher-level applications and testing.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide end-to-end embedded product development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We offer complete solutions from hardware design and firmware development to system integration, testing, and deployment. Our integrated team handles the entire product lifecycle under one roof.',
                },
              },
              {
                '@type': 'Question',
                name: 'What industries benefit from embedded system design services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industries like manufacturing, automotive, healthcare, energy and utilities, and consumer electronics rely heavily on embedded systems for asset tracking, control systems, medical devices, power management, and smart connected products.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does embedded system development take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Timelines vary depending on complexity. A simple firmware project may take 4-6 weeks, while a full embedded product with custom hardware and firmware can take 3-6 months. We provide detailed timelines during the requirement analysis phase.',
                },
              },
            ],
          }),
        }}
      />

      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Embedded System Design and Software Development',
            provider: {
              '@type': 'Organization',
              name: 'Knowx Innovations',
              url: 'https://www.knowxindia.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangalore',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
            },
            description: 'End-to-end embedded system design and firmware development services including hardware design, embedded software, RTOS development, and system integration.',
            areaServed: {
              '@type': 'Place',
              name: 'Bangalore, India',
            },
            serviceType: 'Embedded System Design and Firmware Development',
          }),
        }}
      />

      <EmbeddedClient />
    </>
  );
}

