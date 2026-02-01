function TemplateCards({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="card bg-black border border-blue-500 h-[35dvh] w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
      <h2 className="card-title text-xl font-bold text-center">{title}</h2>
      <p className="text-base-content/70 text-center mb-4">{description}</p>

      {children}
    </div>
  );
}

export default TemplateCards;
