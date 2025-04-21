export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900">
      {children}
    </div>
  );
} 