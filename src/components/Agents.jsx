import { motion } from 'framer-motion'
import { Bot, Stethoscope, Plane } from 'lucide-react'

const ICONS = {
  careassist: Stethoscope,
  voyage: Plane,
  aether: Bot,
}

function pickIcon(slug = '') {
  if (slug.includes('care')) return ICONS.careassist
  if (slug.includes('voyage') || slug.includes('concierge')) return ICONS.voyage
  return ICONS.aether
}

export default function Agents({ projects = [] }) {
  const agents = projects.filter((p) => p.category === 'ai')

  if (!agents.length) return null

  return (
    <section className="section" id="agents">
      <div className="section-head section-head-wide">
        <span className="section-index">04 — AI agents</span>
        <h2>Agents that do real work.</h2>
        <p>
          Visual AI systems for telehealth intake, travel planning, and ops —
          each with a clear job and a product face.
        </p>
      </div>

      <div className="agents-grid">
        {agents.map((agent, index) => {
          const Icon = pickIcon(agent.slug)
          return (
            <motion.article
              className="agent-card"
              key={agent.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div
                className="agent-media"
                style={{
                  backgroundImage: agent.image_url
                    ? `linear-gradient(180deg, rgba(11,18,32,0.1), rgba(11,18,32,0.78)), url(${agent.image_url})`
                    : undefined,
                  backgroundColor: agent.accent || '#0F766E',
                }}
              >
                <span className="agent-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{agent.title}</h3>
              </div>
              <div className="agent-body">
                <p>{agent.summary}</p>
                <ul>
                  {(agent.features || []).slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
