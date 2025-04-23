// 'use server'
'use client'
import SectionWelcome from '@/components/section_welcome';
import SectionInformation from '@/components/section_information';
import SectionExperience from '@/components/section_experience';
import SectionProject from '@/components/section_project';
import SectionContract from '@/components/section_contract';
import Navigation from '@/components/navigation';
import AudioPlayer from '@/components/music_player'



export default function Home() {
  return (
    <main className="bg-stone-100 text-black relative gap-80 flex flex-col w-full max-w-screen min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-50">
        <AudioPlayer src={"/welcome/music.mp3"} songTitle={"thap drill tu do - nghiem tong prod. gaz"} songImage={"/welcome/music.png"} />
      </div>
      <Navigation />
      <SectionWelcome />
      <SectionInformation />
      <SectionExperience />
      <SectionProject />
      <SectionContract />
      
    </main>
  );
}