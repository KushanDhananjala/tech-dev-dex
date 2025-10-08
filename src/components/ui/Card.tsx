import { ReactNode } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
};

export default function Card({ title, description, href, icon }: CardProps) {
  const content = (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        {icon ? <div className="text-blue-600">{icon}</div> : null}
        <div>
          <h3 className="text-lg font-semibold group-hover:text-blue-700">{title}</h3>
          {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


