import { useEffect, useState } from 'react'
import { fetchPortfolio } from './api/client'
import useActiveSection from './hooks/useActiveSection'
import NavRail from './components/NavRail'
import QuickContact from './components/QuickContact'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Agents from './components/Agents'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [data, setData] = useState(null)
  const active = useActiveSection()

  useEffect(() => {
    let alive = true
    fetchPortfolio().then((payload) => {
      if (alive) setData(payload)
    })
    return () => {
      alive = false
    }
  }, [])

  if (!data) {
    return <div className="loader">Loading portfolio…</div>
  }

  return (
    <div className="app-shell">
      <NavRail active={active} profile={data.profile} />
      <QuickContact profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Work projects={data.projects} />
        <Agents projects={data.projects} />
        <Experience experience={data.experience} education={data.education} />
        <Skills skills={data.skills} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </div>
  )
}
