import { motion } from 'framer-motion'
import { ArrowDownRight, FileText } from 'lucide-react'

const ribbon = [
  'React',
  'Django',
  'PostgreSQL',
  'REST APIs',
  'TypeScript',
  'Docker',
  'System Design',
  'Product Engineering',
]

export default function Hero({ profile }) {
  const first = profile?.name?.split(' ')[0] || 'Shoaib'
  const rest = profile?.name?.split(' ').slice(1).join(' ') || 'Shoukat'

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile?.title || 'Full Stack Developer'} · Tap WhatsApp / Email above
        </motion.p>

        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          {first}
          <br />
          {rest}
        </motion.h1>

        <div className="hero-row">
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            {profile?.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <a className="btn btn-primary" href="#work">
              View selected work <ArrowDownRight size={18} />
            </a>
            {profile?.resume_url && (
              <a className="btn btn-ghost" href={profile.resume_url} target="_blank" rel="noreferrer">
                <FileText size={16} /> Resume
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <div className="hero-ribbon" aria-hidden="true">
        <div className="hero-ribbon-track">
          {[...ribbon, ...ribbon].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  )
}
