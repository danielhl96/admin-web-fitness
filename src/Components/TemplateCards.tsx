// This is a reusable card component that can be used to display different sections of the dashboard.
// It accepts props for title and children. The component is styled with Tailwind CSS and has a glassmorphism effect.
function TemplateCards({
  title,
  children,
}: {
  title: string;

  children?: React.ReactNode;
}) {
  return (
    <div className="card bg-black border border-white/20 h-[30dvh] lg:h-[40dvh] w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
      <h2 className="card-title text-xl font-bold text-center">{title}</h2>

      {children}
    </div>
  );
}

export default TemplateCards;
