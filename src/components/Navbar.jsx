import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

/* ===== NAVBAR COMPONENT =====
 * Sticky navigation with mobile hamburger menu
 * Edit menu items in the `navLinks` array
 */

const navLinks = [
  { name: 'Trang chủ', href: '#home' },
  { name: 'Giới thiệu', href: '#about' },
  { name: 'Kỹ năng', href: '#skills' },
  { name: 'Dự án', href: '#projects' },
  { name: 'Kinh nghiệm', href: '#experience' },
  { name: 'Học vấn', href: '#education' },
  { name: 'Liên hệ', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-dark-900/80 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Name */}
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm text-white">
              NC
            </div>
            <span className="font-semibold text-text-primary group-hover:text-primary transition-colors hidden sm:block">
              {/* === EDIT YOUR NAME HERE === */}
              Nguyễn Văn Cường (Illusion1)
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${activeSection === link.href.substring(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-dark-600/50'
                  }`}
              >
                {link.name}
              </a>
            ))}
            {/* === EDIT CV DOWNLOAD LINK HERE === */}
            <a
              href={`${import.meta.env.BASE_URL}NGUYEN_VAN_CUONGCV.pdf`}
              className="ml-3 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              download="NGUYEN_VAN_CUONGCV.pdf"
            >
              <Download size={14} />
              Tải CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${activeSection === link.href.substring(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-600/50'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}NGUYEN_VAN_CUONGCV.pdf`}
                download="NGUYEN_VAN_CUONGCV.pdf"
                className="block px-4 py-2.5 mt-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-white rounded-lg text-center"
              >
                <Download size={14} className="inline mr-2" />
                Tải CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
