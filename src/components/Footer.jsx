import { Heart, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

/* ===== FOOTER COMPONENT =====
 * Site footer with social links and copyright
 * Edit social links and tagline below
 */

const socialLinks = [
  // === EDIT YOUR SOCIAL LINKS HERE ===
  { icon: <FaGithub size={18} />, href: 'https://github.com/your-username', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/your-username', label: 'LinkedIn' },
  { icon: <FaFacebook size={18} />, href: 'https://facebook.com/your-username', label: 'Facebook' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-dark-600/50">
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-dark-700 border border-dark-500/50 text-text-secondary hover:text-primary hover:border-primary/30 transition-all shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Name & Logo */}
          <a href="#home" className="flex items-center gap-2 group mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xs text-white">
              NC
            </div>
            <span className="font-semibold text-text-primary group-hover:text-primary transition-colors">
              {/* === EDIT YOUR NAME HERE === */}
              Nguyễn Văn Cường (Illusion1)
            </span>
          </a>

          {/* Tagline */}
          <p className="text-text-muted text-sm mb-6">
            Xây dựng các sản phẩm kỹ thuật số tối giản và thực tế.
          </p>

          {/* Social links */}
          <div className="flex gap-3 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-700/50 border border-dark-500/30 text-text-muted hover:text-primary hover:border-primary/30 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-500/50 to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-text-muted text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Nguyễn Văn Cường (Illusion1). Tạo bởi
            <Heart size={12} className="text-red-400" />
            sử dụng React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
