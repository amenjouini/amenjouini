import { countries } from "@/data/portfolio";

function FlagRow({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {countries.map((country) => (
        <li key={country.code} className="flex items-center gap-3.5 px-6 md:px-9">
          <img
            src={`/flags/${country.code}.svg`}
            alt=""
            width={36}
            height={24}
            loading="lazy"
            className="h-6 w-9 rounded-[3px] object-cover ring-1 ring-ink/15"
          />
          <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight md:text-2xl">
            {country.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Endless strip of the countries reached. Pauses on hover; the list is duplicated for a seamless loop.
export function CountryMarquee() {
  return (
    <div className="border-b">
      <div className="container flex items-center gap-6 py-5 md:py-6">
        <p className="eyebrow hidden shrink-0 items-center gap-3 sm:flex">
          <span className="text-signal-deep">{countries.length}</span>
          Countries reached
        </p>
        <div className="marquee min-w-0 flex-1 overflow-hidden" role="group" aria-label="Countries reached">
          <div className="marquee-track flex w-max">
            <FlagRow />
            <FlagRow hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
