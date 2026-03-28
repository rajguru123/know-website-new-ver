'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let new page content render
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.rv:not(.vis)').forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
