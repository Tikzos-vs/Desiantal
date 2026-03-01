import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import Menu            from '../components/Menu'
import DessertsSection from '../components/DessertsSection'
import About           from '../components/About'
import Order           from '../components/Order'
import Contact         from '../components/Contact'
import Footer          from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <DessertsSection />
        <About />
        <Order />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
