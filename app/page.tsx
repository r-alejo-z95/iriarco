import AboutUsSnippet from "@/components/AboutUsSnippet";
import CallToAction from "@/components/CallToAction";
import FeaturedServices from "@/components/FeaturedServices";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <RecentProjects />
      <AboutUsSnippet />
      <CallToAction />
    </>
  );
}
