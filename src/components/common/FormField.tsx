interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-[color:var(--void-main)] border border-border px-4 py-3 text-foreground focus:border-signal focus:outline-none transition-colors"
      />
    </div>
  );
}
