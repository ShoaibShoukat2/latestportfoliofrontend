import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.3c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.08-1.33A9.96 9.96 0 0 0 12.04 22C17.58 22 22 17.52 22 12S17.58 2 12.04 2Zm0 18.2c-1.7 0-3.28-.5-4.6-1.35l-.33-.2-3.02.8.8-2.94-.21-.34A8.16 8.16 0 0 1 3.8 12c0-4.54 3.7-8.22 8.24-8.22 4.54 0 8.24 3.68 8.24 8.22 0 4.54-3.7 8.2-8.24 8.2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 20.5V8.75h3.25V20.5H3.5Zm6.25 0h3.25v-6.4c0-1.7.95-2.64 2.34-2.64 1.3 0 2.03.9 2.03 2.64v6.4H21V13.4c0-3.46-1.85-5.07-4.32-5.07-2 0-2.88 1.1-3.38 1.87h-.05V8.75H9.75c.04.9 0 11.75 0 11.75Z" />
    </svg>
  )
}

function toWhatsAppLink(phone, name) {
  const digits = String(phone || '').replace(/\D/g, '')
  if (!digits) return null
  const text = encodeURIComponent(
    `Hi ${name || 'there'}, I saw your portfolio and would like to connect.`,
  )
  return `https://wa.me/${digits}?text=${text}`
}

const container = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: -10, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 380, damping: 22 },
  },
}

export default function QuickContact({ profile }) {
  const whatsapp = toWhatsAppLink(profile?.phone, profile?.name)
  const email = profile?.email
  const linkedin = profile?.linkedin

  const actions = [
    whatsapp && {
      key: 'whatsapp',
      href: whatsapp,
      label: 'WhatsApp',
      className: 'qc-btn qc-whatsapp',
      icon: <WhatsAppIcon />,
      external: true,
    },
    email && {
      key: 'email',
      href: `mailto:${email}?subject=${encodeURIComponent('Project inquiry — Portfolio')}&body=${encodeURIComponent(`Hi ${profile?.name || ''},\n\nI would like to discuss a project.\n`)}`,
      label: 'Email',
      className: 'qc-btn qc-email',
      icon: <Mail size={17} strokeWidth={2.2} />,
      external: false,
    },
    linkedin && {
      key: 'linkedin',
      href: linkedin,
      label: 'LinkedIn',
      className: 'qc-btn qc-linkedin',
      icon: <LinkedInIcon />,
      external: true,
    },
  ].filter(Boolean)

  if (!actions.length) return null

  return (
    <motion.div
      className="quick-contact"
      variants={container}
      initial="hidden"
      animate="show"
      aria-label="Quick contact"
    >
      <motion.span className="qc-label" variants={item}>
        Instant contact
      </motion.span>
      {actions.map((action) => (
        <motion.a
          key={action.key}
          className={action.className}
          href={action.href}
          variants={item}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noreferrer' : undefined}
        >
          <span className="qc-icon">{action.icon}</span>
          <span className="qc-text">{action.label}</span>
        </motion.a>
      ))}
    </motion.div>
  )
}
