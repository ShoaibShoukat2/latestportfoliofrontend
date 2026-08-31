import { motion } from 'framer-motion'

export default function About({ profile }) {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="section-index">02 — Profile</span>
        <h2>Full stack products people actually use.</h2>
        <p>
          From live medical consults to boat bookings and AI agents — APIs,
          data models, and interfaces built as one product.
        </p>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-story"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p>{profile?.about}</p>
          <p>
            I care about clarity in code, calm in UX, and systems that stay
            maintainable after launch day. Prefer collaboration with founders and
            product teams who value craft over vanity metrics.
          </p>
        </motion.div>

        <motion.div
          className="about-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="stat-strip">
            <div className="stat">
              <strong>{profile?.years_experience || 5}+</strong>
              <span>Years building products</span>
            </div>
            <div className="stat">
              <strong>{profile?.projects_delivered || 40}+</strong>
              <span>Projects delivered</span>
            </div>
          </div>

          <ul className="meta-list">
            <li>
              <small>Based</small>
              <span>{profile?.location}</span>
            </li>
            <li>
              <small>Focus</small>
              <span>React · Django · Product systems</span>
            </li>
            <li>
              <small>Open to</small>
              <span>Full-time · Contract · Remote</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
