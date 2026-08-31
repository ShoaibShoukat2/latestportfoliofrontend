import { Code2, Link2, Mail } from 'lucide-react'

const links = [
  { id: 'top', label: '01' },
  { id: 'about', label: '02' },
  { id: 'work', label: '03' },
  { id: 'agents', label: '04' },
  { id: 'path', label: '05' },
  { id: 'stack', label: '06' },
  { id: 'contact', label: '07' },
]

export default function NavRail({ active, profile }) {
  return (
    <>
      <aside className="nav-rail" aria-label="Section navigation">
        <a className="nav-mark" href="#top">
          SS / FS
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                aria-label={`Go to ${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-social">
          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 size={18} />
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Link2 size={18} />
            </a>
          )}
          {profile?.email && (
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          )}
        </div>
      </aside>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
