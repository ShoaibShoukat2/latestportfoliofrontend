import { motion } from 'framer-motion'

export default function Experience({ experience = [], education = [] }) {
  return (
    <section className="section" id="path">
      <div className="section-head">
        <span className="section-index">05 — Path</span>
        <h2>Experience with a spine.</h2>
        <p>Roles, outcomes, and the education underneath the craft.</p>
      </div>

      <div className="timeline">
        {experience.map((job, index) => (
          <motion.article
            className="timeline-item"
            key={`${job.company}-${job.role}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <div className="timeline-meta">
              <span>
                {job.start_date} — {job.end_date}
              </span>
              <span>{job.location}</span>
            </div>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p>{job.description}</p>
            {!!job.highlights?.length && (
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>

      <div className="edu-grid" style={{ marginTop: '2.5rem' }}>
        {education.map((ed) => (
          <article className="edu-item" key={`${ed.institution}-${ed.degree}`}>
            <span className="edu-years">
              {ed.start_year} — {ed.end_year}
            </span>
            <h3>{ed.degree}</h3>
            <h4>
              {ed.institution}
              {ed.field ? ` · ${ed.field}` : ''}
            </h4>
            {ed.details && <p>{ed.details}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
