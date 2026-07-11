type Props = {
  label: string;
  sub?: string;
};

/** Quiet conversion prompt placed at the end of a content section. */
export default function InlineCta({ label, sub }: Props) {
  return (
    <div className="mt-12 flex flex-col gap-4 border border-line-gold/60 bg-panel/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[0.95rem] text-cream">
        {sub ?? "Two minute form, same day reply from a DLD licensed broker."}
      </p>
      <a
        href="#get-prices"
        className="group inline-flex shrink-0 items-center gap-3 text-[0.78rem] uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-bright"
      >
        {label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
