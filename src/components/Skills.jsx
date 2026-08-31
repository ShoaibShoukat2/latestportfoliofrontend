import { motion } from 'framer-motion'

const labels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Data',
  devops: 'DevOps',
  tools: 'Tools',
}

const order = ['frontend', 'backend', 'database', 'devops', 'tools']

export default function Skills({ skills = [] }) {
  const grouped = order
    .map((key) => ({
      key,
      label: labels[key],
      items: skills.filter((s) => s.category === key),
    }))
    .filter((g) => g.items.length)

  return (
    <section className="section" id="stack">
      <div className="section-head">
        <span className="section-index">06 — Capability</span>
        <h2>Stack depth, not logo soup.</h2>
        <p>Proficiency across the layers I actually ship in production.</p>
      </div>

      <div className="skills-board">
        {grouped.map((group, gi) => (
          <motion.div
            className="skill-group"
            key={group.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: gi * 0.05 }}
          >
            <h3>{group.label}</h3>
            <div className="skill-rows">
              {group.items.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <span>{skill.name}</span>
                  <div className="meter" aria-hidden="true">
                    <motion.i
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <span>{skill.level}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
