import React, {useState} from 'react'
import AdvisorSection from '../components/AdvisorSection'
import BetaSection from '../components/BetaSection'
import FounderSection from '../components/FounderSection'
import InformSection from '../components/InformSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import WelcomeSection from '../components/WelcomeSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <BetaSection />
    <WelcomeSection />
    <InformSection />
    <FounderSection />
    <AdvisorSection />
    </>
  )
}

export default Home