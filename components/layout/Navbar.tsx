'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const destinations = [
  { name: '🇬🇧 United Kingdom', href: '/destinations#uk' },
  { name: '🇦🇺 Australia', href: '/destinations#australia' },
  { name: '🇨🇦 Canada', href: '/destinations#canada' },
  { name: '🇺🇸 United States', href: '/destinations#usa' },
  { name: '🇩🇪 Germany', href: '/destinations#germany' },
  { name: '🇲🇾 Malaysia', href: '/destinations#malaysia' },
]

const more = [
  { name: 'GED Program', href: '/ged' },
  { name: 'About Us', href: '/about' },
  { name: 'Branches', href: '/branches' },
  { name: 'Our Team', href: '/team' },
  { name: 'News & Events', href: '/news' },
  { name: 'Services', href: '/services' },
  { name: 'Partners', href: '/partners' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [destOpen, setDestOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDestOpen(false)
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#0f2444] text-[#b8c8e0] text-xs py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@edify.pk" className="flex items-center gap-1.5 hover:text-[#e8b84b] transition-colors">
              <Mail size={12} /><span>info@edify.pk</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Phone size={12} /><span>+92 304 111 1444</span>
            </span>
            <span>⏰ Mon–Fri: 10:30 AM – 6:30 PM</span>
          </div>
          <div className="flex items-center gap-4">
            {[
              { name: 'Facebook', url: 'https://facebook.com/EdifyGroupPakistan' },
              { name: 'Instagram', url: 'https://instagram.com/edifygroupofficial' },
              { name: 'LinkedIn', url: 'https://linkedin.com/company/edify-group-of-companies' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                className="hover:text-[#e8b84b] transition-colors">{s.name}</a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-[#dde2ed]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <span style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-bold text-[#1a3c6e]">
                Edify<span className="text-[#e8b84b]">.</span>
              </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${isActive('/') ? 'text-[#1a3c6e] bg-[#eef1f7]' : 'text-[#1a1a2e] hover:text-[#1a3c6e] hover:bg-[#f8f9fc]'}`}>Home</Link>
              <Link href="/courses" className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${isActive('/courses') ? 'text-[#1a3c6e] bg-[#eef1f7]' : 'text-[#1a1a2e] hover:text-[#1a3c6e] hover:bg-[#f8f9fc]'}`}>Courses</Link>
              <Link href="/blogs" className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${isActive('/blogs') ? 'text-[#1a3c6e] bg-[#eef1f7]' : 'text-[#1a1a2e] hover:text-[#1a3c6e] hover:bg-[#f8f9fc]'}`}>Blogs</Link>

              {/* DESTINATIONS DROPDOWN */}
              <div className="relative" onMouseEnter={() => setDestOpen(true)} onMouseLeave={() => setDestOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg text-[#1a1a2e] hover:text-[#1a3c6e] hover:bg-[#f8f9fc] transition-colors">
                  Destinations <ChevronDown size={14} className={`transition-transform ${destOpen ? 'rotate-180' : ''}`} />
                </button>
                {destOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-[#dde2ed] rounded-[12px] shadow-xl min-w-[200px] p-2 z-50">
                    {destinations.map(d => (
                      <Link key={d.href} href={d.href}
                        className="block px-3 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#f8f9fc] hover:text-[#1a3c6e] rounded-lg transition-colors">
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* MORE DROPDOWN */}
              <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg text-[#1a1a2e] hover:text-[#1a3c6e] hover:bg-[#f8f9fc] transition-colors">
                  More <ChevronDown size={14} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                {moreOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-[#dde2ed] rounded-[12px] shadow-xl min-w-[190px] p-2 z-50">
                    {more.map(m => (
                      <Link key={m.href} href={m.href}
                        className="block px-3 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#f8f9fc] hover:text-[#1a3c6e] rounded-lg transition-colors">
                        {m.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact"
                className="ml-2 bg-[#1a3c6e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0f2444] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* HAMBURGER */}
            <button className="lg:hidden p-2 text-[#1a1a2e]" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center px-6 py-5 border-b border-[#dde2ed]">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#1a3c6e]">
              Edify<span className="text-[#e8b84b]">.</span>
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={26} className="text-[#1a1a2e]" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: '/courses' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'Destinations', href: '/destinations' },
              { name: 'GED Program', href: '/ged' },
              { name: 'About Us', href: '/about' },
              { name: 'Branches', href: '/branches' },
              { name: 'Our Team', href: '/team' },
              { name: 'Services', href: '/services' },
              { name: 'Partners', href: '/partners' },
              { name: 'News & Events', href: '/news' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className={`text-base font-medium py-3.5 border-b border-[#dde2ed] transition-colors ${isActive(link.href) ? 'text-[#1a3c6e]' : 'text-[#1a1a2e]'}`}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact"
              className="mt-4 bg-[#1a3c6e] text-white font-semibold text-center py-3.5 rounded-xl">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
