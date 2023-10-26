import Navbar from "@/components/Navbar"
import FirstSlide from "@/components/FirstSlide"
import Skillset from "@/components/Skillset"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-[#ffffff]">
      <Navbar/>
      <FirstSlide/>
      <Skillset/>
      <Projects/>
      <Certifications/>
      <Socials/>

      
    </main>
  )
}
