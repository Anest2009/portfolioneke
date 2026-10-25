import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoGallery } from '../components/PhotoGallery';
import { AboutSection } from '../components/AboutSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { PersonalStats } from '../components/PersonalStats';
import { BookingButton } from '../components/BookingButton';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  usePageTitle('About');

  return (
    <div>
      <FadeInSection>
        <div className="space-y-3">
          <motion.h1 className="text-3xl font-bold">
            About Anest Petollari
          </motion.h1>
          <motion.p className="max-w-3xl text-sm leading-relaxed sm:text-base">
            I’m a product engineer based in Tirana, Albania. At Bliss Therapy, I work in Product &amp; Partnerships, shipping features across frontend, backend, and AI-powered therapist experiences while supporting strategic partnerships and B2B initiatives. I also lead web development, technical infrastructure, and internal systems at Earth’s Own Heart, a nonprofit organization.
          </motion.p>
          <motion.p className="max-w-3xl text-sm leading-relaxed sm:text-base">
            My work spans TypeScript, React, Next.js, PostgreSQL, Supabase, and AI-assisted engineering workflows—from turning product requirements into working software to debugging production issues and supporting releases. Outside my current roles, I build products including MEGAFONI and SANAMY, alongside earlier client work like Kohela and WEBXPRESSAL.
          </motion.p>
          <BookingButton />
        </div>
        <p className="mb-6 mt-7 text-sm leading-relaxed sm:text-base">
          Recent Gallery Photos
        </p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <PhotoGallery isMobile={isMobile} />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <AboutSection />
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <PersonalStats />
      </FadeInSection>
    </div>
  );
};

export default About;
