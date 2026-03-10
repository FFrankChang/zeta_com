export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-500 tracking-wide">
      {children}
    </span>
  );
}
