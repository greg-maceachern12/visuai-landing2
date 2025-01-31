// App.jsx
import { useState, useEffect } from 'react'
import { ChevronDown, BookOpen, Sparkles, Zap } from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-40"
            src="/assets/land.mp4"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md' : ''
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Visuai
            </div>
            <div className="flex gap-4">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#examples" className="hover:text-blue-400 transition-colors">Examples</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl h-auto md:text-7xl h-20 font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Bring Your Books to Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Immerse deeper in the books you read every day
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://app.visuai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Visuai Free
            </a>
            <a
              href="https://pro.visuai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Visuai Pro
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-gray-400" />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl h-auto md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Transform Your Reading Experience
            </h2>
            <p className="text-xl text-gray-400">
              Visualize stories like never before with AI-powered illustrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Text Analysis</h3>
              <p className="text-gray-400">Understands context and narrative elements to create perfect scene illustrations</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Artistic Generation</h3>
              <p className="text-gray-400">Creates beautiful, consistent artwork that matches your book's style</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-gray-400">Generate illustrations in seconds, enhancing your reading flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Featured Examples
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Great Gatsby",
                author: "Scott Fitzgerald",
                image: "/assets/gatsby.jpeg",
                excerpt: "Across the courtesy bay the white palaces of fashionable East Egg glittered along the water..."
              },
              {
                title: "Eragon",
                author: "Christopher Paolini",
                image: "/assets/eragonEx3.png",
                excerpt: "Eragon knelt in a bed of trampled reed grass and scanned the tracks with a practiced eye..."
              },
              {
                title: "Fahrenheit 451",
                author: "Ray Bradbury",
                image: "/assets/Fahrenheit.jpeg",
                excerpt: "The autumn leaves blew over the moonlit pavement in such a way as to make the girl who was moving there seem fixed to a sliding walk..."
              }
            ].map((example, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{example.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{example.author}</p>
                  <p className="text-gray-300 text-sm italic line-clamp-3">{example.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Ready to Transform Your Reading?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of readers experiencing books in a whole new way
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://app.visuai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Visuai Free
            </a>
            <a
              href="https://pro.visuai.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Visuai Pro
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App