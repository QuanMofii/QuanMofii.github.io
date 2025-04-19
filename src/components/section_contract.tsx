// components/sections/section_contract.tsx
import React from 'react';
import FishBody from './fish_body';

export default function SectionContract() {
  return (
    <section id="contract" className="h-screen w-full flex items-center justify-center bg-gray-500">
      {/* <h1 className="text-4xl font-bold">Contract Section</h1> */}
      <FishBody />
    </section>
  );
}
