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
            Software engineer from Tirana, Albania, building full-stack products and AI-enabled workflows with React, Next.js, TypeScript, PostgreSQL, and Supabase. Currently working at Bliss Therapy and delivering complete freelance products for clients from initial concept through launch.
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
