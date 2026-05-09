import Link from 'next/link'

interface CTABannerProps {
  title: string
  subtitle: string
  btnText?: string
  btnHref?: string
}

export default function CTABanner({
  title,
  subtitle,
  btnText = 'Get Free Consultation →',
  btnHref = '/contact',
}: CTABannerProps) {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #e8b84b 0%, #c49a2a 100%)' }}
      className="py-20 text-center px-6"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-3xl md:text-4xl font-bold text-[#0f2444] mb-4"
        >
          {title}
        </h2>
        <p className="text-[#0f2444]/75 text-base md:text-lg mb-8 leading-relaxed">{subtitle}</p>
        <Link
          href={btnHref}
          className="inline-block bg-[#0f2444] text-white font-bold text-[15px] px-8 py-4 rounded-xl hover:bg-[#1a3c6e] transition-colors duration-200"
        >
          {btnText}
        </Link>
      </div>
    </section>
  )
}
