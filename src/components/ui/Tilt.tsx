import { CSSProperties, ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTiltDeg?: number; // default 8deg
};

export default function Tilt({ children, className, maxTiltDeg = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const tiltX = (py - 0.5) * -2 * maxTiltDeg;
    const tiltY = (px - 0.5) * 2 * maxTiltDeg;
    const style: CSSProperties = {
      transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    };
    el.style.transform = style.transform as string;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      className={className}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 200ms ease" }}
    >
      {children}
    </div>
  );
}


