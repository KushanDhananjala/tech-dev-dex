const items = [
  { label: "Docker", color: "#0db7ed" },
  { label: "GitHub", color: "#ffffff" },
  { label: "React", color: "#61dafb" },
  { label: "Node.js", color: "#83cd29" },
  { label: "Python", color: "#3776AB" },
  { label: "AI", color: "#00f5d4" },
  { label: "Next.js", color: "#ffffff" },
  { label: "TailwindCSS", color: "#38bdf8" },
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden w-full group">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent" />
      <div className="flex gap-4 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap py-3 text-sm">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200"
            style={{ boxShadow: `0 0 16px ${it.color}33` }}
          >
            {it.label}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


