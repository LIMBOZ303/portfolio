import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Heart, Target } from 'lucide-react'

/* ===== ABOUT ME SECTION =====
 * Personal introduction section
 * Edit the text content below to personalize
 */

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <GraduationCap size={20} />,
      label: 'Học vấn',
      value: 'FPT Polytechnic — Tốt nghiệp loại Giỏi',
    },
    {
      icon: <Briefcase size={20} />,
      label: 'Kinh nghiệm',
      value: '1 năm ngành F&B',
    },
    {
      icon: <Target size={20} />,
      label: 'Định hướng',
      value: 'Lập trình Mobile & Front-end',
    },
    {
      icon: <Heart size={20} />,
      label: 'Đam mê',
      value: 'Xây dựng ứng dụng thực tế',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. Giới thiệu</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
            Về Tôi
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            {/* === EDIT YOUR ABOUT TEXT HERE === */}
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Tôi là một <span className="text-text-primary font-medium">Lập trình viên Mobile & Front-end</span> tốt nghiệp{' '}
              <span className="text-primary font-medium">Loại Giỏi</span> tại{' '}
              <span className="text-text-primary font-medium">FPT Polytechnic</span>, chuyên ngành Lập trình Mobile. Tôi đam mê xây dựng các ứng dụng không chỉ đẹp mắt mà còn mang tính thực tế và dễ sử dụng.
            </p>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Bộ kỹ năng cốt lõi của tôi bao gồm{' '}
              <span className="text-text-primary font-medium">React Native, JavaScript, Kotlin, và Redux</span>,
              với kiến thức nền tảng về REST APIs, cơ sở dữ liệu (MongoDB, SQL), và backend cơ bản với Node.js & Express.
            </p>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Ngoài kỹ năng chuyên môn, tôi có{' '}
              <span className="text-text-primary font-medium">1 năm kinh nghiệm làm việc trong ngành F&B</span>,
              điều này giúp tôi rèn luyện kỹ năng giao tiếp, tính cẩn thận với dữ liệu và khả năng làm việc dưới áp lực. Tôi tin rằng những kỹ năng mềm này giúp tôi trở thành một lập trình viên có thể hiểu được cả góc độ kỹ thuật và tâm lý người dùng.
            </p>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Hiện tại, tôi đang học hỏi thêm các công nghệ mới và{' '}
              <span className="text-primary font-medium">luôn sẵn sàng cho các cơ hội làm việc Front-end / Mobile</span>{' '}
              để có thể phát triển kỹ năng và đóng góp vào các dự án thực tế.
            </p>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-start gap-4 group hover:bg-dark-700/40 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-text-primary text-sm mt-1 font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
