import CoverSection from "./(home)/_sections/CoverSection";
import BioSection from "./(home)/_sections/BioSection";
import StackSection from "./(home)/_sections/StackSection";
import TimelineSection from "./(home)/_sections/TimelineSection";
import WorksSection from "./(home)/_sections/WorksSection";

export default function Home() {
  return (
    <main>
      <CoverSection />
      <BioSection />
      <StackSection />
      <TimelineSection />
      <WorksSection />
    </main>
  );
}
