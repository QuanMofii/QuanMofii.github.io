// 'use server'
'use client'
import SectionWelcome from '@/components/section_welcome';
import SectionInfor from '@/components/section_infor';
import SectionExperience from '@/components/section_experience';
import SectionProject from '@/components/section_project';
import SectionContract from '@/components/section_contract';
import Navigation from '@/components/navigation';
import AudioPlayer from '@/components/music_player'


export default async function Home() {
  return (
    <main className="bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-full z-50">
        <AudioPlayer src={"/welcome/music.mp3"} songTitle={"thap drill tu do - nghiem tong prod. gaz"} songImage={"/welcome/music.png"} />
        </div>
      <Navigation />
      <SectionWelcome />
      <SectionInfor />
      <SectionExperience />
      <SectionProject />
      <SectionContract />
  
    </main>
  );
}