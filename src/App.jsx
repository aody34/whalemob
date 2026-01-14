import Header from './components/Header'
import Hero from './components/Hero'
import CTAButtons from './components/CTAButtons'
import backgroundImage from './assets/background.png'
import './index.css'

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Dark Overlay */}
      <div className="bg-overlay" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <Header />

        {/* Main Content - Centered */}
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <Hero />
          <CTAButtons />
        </main>
      </div>
    </div>
  )
}

export default App
