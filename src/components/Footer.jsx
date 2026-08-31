export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>{profile?.name || 'Shoaib Shoukatha'}</strong>
          <div>{profile?.title || 'Full Stack Developer'}</div>
        </div>
        <div>© {year} · Built with React + Django</div>
      </div>
    </footer>
  )
}
