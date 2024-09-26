import Hero from "@/components/pages/home/hero";
import Missions from "@/components/pages/home/missions";
import { Metadata } from 'next';

export const metadata = {
  title: 'Home | Our Organization',
  description: 'Welcome to our organization dedicated to educational empowerment.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Missions />
    </>
  );
}