import History from "@/components/pages/about/history";
import { Metadata } from 'next';

export const metadata = {
  title: 'About Us | Our Organization',
  description: 'Learn about our history and mission in educational empowerment.',
};

const About = () => {
  return (
    <>
      <History />
    </>
  );
}

export default About;