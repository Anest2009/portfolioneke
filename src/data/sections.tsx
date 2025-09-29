import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import shadowsImage from '../assets/images/shadows.png';
import nanoChatImage from '../assets/images/secret.png';
import artImage from'../assets/images/fotoja.png';
import timoraImage from '../assets/images/Screenshot 2025-09-29 122213.png';

const projects = [
  {
    title: "TIMORA.AL",
    description: "Beauty & Wellness Booking Platform - A comprehensive booking system for beauty and wellness services with instant booking capabilities",
    link: "https://timora.al",
    previewImage: timoraImage
  },
  {
    title: "ArtCoffe",
    description: "Order Tracking System with Admin Dashboard, Staff Dashboard and Client side",
    link: "https://github.com/Anest2009/artcoffejunction",
    previewImage: artImage
  },
  {
    title: "Nano Chat (WORKING ON IT)",
    description: "A private E2EE chat app that gives the user full privacy and security.",
    link: "",
    previewImage: nanoChatImage
  },
  {
    title: "Shadows",
    description: "The art of being free and the love for shadows never ends",
    link: "https://github.com/Anest2009/Shadows",
    previewImage: shadowsImage
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "WebXPressAL",
              date: "2024 - Now",
              title: "Web Developer & Founder",
              description: ["creating amazing experiences"],
              dotColor: "bg-blue-500"
            },
            {
              company: "Don Bosco, Professional High School",
              date: "2024 - Now",
              title: "IT & CS",
              description: ["getting my degree to make my parents proud"],
              dotColor: "bg-amber-300"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: "Skills",
      content: (
        <div className="space-y-8 mb-8">
           {(() => {
             // Helper object to map skill levels to progress bar widths
             const levelConfig: { [key: string]: { width: string; color: string } } = {
               Expert: { width: '95%', color: 'text-cyan-400' },
               Advanced: { width: '80%', color: 'text-green-400' },
               Intermediate: { width: '60%', color: 'text-yellow-400' },
             };

            const sections = [
              {
                category: "Frontend",
                color: "border-cyan-500", // Using border color for the category line
                skills: [
                  { name: "React", level: "Expert", dotColor: "bg-cyan-500" },
                  { name: "Next.js 14", level: "Expert", dotColor: "bg-blue-500" },
                  { name: "TypeScript", level: "Expert", dotColor: "bg-blue-600" },
                  { name: "JavaScript", level: "Expert", dotColor: "bg-yellow-500" },
                  { name: "Tailwind CSS", level: "Expert", dotColor: "bg-cyan-400" },
                  { name: "Custom CSS", level: "Advanced", dotColor: "bg-pink-500" }
                ]
              },
              {
                category: "Backend & Database",
                color: "border-emerald-500",
                skills: [
                  { name: "Node.js", level: "Advanced", dotColor: "bg-green-500" },
                  { name: "Supabase", level: "Expert", dotColor: "bg-emerald-500" },
                  { name: "PostgreSQL", level: "Advanced", dotColor: "bg-indigo-500" },
                  { name: "Socket.IO", level: "Intermediate", dotColor: "bg-orange-500" }
                ]
              },
              {
                category: "Tools & Libraries",
                color: "border-purple-500",
                skills: [
                  { name: "Vercel", level: "Expert", dotColor: "bg-purple-500" },
                  { name: "Context API", level: "Expert", dotColor: "bg-amber-500" },
                  { name: "Lucide React", level: "Advanced", dotColor: "bg-rose-500" },
                  { name: "Libsodium", level: "Intermediate", dotColor: "bg-violet-500" }
                ]
              }
            ];

            return sections.map((section, sectionIndex) => (
              <div key={section.category}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${section.skills[0].dotColor}`} />
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: (sectionIndex * 0.2) + (skillIndex * 0.05),
                        ease: "easeOut"
                      }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${skill.dotColor}`} />
                          <p className="font-medium text-neutral-300">{skill.name}</p>
                        </div>
                        <p className={`text-sm font-medium ${levelConfig[skill.level]?.color || 'text-neutral-400'}`}>
                          {skill.level}
                        </p>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${skill.dotColor}`}
                          initial={{ width: 0 }}
                          animate={{ width: levelConfig[skill.level]?.width || '0%' }}
                          transition={{
                            duration: 0.8,
                            delay: (sectionIndex * 0.2) + (skillIndex * 0.05) + 0.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ));
          })()}
         </div>
       )
     },
     {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: "Cooking",
              description: "trying not to burn the kitchen down",
              stats: "13 fav recepies",
              color: "rose"
            },
            {
              title: "Filming",
              description: "love to film things from my life",
              stats: "223 videos",
              color: "blue"
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my top one",
              stats: "-$5,000 profit",
              color: "green"
            },
            {
              title: "Risking my life",
              description: "fun but will be the reason why im going to jail",
              stats: "4 crazy activities",
              color: "purple"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]
