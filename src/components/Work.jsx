import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'medical', label: 'Medical' },
  { key: 'travel', label: 'Travel' },
  { key: 'booking', label: 'Booking' },
  { key: 'ai', label: 'AI Agents' },
]

const CATEGORY_LABEL = {
  medical: 'Medical',
  travel: 'Travel',
  booking: 'Booking',
  ai: 'AI Agents',
  other: 'Product',
}

export default function Work({ projects = [] }) {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [projects, filter])

  return (
    <section className="section" id="work">
      <div className="section-head section-head-wide">
        <span className="section-index">03 — Selected work</span>
        <h2>Products with real impact.</h2>
        <p>
          Telehealth consulting, Smagua Travels boat booking, agency ticket & hotel
          systems, and AI agents — shipped as full-stack experiences.
        </p>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filter projects">
        {FILTERS.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={filter === item.key}
            className={`filter-btn ${filter === item.key ? 'active' : ''}`}
            onClick={() => setFilter(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="work-stack">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              className="case"
              key={project.slug || project.title}
              layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div
                className="case-visual"
                style={{
                  backgroundColor: project.accent || '#0F766E',
                  backgroundImage: project.image_url
                    ? `linear-gradient(145deg, rgba(11,18,32,0.25), rgba(11,18,32,0.72)), url(${project.image_url})`
                    : undefined,
                }}
              >
                <div className="case-visual-top">
                  <span className="case-year">{project.year || '—'}</span>
                  <span className="case-cat">
                    {CATEGORY_LABEL[project.category] || 'Product'}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="case-visual-summary">{project.summary}</p>
              </div>
              <div className="case-body">
                <p>{project.description || project.summary}</p>
                <div className="stack-row">
                  {(project.stack || []).map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="feature-list">
                  {(project.features || []).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="case-links">
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                  {project.repo_url && (
                    <a href={project.repo_url} target="_blank" rel="noreferrer">
                      <Code2 size={15} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
