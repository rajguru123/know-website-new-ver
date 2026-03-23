import type { Metadata } from 'next';
import IoTClient from './IoTClient';

export const metadata: Metadata = {
  title: 'IoT Product Development Company in Bangalore — Build Scalable Products Faster',
  description: 'IoT Product Development Company in Bangalore offering end-to-end IoT design, embedded systems, and cloud integration. Build your product from concept to deployment.',
  alternates: { canonical: 'https://www.knowxindia.com/iot-product-development-company-bangalore' },
  openGraph: {
    title: 'IoT Product Development Company in Bangalore | Knowx Innovations',
    description: 'We design and develop scalable IoT products — from hardware and embedded firmware to cloud platforms and analytics.',
    url: 'https://www.knowxindia.com/iot-product-development-company-bangalore',
  },
};

export default function IoTPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is IoT product development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'IoT product development involves designing connected devices that collect, process, and transmit data using embedded systems, wireless connectivity, and cloud platforms. It covers hardware design, firmware development, cloud integration, and application development.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to develop an IoT product?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most IoT products take between 3 to 9 months from concept to deployment, depending on complexity. A simple sensor device may take 3 months, while a full industrial IoT system with cloud analytics can take 6-9 months.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you support startups with IoT product development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work closely with startups to develop prototypes, validate concepts, and scale products efficiently. Our end-to-end approach means startups do not need to manage multiple vendors.',
                },
              },
              {
                '@type': 'Question',
                name: 'What technologies do you use for IoT development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use microcontrollers like ESP32, STM32, and Raspberry Pi. Our firmware stack includes Embedded C, FreeRTOS, and Zephyr. For connectivity we support Wi-Fi, BLE, LoRa, Zigbee, NB-IoT, and LTE-M. Cloud platforms include AWS IoT and Azure IoT.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with both hardware and software?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We provide complete end-to-end IoT product development — from PCB design and embedded firmware to cloud platforms and mobile applications. Everything under one roof.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide post-deployment support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We offer ongoing maintenance, OTA firmware updates, cloud infrastructure management, and scaling support after your product is deployed.',
                },
              },
            ],
          }),
        }}
      />
      <IoTClient />
    </>
  );
}
