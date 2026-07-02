interface Props {
  label: string;
}

export function TechBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80 shadow-card">
      {label}
    </span>
  );
}
