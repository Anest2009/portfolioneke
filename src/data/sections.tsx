import { motion } from 'framer-motion';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import shadowsImage from '../assets/images/shadows.png';
import nanoChatImage from '../assets/images/secret.png';
import artImage from'../assets/images/fotoja.png';
import timoraImage from '../assets/images/Screenshot 2025-09-29 122213.png';

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "WebXPressAL",
              date: "2024 - 2024",
              title: "Web Developer & Founder",
              description: ["building full-stack web applications for clients using React, Next.js, and modern technologies"],
              dotColor: "bg-blue-500"
            },
            {
              company: "Don Bosco, Professional High School",
              date: "2024 - Now",
              title: "IT & CS",
              description: ["pursuing IT & Computer Science degree while applying skills to real-world projects"],
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
        <ProjectsShowcase />
      )
    },
    {
      title: "Freelance Work",
      content: (
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Through my freelance studio <span className="font-medium text-gray-900 dark:text-gray-100">WebXPressAL</span>, I've delivered complete web solutions for 5 clients across industries including consulting, healthcare, and energy. I handle the entire process from design to deployment, building custom sites tailored to each client's needs. Currently developing americancapitol while maintaining ongoing client relationships.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { name: "blackbear-solutions.com", url: "https://blackbear-solutions.com" },
              { name: "femd.com.al", url: "https://femd.com.al" },
              { name: "americancapitol", url: "", status: "in progress" },
              { name: "illyro.agency", url: "https://illyro.agency" },
              { name: "windofchange.energy", url: "https://windofchange.energy" }
            ].map((client) => (
              <span
                key={client.name}
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {client.name}
                {client.status && <span className="ml-1 text-blue-500">({client.status})</span>}
              </span>
            ))}
          </div>
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
              description: "experimenting with recipes and perfecting techniques",
              stats: "13 favorite recipes",
              color: "rose"
            },
            {
              title: "Videography",
              description: "documenting life's moments through film",
              stats: "223 videos",
              color: "blue"
            },
            {
              title: "Investing",
              description: "following financial markets and learning investment strategies",
              stats: "stocks & crypto",
              color: "green"
            },
            {
              title: "Adventure Sports",
              description: "pushing my comfort zone through adrenaline-fueled activities",
              stats: "4 activities",
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
