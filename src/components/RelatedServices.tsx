import { ArrowRight } from 'lucide-react'

const services = [
  { href: '/xr-development', title: 'XR Development' },
  { href: '/immersive-rooms', title: 'Immersive Rooms' },
  { href: '/ai-solutions', title: 'AI Solutions' },
  { href: '/platform-development', title: 'Platform Development' },
]

export default function RelatedServices() {
  return (
    <section className="section service-related">
      <p className="eyebrow">{'CONNECTED CAPABILITIES'}</p>
      <h2>{'Explore our other services.'}</h2>
      <div>
        {services.map(s => (
          <a key={s.href} href={s.href}>
            {s.title}
            <span><ArrowRight aria-hidden="true" size={18} /></span>
          </a>
        ))}
      </div>
    </section>
  )
}
