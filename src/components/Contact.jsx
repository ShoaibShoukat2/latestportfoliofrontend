import { useState } from 'react'
import { sendContact } from '../api/client'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact({ profile }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus({ type: '', text: '' })
    try {
      const res = await sendContact(form)
      setStatus({ type: 'ok', text: res.message || 'Message sent.' })
      setForm(initial)
    } catch (err) {
      setStatus({
        type: 'err',
        text: err.message || 'Could not reach the API. Is Django running?',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section-head">
        <span className="section-index">07 — Contact</span>
        <h2>Let’s build the next system.</h2>
        <p>Tell me about the product, timeline, and stack constraints.</p>
      </div>

      <div className="contact-grid">
        <aside className="contact-aside">
          <h3>Direct lines</h3>
          <p>
            Prefer email for briefs. Happy to hop on a call once scope is clear.
          </p>
          <div className="contact-links">
            {profile?.email && (
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            )}
            {profile?.phone && <a href={`tel:${profile.phone}`}>{profile.phone}</a>}
            {profile?.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {profile?.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </aside>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
              placeholder="you@company.com"
            />
          </label>
          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              required
              placeholder="Project or role"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              placeholder="Goals, stack, timeline…"
            />
          </label>
          <button className="btn btn-ink" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>
          {status.text && (
            <p className={`form-status ${status.type}`}>{status.text}</p>
          )}
        </form>
      </div>
    </section>
  )
}
