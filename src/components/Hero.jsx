import { motion } from 'framer-motion'
import { ArrowDown, Eye, Mail, Code2, Smartphone, Sparkles } from 'lucide-react'

/* ===== HERO SECTION =====
 * Main landing section with animated text and CTA buttons
 * Edit personal info below
 */

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              Sẵn sàng cho các cơ hội mới
            </motion.div>

            {/* === EDIT YOUR NAME HERE === */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Xin chào, tôi là{' '}
              <span className="gradient-text">Nguyễn Văn Cường (Illusion1)</span>
            </h1>

            {/* === EDIT YOUR TITLE HERE === */}
            <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
              <div className="flex items-center gap-2 text-lg sm:text-xl text-text-secondary">
                <Smartphone size={20} className="text-primary" />
                <span>Lập trình viên Mobile</span>
                <span className="text-dark-500">/</span>
                <Code2 size={20} className="text-accent" />
                <span>Lập trình viên Front-end</span>
              </div>
            </div>

            {/* === EDIT YOUR BIO HERE === */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Tôi xây dựng các ứng dụng di động và trang web với giao diện hiện đại, dễ sử dụng bằng React Native, JavaScript và các công nghệ front-end mới nhất.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group px-6 py-3 bg-gradient-to-r from-primary to-cyan-400 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                Xem Dự Án
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group px-6 py-3 border border-dark-500 hover:border-primary/50 text-text-primary rounded-xl hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Liên Hệ Tôi
              </a>
            </div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {['React Native', 'JavaScript', 'Kotlin', 'React.js', 'Redux'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-text-muted bg-dark-700/60 border border-dark-500/50 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Main avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-accent p-[2px] animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                    {/* === REPLACE WITH YOUR PHOTO ===
                         Put your photo in /public/avatar.jpg and uncomment below:
                         <img src="/avatar.jpg" alt="Illusion1" className="w-full h-full object-cover" />
                    */}
                    <div className="text-center">
                      <div className="text-6xl sm:text-7xl font-bold gradient-text">IL</div>
                      <p className="text-xs text-text-muted mt-2 font-mono">lập trình viên</p>
                    </div>
                  </div>
                </div>

                {/* Floating badges around avatar */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 px-3 py-2 glass-card rounded-lg text-xs font-mono text-primary"
                >
                  {'<React />'}
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 px-3 py-2 glass-card rounded-lg text-xs font-mono text-accent"
                >
                  📱 Mobile
                </motion.div>
                <motion.div
                  animate={{ y: [-3, 7, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-8 px-3 py-2 glass-card rounded-lg text-xs font-mono text-cyan-300"
                >
                  {'{ JS }'}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
