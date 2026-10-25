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
                'Product Engineer & Partnerships at Bliss Therapy',
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
            Hey, I’m Anest, a product engineer from Tirana. I work across product engineering and partnerships at Bliss Therapy, building therapist discovery and AI-powered experiences that help people find support in their own language and culture. I’m also Technical Lead at Earth’s Own Heart, and I build and launch products like MEGAFONI. I care about making things clear, useful, and thoughtful to use.
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
