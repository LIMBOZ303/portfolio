import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Rocket } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

/* ===== CONTACT SECTION =====
 * Contact form and social links
 * Edit your contact info in the `contactInfo` and `socialLinks` arrays
 */

const contactInfo = [
  // === EDIT YOUR CONTACT INFO HERE ===
  { icon: <Mail size={18} />, label: 'Email', value: 'nguyencuong.20082009@gmail.com', href: 'mailto:nguyencuong.20082009@gmail.com' },
  { icon: <Phone size={18} />, label: 'Số điện thoại', value: '+84 979 216 230', href: 'tel:0979216230' },
  { icon: <MapPin size={18} />, label: 'Địa chỉ', value: 'Quận Gò Vấp, TP.HCM', href: null },
]

const socialLinks = [
  // === EDIT YOUR SOCIAL LINKS HERE ===
  { icon: <FaGithub size={20} />, label: 'GitHub', href: 'https://github.com/LIMBOZ303' },
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-v%C4%83n-93905740a/' },
  { icon: <FaFacebook size={20} />, label: 'Facebook', href: 'https://www.facebook.com/van.cuong.710323?locale=vi_VN' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập tên'
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Vui lòng nhập email hợp lệ'
    }
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập tin nhắn'
    else if (formData.message.trim().length < 10) newErrors.message = 'Tin nhắn phải có ít nhất 10 ký tự'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString('vi-VN'),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('EmailJS error:', error)

      setErrors({
        submit: 'Gửi tin nhắn thất bại. Vui lòng thử lại sau.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-dark-800/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">06. Liên Hệ</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 section-title mx-auto w-fit">
            Liên Hệ Với Tôi
          </h2>
          <p className="mt-6 text-text-secondary max-w-md mx-auto">
            Tôi đang tìm kiếm các cơ hội làm việc <span className="text-primary font-medium">Front-end Developer</span> và{' '}
            <span className="text-primary font-medium">Mobile Developer</span>. Hãy kết nối nhé!
          </p>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex items-center gap-4"
        >
          <Rocket size={24} className="text-primary shrink-0" />
          <p className="text-text-secondary text-sm sm:text-base">
            <span className="text-text-primary font-medium">Tôi sẵn sàng cho các cơ hội Front-end / Mobile Developer.</span>{' '}
            Nếu bạn có câu hỏi hoặc chỉ muốn nói lời chào, đừng ngần ngại nhắn tin cho tôi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:border-primary/30 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-text-primary text-sm hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-primary text-sm">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card rounded-xl p-5">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-4">Tìm tôi trên</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-dark-700/50 border border-dark-500/30 text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-semibold text-lg text-text-primary mb-6">Gửi tin nhắn cho tôi</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-emerald-400 mb-4" />
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Đã Gửi Tin Nhắn!</h4>
                  <p className="text-text-secondary text-sm">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-2">Tên</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tên của bạn"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-700/50 border ${errors.name ? 'border-red-500/50' : 'border-dark-500/50 focus:border-primary/50'
                        } text-text-primary placeholder:text-text-muted/50 outline-none transition-colors text-sm`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email-cua-ban@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-700/50 border ${errors.email ? 'border-red-500/50' : 'border-dark-500/50 focus:border-primary/50'
                        } text-text-primary placeholder:text-text-muted/50 outline-none transition-colors text-sm`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-text-secondary mb-2">Tin nhắn</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Nhập nội dung tin nhắn..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-700/50 border ${errors.message ? 'border-red-500/50' : 'border-dark-500/50 focus:border-primary/50'
                        } text-text-primary placeholder:text-text-muted/50 outline-none transition-colors text-sm resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-primary to-cyan-400 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {loading ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                  </button>

                  {errors.submit && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.submit}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
