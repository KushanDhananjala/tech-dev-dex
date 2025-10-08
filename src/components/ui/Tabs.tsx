import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export type Tab = { label: string; href: string; icon?: ReactNode };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const router = useRouter();
  const isActive = (href: string) => router.asPath === href;

  return (
    <div className="mt-6 border-b border-slate-200 dark:border-slate-800">
      <nav className="-mb-px flex flex-wrap gap-2">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`px-3 py-2 rounded-full text-sm transition shadow-sm ${
              isActive(t.href)
                ? "bg-[#4361ee] text-white"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
            aria-current={isActive(t.href) ? "page" : undefined}
          >
            <span className="inline-flex items-center gap-2">
              {t.icon ? <span className="opacity-90">{t.icon}</span> : null}
              {t.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}


