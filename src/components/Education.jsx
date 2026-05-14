import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen, Code2 } from 'lucide-react'

/* ===== EDUCATION SECTION =====
 * Education background and focus areas
 * Edit the education details below
 */

const focusAreas = [
  { icon: <Code2 size={16} />, text: 'Phát triển ứng dụng mobile với React Native & Kotlin' },
  { icon: <BookOpen size={16} />, text: 'Nguyên tắc và mô hình thiết kế UI/UX' },
  { icon: <BookOpen size={16} />, text: 'Tư duy lập trình và cấu trúc dữ liệu' },
  { icon: <BookOpen size={16} />, text: 'Phát triển dự án toàn diện và làm việc nhóm' },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">05. Học vấn</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
            Nền tảng Học thuật
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
            {/* Top gradient */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-cyan-400 to-accent" />

            <div className="p-8">
              {/* School info */}
              <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  {/* === EDIT YOUR SCHOOL HERE === */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">FPT Polytechnic</h3>
                  <p className="text-primary font-medium mt-1">Chuyên ngành Lập trình Mobile</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full">
                      <Award size={14} />
                      Tốt nghiệp loại Giỏi
                    </span>
                    <span className="text-text-muted text-sm font-mono">
                      Sinh năm 2004
                    </span>
                  </div>
                </div>
              </div>

              {/* Focus areas */}
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">Trọng tâm học tập</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {focusAreas.map((area, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/30 border border-dark-500/30"
                    >
                      <span className="text-primary mt-0.5">{area.icon}</span>
                      <span className="text-text-secondary text-sm">{area.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional learning note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
              >
                <p className="text-text-secondary text-sm leading-relaxed">
                  📚 Hiện đang mở rộng kiến thức về các công nghệ web và mobile hiện đại, bao gồm full-stack development, các design pattern nâng cao của React và triển khai ứng dụng (cloud deployment) để luôn cập nhật với ngành.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
