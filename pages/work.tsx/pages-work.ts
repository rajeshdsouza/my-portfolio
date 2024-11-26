// File: /pages/work.tsx
import { motion } from 'framer-motion';

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "Company Name",
    position: "Position Title",
    period: "2022 - Present",
    description: "Brief description of your role and responsibilities.",
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3"
    ]
  },
  // Add more work experiences here
];

export default function Work() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Work</h1>
          <p className="text-zinc-400 max-w-2xl">
            A collection of my professional experiences and achievements.
          </p>
        </div>

        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-white font-bold">{experience.position}</h3>
                  <p className="text-custom-cyan">{experience.company}</p>
                </div>
                <span className="text-zinc-400">{experience.period}</span>
              </div>
              
              <p className="text-zinc-300 mb-4">{experience.description}</p>
              
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
