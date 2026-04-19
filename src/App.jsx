import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Replace with the real Costa Rica number (digits only, no spaces/dashes).
// Example: 50688887777
export const WA_NUMBER = '50660457842'
export const WA_MESSAGE = encodeURIComponent(
  '¡Hola! Me gustaría solicitar más información sobre sus productos y servicios.'
)
export const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
