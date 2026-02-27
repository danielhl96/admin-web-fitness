function TemplateModal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-gradient-to-b from-gray-900 to-black backdrop-blur border border-white/20 p-6 rounded-lg max-w-md w-auto mx-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default TemplateModal;
