interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-[color:var(--void-main)] border border-border px-4 py-3 text-foreground focus:border-[#0094C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
      />
    </div>
  );
}
