"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[oklch(0.09_0_0)] text-white">
      {/* Animated gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_280)] opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.55_0.22_320)] opacity-10 blur-[100px]" />
      </div>

      {/* Grid texture */}
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
      <nav className="relative z-10 flex items-center justify-between border-b border-white/5 px-6 py-4 backdrop-blur-sm md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <span className="text-base font-semibold">S2D</span>
          <span className="ml-2 text-xs text-white/30">/ Dashboard</span>
        </div>

        <button
          id="sign-out-btn"
          onClick={handleSignOut}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign Out
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-white/40">Welcome back! Start a new sketch or continue where you left off.</p>
        </div>

        {/* Upload Card */}
        <div className="mb-8">
          <label
            id="upload-area"
            htmlFor="sketch-upload"
            className="group relative flex cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.02] p-16 text-center transition-all duration-300 hover:border-[oklch(0.65_0.22_280)/50] hover:bg-white/[0.04]"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.55_0.22_280)] to-[oklch(0.55_0.22_320)] opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] shadow-xl shadow-purple-500/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>

            <div className="relative">
              <p className="text-lg font-semibold text-white">Upload your sketch</p>
              <p className="mt-1 text-sm text-white/40">
                Drag & drop or click to upload — PNG, JPG, or PDF
              </p>
            </div>

            <div className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.22_320)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-200 group-hover:scale-105">
              Choose File
            </div>

            <input id="sketch-upload" type="file" accept="image/*,.pdf" className="hidden" />
          </label>
        </div>

        {/* Recent Designs Grid */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent Designs</h2>
            <span className="text-sm text-white/30">0 designs</span>
          </div>

          {/* Empty state */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] py-20 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-white/50">No designs yet</p>
              <p className="mt-1 text-sm text-white/25">Upload a sketch to get started</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
