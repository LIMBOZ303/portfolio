import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ChevronRight, X, Layers, Smartphone, Globe, Layout } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

/* ===== PROJECTS SECTION =====
 * Showcase your projects with detailed modal view
 * Edit the `projects` array to update your projects
 */

const projects = [
  {
    id: 1,
    title: 'Ứng dụng Di động Tốt nghiệp',
    icon: <Smartphone size={24} />,
    shortDesc: 'Ứng dụng di động xây dựng làm đồ án tốt nghiệp với luồng ứng dụng thực tế.',
    fullDesc: 'Một ứng dụng di động toàn diện được xây dựng làm đồ án tốt nghiệp tại FPT Polytechnic. Ứng dụng tập trung vào việc mang lại giao diện UI thân thiện, tích hợp xác thực bảo mật, kết nối REST API và tuân theo cấu trúc ứng dụng thực tế.',
    tech: ['React Native', 'JavaScript', 'Redux', 'REST API'],
    features: [
      'Xác thực người dùng (Đăng nhập/Đăng ký)',
      'Tích hợp API để quản lý dữ liệu',
      'Quản lý state với Redux',
      'Giao diện mobile sạch sẽ và trực quan',
      'Kiến trúc ứng dụng thực tế',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    // === EDIT LINKS HERE ===
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Ứng dụng Dịch vụ Cưới',
    icon: <Layers size={24} />,
    shortDesc: 'Ứng dụng mobile/web cho dịch vụ tiệc cưới, thuê váy cưới và quản lý nội dung.',
    fullDesc: 'Một ứng dụng di động và web đầy đủ tính năng để quản lý các dịch vụ cưới hỏi, bao gồm thuê/bán váy cưới, quản lý bài viết tin tức và danh sách dịch vụ. Hệ thống cung cấp cả giao diện cho khách hàng và trang quản trị (Admin).',
    tech: ['React Native', 'JavaScript', 'MongoDB', 'Mongoose', 'REST API', 'MoMo Payment'],
    features: [
      'Danh sách sản phẩm và xem chi tiết',
      'Hệ thống bán/cho thuê váy cưới',
      'Quản lý nội dung bài viết và tin tức',
      'Tích hợp thanh toán MoMo',
      'Bảng điều khiển Admin để quản lý nội dung',
      'Đầy đủ các thao tác CRUD với MongoDB',
    ],
    gradient: 'from-violet-500 to-purple-600',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Website Quảng bá Thương hiệu F&B',
    icon: <Globe size={24} />,
    shortDesc: 'Landing page hiện đại cho thương hiệu F&B tập trung vào hình ảnh và CTA.',
    fullDesc: 'Một trang web landing page hiện đại, thiết kế ấn tượng để quảng bá các thương hiệu và sản phẩm F&B. Có các khu vực hình ảnh bắt mắt, CTA (Lời kêu gọi hành động) tối ưu chuyển đổi, giới thiệu sản phẩm và các chiến dịch quảng cáo.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Thiết kế landing page hiện đại, responsive',
      'Khu vực giới thiệu sản phẩm',
      'Làm nổi bật các chiến dịch và khuyến mãi',
      'Các nút CTA tập trung vào chuyển đổi',
      'Thư viện hình ảnh thương hiệu',
      'Trải nghiệm tối ưu trên thiết bị di động',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Portfolio Cá Nhân',
    icon: <Layout size={24} />,
    shortDesc: 'Trang web portfolio responsive giới thiệu kỹ năng, dự án và kinh nghiệm.',
    fullDesc: 'Trang web portfolio cá nhân hiện đại, responsive được xây dựng để giới thiệu kỹ năng lập trình, dự án đã làm và kinh nghiệm chuyên môn. Đặc trưng với hiệu ứng cuộn mượt mà, thiết kế giao diện tối (dark theme) kết hợp glassmorphism và tối ưu mobile-first.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Thiết kế Responsive (mobile-first)',
      'Hiệu ứng cuộn trang mượt mà',
      'Chủ đề tối (Dark theme) với glassmorphism',
      'Showcase dự án dạng popup tương tác',
      'Form liên hệ có xác thực cơ bản',
      'Tối ưu hóa SEO',
    ],
    gradient: 'from-rose-500 to-pink-600',
    github: '#',
    live: '#',
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl border border-dark-500/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className={`relative p-6 pb-4 bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-dark-900/50 text-white/80 hover:text-white hover:bg-dark-900/70 transition-all"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
              {project.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Modal content */}
        <div className="p-6 space-y-6">
          <p className="text-text-secondary leading-relaxed">{project.fullDesc}</p>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">Công nghệ sử dụng</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-md font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">Tính năng chính</h4>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-dark-600/50 hover:bg-dark-500/50 border border-dark-500/50 rounded-xl text-text-secondary hover:text-text-primary text-sm transition-all"
            >
              <FaGithub size={16} />
              Xem Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-cyan-400 text-white rounded-xl hover:opacity-90 text-sm transition-all"
            >
              <ExternalLink size={16} />
              Xem Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="projects" className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm">03. Dự án đã làm</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
              Dự án Nổi bật
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Card gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  {/* Project icon & title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 text-text-muted hover:text-text-primary" onClick={e => e.stopPropagation()}>
                        <FaGithub size={16} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 text-text-muted hover:text-text-primary" onClick={e => e.stopPropagation()}>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-1 text-xs font-mono text-text-muted bg-dark-700/50 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View detail link */}
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    Xem Chi Tiết <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
