export const metadata = {
  title: "Styleguide — AbleSpace",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 border-b border-[var(--color-border)] last:border-b-0">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
        {title}
      </p>
      {children}
    </section>
  );
}

function Swatch({ name, variable, hex }: { name: string; variable: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-14 w-full rounded-[var(--radius-md)] border border-black/[0.06]"
        style={{ background: hex }}
      />
      <div>
        <p className="text-sm font-medium text-[var(--color-text)]">{name}</p>
        <p className="text-xs text-[var(--color-text-muted)] font-mono">{hex}</p>
      </div>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
          Design System
        </p>
        <h1
          className="text-5xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          AbleSpace Styleguide
        </h1>
        <p className="mt-3 text-lg text-[var(--color-text-muted)]">
          Visual reference for colors, typography, spacing, and components.
        </p>
      </div>

      {/* ── Colors: Primary ── */}
      <Section title="Colors — Primary (Violet)">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
          <Swatch name="50"  variable="--color-primary-50"  hex="#f3f0ff" />
          <Swatch name="100" variable="--color-primary-100" hex="#e9e3ff" />
          <Swatch name="200" variable="--color-primary-200" hex="#d4caff" />
          <Swatch name="300" variable="--color-primary-300" hex="#b39dff" />
          <Swatch name="400" variable="--color-primary-400" hex="#8f6bff" />
          <Swatch name="500" variable="--color-primary-500" hex="#6d40f5" />
          <Swatch name="600" variable="--color-primary-600" hex="#5a28e8" />
          <Swatch name="700" variable="--color-primary-700" hex="#4a1ecc" />
          <Swatch name="800" variable="--color-primary-800" hex="#3c1aa6" />
          <Swatch name="900" variable="--color-primary-900" hex="#2e1480" />
        </div>
      </Section>

      {/* ── Colors: Accent ── */}
      <Section title="Colors — Accent (Amber)">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
          <Swatch name="50"  variable="--color-accent-50"  hex="#fffbeb" />
          <Swatch name="100" variable="--color-accent-100" hex="#fef3c7" />
          <Swatch name="200" variable="--color-accent-200" hex="#fde68a" />
          <Swatch name="300" variable="--color-accent-300" hex="#fcd34d" />
          <Swatch name="400" variable="--color-accent-400" hex="#fbbf24" />
          <Swatch name="500" variable="--color-accent-500" hex="#f59e0b" />
          <Swatch name="600" variable="--color-accent-600" hex="#d97706" />
          <Swatch name="700" variable="--color-accent-700" hex="#b45309" />
          <Swatch name="800" variable="--color-accent-800" hex="#92400e" />
          <Swatch name="900" variable="--color-accent-900" hex="#78350f" />
        </div>
      </Section>

      {/* ── Colors: Neutral ── */}
      <Section title="Colors — Neutral (Warm)">
        <div className="grid grid-cols-5 sm:grid-cols-11 gap-3">
          <Swatch name="0"   variable="--color-neutral-0"   hex="#ffffff" />
          <Swatch name="50"  variable="--color-neutral-50"  hex="#faf9f7" />
          <Swatch name="100" variable="--color-neutral-100" hex="#f3f1ee" />
          <Swatch name="200" variable="--color-neutral-200" hex="#e8e4df" />
          <Swatch name="300" variable="--color-neutral-300" hex="#d6d0c9" />
          <Swatch name="400" variable="--color-neutral-400" hex="#b8b0a6" />
          <Swatch name="500" variable="--color-neutral-500" hex="#96907e" />
          <Swatch name="600" variable="--color-neutral-600" hex="#6b6558" />
          <Swatch name="700" variable="--color-neutral-700" hex="#4a453c" />
          <Swatch name="800" variable="--color-neutral-800" hex="#2e2b25" />
          <Swatch name="900" variable="--color-neutral-900" hex="#1a1814" />
        </div>
      </Section>

      {/* ── Colors: Semantic ── */}
      <Section title="Colors — Semantic">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Swatch name="Success" variable="--color-success" hex="#1a7a3c" />
          <Swatch name="Warning" variable="--color-warning" hex="#b45309" />
          <Swatch name="Error"   variable="--color-error"   hex="#b91c1c" />
          <Swatch name="Info"    variable="--color-info"    hex="#1d4ed8" />
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section title="Typography">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-5">
              Headings — <span className="font-mono">Geologica</span>
            </p>
            <div className="flex flex-col gap-6">
              {[
                { label: "Display / 56px", size: "text-[56px]", weight: "font-bold", leading: "leading-none" },
                { label: "H1 / 40px",      size: "text-[40px]", weight: "font-bold", leading: "leading-tight" },
                { label: "H2 / 32px",      size: "text-[32px]", weight: "font-semibold", leading: "leading-tight" },
                { label: "H3 / 24px",      size: "text-[24px]", weight: "font-semibold", leading: "leading-snug" },
                { label: "H4 / 20px",      size: "text-[20px]", weight: "font-medium", leading: "leading-snug" },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline gap-6">
                  <span className="w-28 shrink-0 text-xs text-[var(--color-text-muted)]">{t.label}</span>
                  <p
                    className={`${t.size} ${t.weight} ${t.leading} text-[var(--color-text)]`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    AbleSpace
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-5">
              Body — <span className="font-mono">Inter</span>
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Lead / 18px",  cls: "text-lg text-[var(--color-text)]" },
                { label: "Body / 16px",  cls: "text-base text-[var(--color-text)]" },
                { label: "Small / 14px", cls: "text-sm text-[var(--color-text)]" },
                { label: "Muted",        cls: "text-base text-[var(--color-text-muted)]" },
                { label: "Mono / 14px",  cls: "text-sm font-mono text-[var(--color-text)]" },
                { label: "Label",        cls: "text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]" },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline gap-6">
                  <span className="w-28 shrink-0 text-xs text-[var(--color-text-muted)]">{t.label}</span>
                  <p className={t.cls}>
                    {t.label === "Mono / 14px"
                      ? 'const space = "able";'
                      : "The quick brown fox jumps over the lazy dog."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Buttons ── */}
      <Section title="Buttons">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">Variants</p>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white text-sm font-medium hover:bg-[var(--color-primary-600)] transition-colors">
                Primary
              </button>
              <button className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-accent-500)] text-white text-sm font-medium hover:bg-[var(--color-accent-600)] transition-colors">
                Accent
              </button>
              <button className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-neutral-900)] text-white text-sm font-medium hover:bg-[var(--color-neutral-700)] transition-colors">
                Dark
              </button>
              <button className="px-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-neutral-50)] transition-colors">
                Outline
              </button>
              <button className="px-4 py-2 rounded-[var(--radius-md)] text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-neutral-100)] transition-colors">
                Ghost
              </button>
              <button className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-error)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Destructive
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">Sizes</p>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--color-primary-500)] text-white text-xs font-medium">
                XSmall
              </button>
              <button className="px-3.5 py-2 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white text-sm font-medium">
                Small
              </button>
              <button className="px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white text-sm font-medium">
                Medium
              </button>
              <button className="px-5 py-3 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white text-base font-medium">
                Large
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">States</p>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white text-sm font-medium">
                Default
              </button>
              <button className="px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-primary-600)] text-white text-sm font-medium ring-2 ring-[var(--color-primary-300)] ring-offset-1">
                Focused
              </button>
              <button disabled className="px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-neutral-200)] text-[var(--color-neutral-400)] text-sm font-medium cursor-not-allowed">
                Disabled
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Form Elements ── */}
      <Section title="Form Elements">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text)]">Text Input</label>
            <input
              type="text"
              placeholder="Placeholder text"
              className="px-3 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-sm bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)] focus:border-[var(--color-primary-500)] transition-shadow"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text)]">Error State</label>
            <input
              type="text"
              defaultValue="Invalid value"
              className="px-3 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-error)] text-sm bg-white text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            <p className="text-xs text-[var(--color-error)]">This field is required.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text)]">Textarea</label>
            <textarea
              placeholder="Write something..."
              rows={3}
              className="px-3 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-sm bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)] focus:border-[var(--color-primary-500)] resize-none transition-shadow"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text)]">Select</label>
            <select className="px-3 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-sm bg-white text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)] focus:border-[var(--color-primary-500)] transition-shadow appearance-none">
              <option>Option one</option>
              <option>Option two</option>
              <option>Option three</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-[var(--color-text)]">Checkbox</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[var(--color-primary-500)] w-4 h-4" />
                Checked
              </label>
              <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer">
                <input type="checkbox" className="accent-[var(--color-primary-500)] w-4 h-4" />
                Unchecked
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-[var(--color-text)]">Radio</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer">
                <input type="radio" name="demo" defaultChecked className="accent-[var(--color-primary-500)] w-4 h-4" />
                Selected
              </label>
              <label className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer">
                <input type="radio" name="demo" className="accent-[var(--color-primary-500)] w-4 h-4" />
                Not selected
              </label>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Badges ── */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-700)]">Primary</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-accent-100)] text-[var(--color-accent-700)]">Accent</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]">Neutral</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-green-100 text-green-800">Success</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-amber-100 text-amber-800">Warning</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-red-100 text-red-800">Error</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-full)] text-xs font-medium bg-blue-100 text-blue-800">Info</span>
        </div>
      </Section>

      {/* ── Spacing ── */}
      <Section title="Spacing Scale">
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24].map((size) => (
            <div key={size} className="flex items-center gap-4">
              <span className="w-12 text-xs font-mono text-[var(--color-text-muted)] text-right">{size * 4}px</span>
              <div
                className="h-5 bg-[var(--color-primary-300)] rounded-[2px]"
                style={{ width: size * 4 }}
              />
              <span className="text-xs text-[var(--color-text-muted)]">space-{size}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Border Radius ── */}
      <Section title="Border Radius">
        <div className="flex flex-wrap gap-10 items-end">
          {[
            { name: "sm",   value: "4px",      cls: "rounded-[4px]" },
            { name: "md",   value: "8px",       cls: "rounded-[8px]" },
            { name: "lg",   value: "12px",      cls: "rounded-[12px]" },
            { name: "xl",   value: "16px",      cls: "rounded-[16px]" },
            { name: "full", value: "9999px",    cls: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div className={`w-16 h-16 bg-[var(--color-primary-100)] border-2 border-[var(--color-primary-300)] ${r.cls}`} />
              <div className="text-center">
                <p className="text-xs font-mono text-[var(--color-text)]">{r.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Shadows ── */}
      <Section title="Shadows">
        <div className="flex flex-wrap gap-10 items-end">
          {[
            { name: "sm", style: "0 1px 2px 0 rgb(0 0 0 / 0.04)" },
            { name: "md", style: "0 4px 8px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)" },
            { name: "lg", style: "0 12px 24px -4px rgb(0 0 0 / 0.08), 0 4px 8px -4px rgb(0 0 0 / 0.04)" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-4">
              <div
                className="w-24 h-24 bg-white rounded-[var(--radius-md)]"
                style={{ boxShadow: s.style }}
              />
              <p className="text-xs font-mono text-[var(--color-text-muted)]">shadow-{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

    </main>
  );
}
