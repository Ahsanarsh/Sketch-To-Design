import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[oklch(0.09_0_0)] text-white">
      {/* Animated gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_280)] opacity-20 blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-[oklch(0.55_0.22_200)] opacity-15 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_320)] opacity-10 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 3%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-16">
        <div className="flex items-center gap-2">
          {/* Logo icon */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">S2D</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/sign-in"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-in"
            className="rounded-lg bg-gradient-to-r from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:scale-105 hover:shadow-purple-500/40"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-24 pt-20 text-center md:pt-32">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.65_0.22_280)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.65_0.22_280)]" />
          </span>
          AI-Powered Design Transformation
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Turn Sketches into{" "}
          <span className="bg-gradient-to-r from-[oklch(0.75_0.18_280)] via-[oklch(0.7_0.22_300)] to-[oklch(0.65_0.22_320)] bg-clip-text text-transparent">
            Stunning Designs
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-white/50 md:text-xl">
          Upload your hand-drawn sketches and let AI transform them into
          beautiful, production-ready UI designs in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/auth/sign-in"
            id="hero-cta-primary"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
          >
            <span>Start Designing Free</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <a
            href="#features"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
          >
            See How It Works
          </a>
        </div>

        {/* Hero visual — mockup card */}
        <div className="relative mt-20 w-full max-w-4xl">
          {/* Glow behind card */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.22_280)] to-[oklch(0.55_0.22_320)] opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-white/30">
                sketch-to-design.app
              </span>
            </div>
            <div className="grid min-h-[280px] grid-cols-2 gap-0">
              {/* Left: sketch */}
              <div className="flex flex-col items-center justify-center gap-4 border-r border-white/10 p-8">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Sketch Input
                </p>
                <div className="relative h-40 w-full rounded-xl border-2 border-dashed border-white/10 bg-white/3 p-4">
                  <svg
                    className="h-full w-full opacity-30"
                    viewBox="0 0 200 140"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="10" y="10" width="180" height="30" rx="4" />
                    <rect x="10" y="50" width="85" height="80" rx="4" />
                    <rect x="105" y="50" width="85" height="35" rx="4" />
                    <rect x="105" y="95" width="40" height="35" rx="4" />
                    <rect x="150" y="95" width="40" height="35" rx="4" />
                    <line x1="20" y1="25" x2="60" y2="25" />
                    <circle cx="170" cy="25" r="8" />
                  </svg>
                </div>
              </div>
              {/* Right: result */}
              <div className="flex flex-col items-center justify-center gap-4 p-8">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  AI Output
                </p>
                <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[oklch(0.18_0_0)] to-[oklch(0.14_0_0)] p-3 shadow-inner">
                  {/* Mini UI mockup */}
                  <div className="mb-2 h-6 w-full rounded-md bg-gradient-to-r from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] opacity-90" />
                  <div className="grid grid-cols-5 gap-1.5">
                    <div className="col-span-3 row-span-2 h-28 rounded-md bg-white/8" />
                    <div className="col-span-2 h-[52px] rounded-md bg-white/5" />
                    <div className="col-span-2 h-[52px] rounded-md bg-gradient-to-br from-[oklch(0.65_0.22_280)/50] to-[oklch(0.55_0.22_320)/50]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] px-6 py-8 backdrop-blur-sm">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "10x", label: "Faster Design" },
            { value: "50K+", label: "Designs Created" },
            { value: "99%", label: "Accuracy Rate" },
            { value: "< 5s", label: "Generation Time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[oklch(0.65_0.22_280)]">
              Features
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Everything you need to design faster
            </h2>
            <p className="mt-4 text-white/40">
              From rough sketches to polished UI — all in one place.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  </svg>
                ),
                title: "Sketch Recognition",
                desc: "Our AI understands hand-drawn wireframes and converts them with high fidelity.",
                gradient:
                  "from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_300)]",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
                title: "Component Export",
                desc: "Export clean, production-ready HTML, CSS, and React components instantly.",
                gradient:
                  "from-[oklch(0.55_0.22_200)] to-[oklch(0.55_0.22_240)]",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                ),
                title: "Theme Generation",
                desc: "Automatically generate a full color theme and typography system from your sketch.",
                gradient: "from-[oklch(0.55_0.22_320)] to-[oklch(0.65_0.18_0)]",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: "Instant Preview",
                desc: "See a live preview of your design as it's being generated in real time.",
                gradient: "from-[oklch(0.65_0.22_60)] to-[oklch(0.55_0.22_30)]",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                ),
                title: "Responsive Layouts",
                desc: "Designs auto-adapt for desktop, tablet, and mobile — zero extra effort.",
                gradient:
                  "from-[oklch(0.55_0.22_160)] to-[oklch(0.55_0.22_200)]",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Team Collaboration",
                desc: "Share designs with your team, leave comments, and iterate together.",
                gradient:
                  "from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_200)]",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pb-32 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[oklch(0.55_0.22_280)/20] to-[oklch(0.55_0.22_320)/10] p-12 backdrop-blur-md">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-[oklch(0.55_0.22_280)] to-[oklch(0.55_0.22_320)] opacity-5"
            />
            <h2 className="relative mb-4 text-4xl font-bold">
              Ready to transform your sketches?
            </h2>
            <p className="relative mb-8 text-white/50">
              Join thousands of designers using S2D to ship faster.
            </p>
            <Link
              href="/auth/sign-in"
              id="bottom-cta"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              Get Started for Free
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-6 text-center text-sm text-white/25">
        © {new Date().getFullYear()} Sketch To Design. All rights reserved.
      </footer>
    </main>
  );
}
