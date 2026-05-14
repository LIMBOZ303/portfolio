import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, CalendarDays, CheckCircle2, TrendingUp } from 'lucide-react'

/* ===== EXPERIENCE SECTION =====
 * Work experience timeline
 * Edit the `experiences` array and transferable skills
 */

const experiences = [
  {
    // === EDIT YOUR EXPERIENCE HERE ===
    role: 'Nhân viên F&B',
    company: 'Công ty F&B',
    period: '1 Năm',
    type: 'Toàn thời gian',
    description: 'Làm việc trong môi trường F&B năng động, đảm nhận nhiều trách nhiệm từ hỗ trợ tính lương đến chăm sóc khách hàng.',
    responsibilities: [
      'Hỗ trợ tính toán và quản lý dữ liệu lương',
      'Chăm sóc khách hàng và tương tác trực tiếp',
      'Hỗ trợ bán hàng và quảng bá sản phẩm',
      'Hỗ trợ vận hành và quy trình công việc hàng ngày',
    ],
  },
]

const transferableSkills = [
  {
    icon: <CheckCircle2 size={16} />,
    skill: 'Cẩn thận với các con số và tính chính xác của dữ liệu',
  },
  {
    icon: <CheckCircle2 size={16} />,
    skill: 'Kỹ năng giao tiếp tốt với khách hàng và đội nhóm',
  },
  {
    icon: <CheckCircle2 size={16} />,
    skill: 'Có trách nhiệm, kỷ luật và đáng tin cậy',
  },
  {
    icon: <CheckCircle2 size={16} />,
    skill: 'Khả năng làm việc dưới áp lực tốt',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-dark-800/30">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Nơi tôi từng làm việc</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
            Kinh nghiệm
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Role header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-text-primary">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1.5 text-text-muted text-xs">
                        <CalendarDays size={12} />
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {resp}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Transferable Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-primary">Kỹ năng chuyển giao</h3>
                  <p className="text-text-muted text-sm">Những gì tôi học được từ công việc phi công nghệ</p>
                </div>
              </div>

              <div className="space-y-4">
                {transferableSkills.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-700/30 border border-dark-500/30 hover:border-accent/30 transition-all group"
                  >
                    <span className="text-accent group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{item.skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Key insight */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                <p className="text-text-secondary text-sm leading-relaxed italic">
                  "Kinh nghiệm làm việc trong ngành F&B đã dạy tôi cách thấu hiểu người dùng, cẩn thận với chi tiết dữ liệu và giao tiếp hiệu quả — những kỹ năng trực tiếp hỗ trợ tôi trong công việc lập trình viên."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
