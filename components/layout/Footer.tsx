import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const footerLinks = {
  links: [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Courses', href: '/courses' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
  ],
  explore: [
    { name: 'News & Events', href: '/news' },
    { name: 'Our Team', href: '/team' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Branches', href: '/branches' },
    { name: 'GED Program', href: '/ged' },
  ],
  destinations: [
    { name: '🇬🇧 United Kingdom', href: '/destinations#uk' },
    { name: '🇦🇺 Australia', href: '/destinations#australia' },
    { name: '🇨🇦 Canada', href: '/destinations#canada' },
    { name: '🇺🇸 United States', href: '/destinations#usa' },
    { name: '🇩🇪 Germany', href: '/destinations#germany' },
    { name: '🇲🇾 Malaysia', href: '/destinations#malaysia' },
  ],
}

const socials = [
  { label: 'f', href: 'https://facebook.com/EdifyGroupPakistan', title: 'Facebook' },
  { label: '𝕏', href: 'https://twitter.com/EdifyGroup_', title: 'Twitter/X' },
  { label: '▶', href: 'https://youtube.com/@EDIFYGROUP', title: 'YouTube' },
  { label: 'in', href: 'https://linkedin.com/company/edify-group-of-companies', title: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f2444] text-[#b8c8e0]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <span style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-bold text-white">
              Edify<span className="text-[#e8b84b]">.</span> Group
            </span>
            <p className="text-sm leading-relaxed mt-4 mb-5 text-[#b8c8e0]/80 max-w-xs">
              Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socials.map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-sm font-medium hover:bg-[#e8b84b] hover:text-[#0f2444] transition-all duration-200">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[1.5px] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#b8c8e0]/80 hover:text-[#e8b84b] transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[1.5px] mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#b8c8e0]/80 hover:text-[#e8b84b] transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[1.5px] mb-4">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 text-sm">
                <Phone size={14} className="text-[#e8b84b] mt-0.5 flex-shrink-0" />
                <a href="tel:+923041111444" className="text-[#b8c8e0]/80 hover:text-[#e8b84b] transition-colors">+92 304 111 1444</a>
              </li>
              <li className="flex gap-2.5 text-sm">
                <Mail size={14} className="text-[#e8b84b] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@edify.pk" className="text-[#b8c8e0]/80 hover:text-[#e8b84b] transition-colors">info@edify.pk</a>
              </li>
              <li className="flex gap-2.5 text-sm">
                <MapPin size={14} className="text-[#e8b84b] mt-0.5 flex-shrink-0" />
                <span className="text-[#b8c8e0]/80">Edify Building, 3rd Floor, Madina Town, Faisalabad</span>
              </li>
              <li className="flex gap-2.5 text-sm">
                <Clock size={14} className="text-[#e8b84b] mt-0.5 flex-shrink-0" />
                <span className="text-[#b8c8e0]/80">Mon–Fri: 10:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Edify Group of Companies. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
