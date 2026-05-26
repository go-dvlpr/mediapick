import { useState } from "react";
import { ArrowRight, Check, Mail, Menu, Send as SendIcon, X } from "lucide-react";
import {
  contactEmail,
  footerColumns,
  industries,
  navItems,
  processSteps,
  resultMetrics,
  services,
  telegramContacts,
} from "./content";

const mailSubject = encodeURIComponent("MediaPick growth inquiry");
const mailHref = `mailto:${contactEmail}?subject=${mailSubject}`;

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="MediaPick home">
      <span className="brand__symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand__text">
        Media<span>Pick</span>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--header" href="#contact">
          Start scaling
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen ? (
        <nav className="mobile-nav shell" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button" href="#contact" onClick={() => setMenuOpen(false)}>
            Start scaling
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="shell hero__content">
        <div className="hero__copy">
          <h1 id="hero-title">MediaPick grows performance campaigns.</h1>
          <p>
            Full-funnel media buying, lead generation, and affiliate marketing
            for companies that need qualified demand, lower CAC, and scalable
            revenue across every channel.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--coral" href="#contact">
              Start scaling <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href={mailHref}>
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section section--light" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-label">Services</span>
            <h2 id="services-title">End-to-end performance marketing built for growth.</h2>
          </div>
          <p>
            MediaPick combines acquisition strategy, creative testing, tracking,
            and partner management into one scalable growth engine.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon className="card-icon" size={36} strokeWidth={1.7} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={16} /> {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-link">
                  Build this channel <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section section--soft" id="industries" aria-labelledby="industries-title">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-label">Industries</span>
            <h2 id="industries-title">Deep expertise across high-growth markets.</h2>
          </div>
          <p>
            We adapt the media mix to each vertical: buyer intent, regulation,
            payout models, sales cycles, and quality thresholds.
          </p>
        </div>
        <div className="industry-grid" aria-label="Industries MediaPick serves">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="industry-card" key={industry.title}>
                <Icon size={34} strokeWidth={1.7} />
                <h3>{industry.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="section-heading section-heading--split section-heading--dark">
          <div>
            <span className="section-label">Process</span>
            <h2 id="process-title">A proven process. Predictable momentum.</h2>
          </div>
          <p>
            Every campaign moves through a repeatable operating rhythm: clear
            economics, fast launches, daily optimization, and disciplined scale.
          </p>
        </div>
        <div className="process-track">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="process-step" key={step.number}>
                <Icon size={38} strokeWidth={1.6} />
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="section section--light" id="results" aria-labelledby="results-title">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-label">Results</span>
            <h2 id="results-title">Performance teams care about numbers that compound.</h2>
          </div>
          <p>
            MediaPick is built for accountable growth: clean reporting, fast
            feedback loops, and acquisition decisions tied to business outcomes.
          </p>
        </div>
        <div className="metric-grid">
          {resultMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article className="metric" key={metric.label}>
                <Icon size={32} strokeWidth={1.7} />
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.description}</p>
              </article>
            );
          })}
        </div>
        <p className="disclaimer">
          Outcomes vary by offer, market, budget, compliance requirements, and
          conversion economics.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <span className="section-label">Contact</span>
          <h2 id="contact-title">Ready to scale smarter?</h2>
          <p>
            Send the brief, target market, current traffic mix, and acquisition
            goal. MediaPick will review the opportunity and map the clearest
            path to launch, optimize, or scale.
          </p>
          <div className="contact-points" aria-label="What to include in the email">
            <span>
              <Check size={16} /> Offer and target geos
            </span>
            <span>
              <Check size={16} /> Budget range and success metric
            </span>
            <span>
              <Check size={16} /> Current channels and constraints
            </span>
          </div>
        </div>
        <div className="email-cta-panel" aria-label="Contact MediaPick">
          <div className="email-cta-panel__intro">
            <span>Growth inquiry</span>
            <h3>Get a focused media plan.</h3>
            <p>
              Send your offer, market, and KPI. MediaPick will review the brief
              and reply with the strongest channel path and next steps.
            </p>
          </div>
          <div className="contact-methods">
            <a className="contact-method contact-method--email" href={mailHref}>
              <span className="contact-method__icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <span className="contact-method__copy">
                <small>Official growth inbox</small>
                <strong>{contactEmail}</strong>
              </span>
            </a>
            <div className="telegram-method" aria-label="MediaPick Telegram contacts">
              <span className="telegram-method__label">
                <SendIcon size={18} /> Telegram
              </span>
              <div className="telegram-links">
                {telegramContacts.map((contact) => (
                  <a href={contact.url} key={contact.handle} target="_blank" rel="noreferrer">
                    {contact.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="cta-proof-grid" aria-label="Inquiry focus areas">
            <span>
              <Check size={15} /> Media buying
            </span>
            <span>
              <Check size={15} /> Lead generation
            </span>
            <span>
              <Check size={15} /> Affiliation
            </span>
          </div>
          <a className="button button--coral email-cta-panel__button" href={mailHref}>
            Send growth brief <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <BrandMark />
          <p>Performance marketing that scales. Partners in your growth.</p>
        </div>
        {footerColumns.map((column) => (
          <div className="footer__column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a key={link} href="#contact">
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="footer__legal">
          <p>© 2026 MediaPick. All rights reserved.</p>
          <a href={mailHref}>{contactEmail}</a>
          {telegramContacts.map((contact) => (
            <a href={contact.url} key={contact.handle} target="_blank" rel="noreferrer">
              {contact.handle}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
