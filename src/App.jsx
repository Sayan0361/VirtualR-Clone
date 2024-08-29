import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import FeatureSection from "./Components/FeatureSection"
import Workflow from "./Components/Workflow"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer"
import 'aos/dist/aos.css';

export default function App() {
  return (
    <>
      <Navbar />  
      <div className="max-w-7xl mx-auto pt-20 px-8">
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}