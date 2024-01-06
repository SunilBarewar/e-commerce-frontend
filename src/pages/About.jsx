import {
  OurStory,
  Services,
  MetricsOverview,
  LeadershipBio,
} from "../components/about";

const About = () => {
  return (
    <div className="flex flex-col gap-y-10 pt-12">
      <OurStory />
      <MetricsOverview />
      <LeadershipBio />
      <Services />
    </div>
  );
};

export default About;
