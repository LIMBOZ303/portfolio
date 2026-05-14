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
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                  
                  {/* Outer glow ring and Avatar (Center) */}
                  <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-primary via-cyan-400 to-accent p-[2px] animate-pulse-glow cursor-crosshair" style={{ transform: "translateZ(0px)" }}>
                    <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden relative group">
                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10 pointer-events-none" />
                      
                      {/* === REPLACE WITH YOUR PHOTO ===
                           Put your photo in /public/avatar.jpg and uncomment below:
                           <img src="/avatar.jpg" alt="Illusion1" className="w-full h-full object-cover" />
                      */}
                      <div className="text-center group-hover:scale-110 transition-transform duration-500">
                        <div className="text-6xl sm:text-7xl font-bold gradient-text drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">IL</div>
                        <p className="text-xs text-text-muted mt-2 font-mono group-hover:text-primary transition-colors">lập trình viên</p>
                      </div>
                    </div>
                  </div>

                  {/* 3D Orbital System */}
                  <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d", transform: "rotateX(65deg) rotateY(-15deg)" }}>
                    
                    {/* Visual Orbit Ring */}
                    <div className="absolute -inset-6 sm:-inset-10 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]" />

                    {/* Planet 1: React */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotateZ: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                        <motion.div
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateZ: [0, -360] }} // Counter-rotate to keep upright
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                          <div style={{ transform: "rotateX(-65deg) rotateY(15deg)" }} className="pointer-events-auto">
                            <div className="px-3 py-2 glass-card rounded-lg text-xs font-mono text-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110 transition-transform cursor-pointer">
                              {'<React />'}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Planet 2: Mobile */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotateZ: [120, 480] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                        <motion.div
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateZ: [-120, -480] }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                          <div style={{ transform: "rotateX(-65deg) rotateY(15deg)" }} className="pointer-events-auto">
                            <div className="px-3 py-2 glass-card rounded-lg text-xs font-mono text-accent shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-110 transition-transform cursor-pointer">
                              📱 Mobile
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Planet 3: JS */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotateZ: [240, 600] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                        <motion.div
                          style={{ transformStyle: "preserve-3d" }}
                          animate={{ rotateZ: [-240, -600] }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                          <div style={{ transform: "rotateX(-65deg) rotateY(15deg)" }} className="pointer-events-auto">
                            <div className="px-3 py-2 glass-card rounded-lg text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.3)] hover:scale-110 transition-transform cursor-pointer">
                              {'{ JS }'}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
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
