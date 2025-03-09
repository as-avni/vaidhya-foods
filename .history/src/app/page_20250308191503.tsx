import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import WhyUs from "@/components/WhyUs"
import OurProducts from "@/components/OurProducts"
import Reviews from "@/components/Reviews"
import ContactUs from "@/components/ContactUs"
import YoutubeSection from "@/components/social/YouTubeSection"
import SocialDashboard from "@/components/social/socials"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyUs />
      <OurProducts />
      <Reviews />
      <YoutubeSection />
      <SocialDashboard />
      <ContactUs />
    </>
  )
}

