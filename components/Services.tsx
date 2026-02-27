import { services } from "@/data/siteData";

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
      <p className="text-sm uppercase tracking-[0.4em] text-brand-muted">Services</p>
      <h3 className="font-heading text-5xl uppercase">Premium Packages</h3>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/10 bg-brand-surface/70 p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-glow"
          >
            <h4 className="font-heading text-4xl uppercase leading-none">{service.title}</h4>
            <p className="mt-3 text-lg text-brand-red">{service.price}</p>
            <ul className="mt-5 space-y-3 text-brand-muted">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-red" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
