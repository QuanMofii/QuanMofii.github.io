interface SectionProps {
  id: string;
}

export default function SectionWelcome({ id }: SectionProps) {
  return (
    <section id={id} className="h-screen w-full flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome Section</h1>
    </section>
  );
}
