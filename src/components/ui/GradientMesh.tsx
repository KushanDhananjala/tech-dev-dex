export default function GradientMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-40 h-96 w-96 rounded-full blur-3xl" style={{
        background: "radial-gradient(closest-side, rgba(0,245,212,0.25), transparent)",
      }} />
      <div className="absolute -bottom-32 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{
        background: "radial-gradient(closest-side, rgba(157,78,221,0.25), transparent)",
      }} />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-60" style={{
        background: "radial-gradient(closest-side, rgba(67,97,238,0.18), transparent)",
      }} />
    </div>
  );
}


