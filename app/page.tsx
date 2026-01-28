import Feature from "@/components/Feature";
import Hero from "@/components/Heropage";
import Newsletter from "@/components/Newsletter";
import Cta from "@/components/cta";
import Logoclouds from "@/components/logo-clouds";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return <div>
    <Hero 
      heading = "Unlock Your Athlete's Full Potential" 
      video = "/trackfield_converted.mp4" 
      sport = "" linkto = "" 
      res = "/resources" team = "" start_time = {25} 
    />

    <Feature 
      header = "Mentorship That Makes a Difference" 
      subheader = "" 
      content = "Whether your child is just starting out or aiming for college athletics, our mentorship program pairs them with experienced NCAA athletes who provide guidance on training, goal setting, and balancing academics with athletics." 
    />
  <Cta heading = "Get Recruited with Confidence" text = "" />
    <Feature header = "Training Plans Designed to Win" 
    subheader = "" 
    content = "From sprint mechanics to race-day strategy, our event-specific plans are designed by current college athletes to help your child improve in the areas that matter most."/>
     <Newsletter heading = "Subscribe to our newsletter!" subheader = "Start Your Journey to Success Today!" />
     <Team />
    <Testimonials />
    <Logoclouds />

    </div>

}