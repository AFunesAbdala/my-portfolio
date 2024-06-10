import AboutMeComponent from "@/components/about";
import ContactComponent from "@/components/contact";
import EducationComponent from "@/components/education";
import EmailComponent from "@/components/email";
import ExperienceComponent from "@/components/experience";
import PhraseComponent from "@/components/phrase";
import ProfileComponent from "@/components/profile";
import MyProjectsComponent from "@/components/projects";
import SkillsComponent from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[#F5F0FF]">
      <div className="w-3/6">
        <ProfileComponent />
        <PhraseComponent />
        <AboutMeComponent />
      </div>
      <MyProjectsComponent />
      <div className="w-3/6">
        <ExperienceComponent />
        <EducationComponent />
        <SkillsComponent />
        <EmailComponent />
        <ContactComponent />
      </div>
    </main>
  );
}
