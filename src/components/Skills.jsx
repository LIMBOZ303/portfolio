import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Smartphone, Globe, Database, Wrench, Users,
} from 'lucide-react'

/* ===== SKILLS SECTION =====
 * Skills grouped by category with visual progress indicators
 * Edit the `skillGroups` array to update your skills
 */

const skillGroups = [
  {
    title: 'Mobile',
    icon: <Smartphone size={20} />,
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-400/10',
    textColor: 'text-cyan-400',
    skills: ['React Native', 'Kotlin'],
  },
  {
    title: 'Front-end',
    icon: <Globe size={20} />,
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-400/10',
    textColor: 'text-violet-400',
    skills: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Kiến trúc & State',
    icon: <Wrench size={20} />,
    color: 'from-emerald-400 to-green-500',
    bgColor: 'bg-emerald-400/10',
    textColor: 'text-emerald-400',
    skills: ['Redux'],
  },
  {
    title: 'Backend / Cơ sở dữ liệu',
    icon: <Database size={20} />,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-400/10',
    textColor: 'text-amber-400',
    skills: ['Node.js (Cơ bản)', 'Express (Cơ bản)', 'MongoDB', 'Mongoose', 'SQL (Cơ bản)', 'REST API'],
  },
  {
    title: 'Công cụ',
    icon: <Wrench size={20} />,
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-400/10',
    textColor: 'text-rose-400',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma (Cơ bản)'],
  },
  {
    title: 'Kỹ năng mềm',
    icon: <Users size={20} />,
    color: 'from-sky-400 to-indigo-500',
    bgColor: 'bg-sky-400/10',
    textColor: 'text-sky-400',
    skills: ['Ứng dụng AI (ChatGPT/Claude/...)', 'Lên ý tưởng sáng tạo', 'Giao tiếp', 'Làm việc nhóm', 'Giải quyết vấn đề', 'Trách nhiệm'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-dark-800/30">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Công nghệ sử dụng</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
            Kỹ năng & Công nghệ
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-6 hover:bg-dark-700/30 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${group.bgColor} ${group.textColor} group-hover:scale-110 transition-transform`}>
                  {group.icon}
                </div>
                <h3 className="font-semibold text-text-primary">{group.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg border border-dark-500/50 bg-dark-700/40 text-text-secondary hover:text-text-primary hover:border-dark-500 transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
