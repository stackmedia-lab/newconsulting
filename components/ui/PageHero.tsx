interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb: { label: string; href?: string }[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #0f2444 0%, #1a3c6e 60%, #2a5298 100%)' }}>
      {/* pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-xl animate-fade-up delay-100">{subtitle}</p>
        )}
        <nav className="flex items-center gap-2 mt-4 text-sm text-white/60 animate-fade-up delay-200">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/30">/</span>}
              {item.href ? (
                <a href={item.href} className="text-[#e8b84b] hover:underline">{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
