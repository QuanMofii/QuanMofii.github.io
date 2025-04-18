interface SectionProps {
  id: string;
}

export default function SectionExperience({ id }: SectionProps) {
  return (
    <section id={id} className="h-screen w-full flex items-center justify-center bg-gray-300">
      <h1 className="text-4xl font-bold">Experience Section</h1>
    </section>
  );
}
