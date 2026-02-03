function TemplateCards({
  title,
  children,
}: {
  title: string;

  children?: React.ReactNode;
}) {
  return (
    <div className="card bg-black border border-blue-500 h-[30dvh] lg:h-[60dvh] w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
      <h2 className="card-title text-xl font-bold text-center">{title}</h2>

      {children}
    </div>
  );
}

export default TemplateCards;
