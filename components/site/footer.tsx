import { GITHUB_URL, footer, site } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/12 bg-charles-band text-white">
      <div className="container-main py-10 md:py-12">
        <div className="mb-8">
          <p className="font-heading mb-2 text-lg font-extrabold tracking-tight text-white">
            {site.name}
          </p>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-white/82">{footer.blurb}</p>
        </div>
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 font-heading text-xs font-bold uppercase tracking-wider text-white/82">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={`${GITHUB_URL}${link.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-white no-underline transition-colors hover:text-blue-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-on-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href={footer.bostonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-white no-underline transition-colors hover:text-blue-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-on-dark"
          >
            {footer.bostonLabel}
          </a>
        </div>
        <p className="border-t border-white/12 pt-6 font-sans text-sm text-white/82">{footer.credit}</p>
      </div>
    </footer>
  )
}
