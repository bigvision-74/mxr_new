import { Globe, MapPin, Tag, ArrowRight } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import event2 from '../assets/images/eventASPiH.png'

interface Event {
  id: number
  dateRange: string
  dayRange: string
  title: string
  eventName: string
  location: string
  website?: string
  websiteLabel?: string
  description: string
  image?: string
  past?: boolean
  registerUrl?: string
}

const events: Event[] = [
  {
    id: 1,
    dateRange: '3rd – 5th November 2024',
    dayRange: 'Sunday to Tuesday',
    title: 'Join MXR at the ASPiH Conference in Edinburgh!',
    eventName: 'ASPiH Conference 2024',
    location: 'Edinburgh International Conference Centre',
    website: 'https://aspihconference.co.uk',
    websiteLabel: 'aspihconference.co.uk',
    description:
      "We're excited to be part of the ASPiH Conference, which focuses on innovation in healthcare simulation. At the event, we'll be showcasing our AR overlay app in partnership with Simulation Collective, enhancing training mannequins with real-time anatomical visualisations. Come talk to us about how immersive technology, including AR and VR, can transform healthcare training.",
    image: event2, // <-- Added here
    past: true,
  },
]

const upcoming = events.filter(e => !e.past)
const past = events.filter(e => e.past)

function EventCard({ event }: { event: Event }) {
  return (
    <div className="event-card">
      {/* Date */}
      <div className="event-date">
        <p className="event-date-range">{event.dateRange}</p>
        <p className="event-date-day">{event.dayRange}</p>
        <span className={`event-date-badge ${event.past ? 'event-date-badge--past' : 'event-date-badge--upcoming'}`}>
          <Tag size={10} />
          {event.past ? 'Past' : 'Upcoming'}
        </span>
      </div>

      {/* Details */}
      <div className="event-details">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-meta">
          <span className="event-meta-row">
            <Tag size={14} />
            {event.eventName}
          </span>
          <span className="event-meta-row">
            <MapPin size={14} />
            {event.location}
          </span>
          {event.website && (
            <span className="event-meta-row">
              <Globe size={14} />
              <a href={event.website} target="_blank" rel="noopener noreferrer">
                {event.websiteLabel || event.website}
              </a>
            </span>
          )}
        </div>
        <p className="event-desc">{event.description}</p>
        {event.registerUrl && (
          <a href={event.registerUrl} className="event-cta" target="_blank" rel="noopener noreferrer">
            Register now <ArrowRight size={14} />
          </a>
        )}
      </div>

      {/* Image */}
      {event.image && (
        <div className="event-image">
          <img src={event.image} alt={event.eventName} />
        </div>
      )}
    </div>
  )
}

export default function EventsPage() {
  return (
    <main className="events-page">
      {/* Banner — same structure as Blog and Policies */}
      <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-copy">
          <p className="eyebrow">MXR EVENTS</p>
          <h1 className="banner-title banner-title--stacked">
            Tech events &amp; <em>industry insights</em>
          </h1>
          <p className="banner-lead">
            Stay ahead with our conferences, webinars, and networking opportunities. Meet the MXR team and discover what's next in XR and AI.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="events-section">
        <div className="events-section-label">
          <h2>Upcoming Events</h2>
        </div>
        <div className="events-list">
          {upcoming.length > 0
            ? upcoming.map(e => <EventCard key={e.id} event={e} />)
            : <p className="events-empty">No upcoming events at the moment — check back soon.</p>
          }
        </div>
      </section>

      {/* Past */}
      {past.length > 0 && (
        <section className="events-section events-section--past">
          <div className="events-section-label">
            <h2>Past Events</h2>
          </div>
          <div className="events-list">
            {past.map(e => <EventCard key={e.id} event={e} />)}
          </div>
        </section>
      )}
    </main>
  )
}