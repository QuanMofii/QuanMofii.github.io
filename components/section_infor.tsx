interface SectionProps {
  id: string;
}

export default function SectionInfor({ id }: SectionProps) {
  return (
    <section id={id} className="h-screen w-full flex items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">Information Section</h1>
    </section>
  );
}
