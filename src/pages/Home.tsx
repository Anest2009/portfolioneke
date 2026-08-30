import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DesignProjects from '../components/DesignProjects';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { BookingButton } from '../components/BookingButton';

const Home = () => {
  usePageTitle('');  // Empty string for home page

  return (
    <div>
      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'hello, Anest here',
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Hey, I’m Anest, a software engineer from Tirana who loves turning rough ideas into thoughtful digital experiences. I care about making things feel clear, useful, and genuinely nice to use. This is a small collection of the work, experiments, and ideas I’ve enjoyed bringing to life.
          </motion.p>
          <div>
            <BookingButton />
          </div>
          <p className="pt-2 text-sm sm:text-base leading-relaxed">
            DESIGN PROJECTS (FREE TIME)
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <motion.section className="space-y-1">
          <div className="py-4">
            <DesignProjects />
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home;
