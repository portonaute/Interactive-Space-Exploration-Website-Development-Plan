'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navigation/Navbar'

export default function SolarSystem() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const planets = [
    {
      name: "Mercury",
      description: "The smallest and innermost planet in the Solar System, Mercury has a rocky body and is heavily cratered.",
      color: "bg-gray-400",
      facts: ["No atmosphere", "Extreme temperature variations", "88 Earth days to orbit the Sun"]
    },
    {
      name: "Venus",
      description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's similar in structure and size to Earth.",
      color: "bg-yellow-600",
      facts: ["Thick toxic atmosphere", "Hottest planet", "Rotates backwards"]
    },
    {
      name: "Earth",
      description: "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things.",
      color: "bg-blue-500",
      facts: ["71% water covered", "Only known planet with life", "Has one natural satellite (Moon)"]
    },
    {
      name: "Mars",
      description: "Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere.",
      color: "bg-red-600",
      facts: ["Known as the Red Planet", "Has the largest volcano in the solar system", "Evidence of ancient water"]
    },
    {
      name: "Jupiter",
      description: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.",
      color: "bg-orange-300",
      facts: ["Gas giant", "Great Red Spot is a giant storm", "Has 79+ moons"]
    },
    {
      name: "Saturn",
      description: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets.",
      color: "bg-yellow-200",
      facts: ["Famous for its rings", "Less dense than water", "Has 82+ moons"]
    },
    {
      name: "Uranus",
      description: "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope.",
      color: "bg-teal-300",
      facts: ["Ice giant", "Rotates on its side", "27 known moons"]
    },
    {
      name: "Neptune",
      description: "Neptune is the eighth and most distant major planet orbiting our Sun. Dark, cold, and whipped by supersonic winds, Neptune is the only planet in our solar system not visible to the naked eye.",
      color: "bg-blue-700",
      facts: ["Windiest planet", "17 known moons", "Discovered through mathematical predictions"]
    }
  ]

  return (
    <main className="stars-bg min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="space-title">Our Solar System</h1>
          <p className="space-subtitle max-w-3xl mx-auto">
            Explore the planets, moons, asteroids, and other celestial bodies that orbit our Sun.
          </p>
        </div>
      </section>
      
      {/* Solar System Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-black/30 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">General Overview</h2>
            <p className="text-gray-300 mb-4">
              Our solar system consists of the Sun, eight planets, at least five dwarf planets, 
              more than 200 moons, and countless asteroids, comets, and other small bodies. 
              Formed about 4.6 billion years ago from the gravitational collapse of a giant 
              interstellar molecular cloud, the solar system has been a subject of human 
              fascination and scientific study for millennia.
            </p>
            <p className="text-gray-300 mb-4">
              The Sun, a G-type main-sequence star, contains 99.86% of the solar system's known mass. 
              The four smaller inner planets (Mercury, Venus, Earth, and Mars) are terrestrial planets, 
              being primarily composed of rock and metal. The four outer planets (Jupiter, Saturn, Uranus, 
              and Neptune) are giant planets, being substantially more massive than the terrestrials.
            </p>
            <p className="text-gray-300">
              Beyond Neptune lies the Kuiper Belt, a circumstellar disc of small bodies including 
              dwarf planets like Pluto, and beyond that is the Oort Cloud, a vast spherical shell 
              of icy objects that marks the boundary of the Sun's gravitational influence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Planets Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-300 text-center">Planet Profiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planets.map((planet, index) => (
              <div key={index} className="planet-card bg-black/30 overflow-hidden">
                <div className={`h-32 ${planet.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{planet.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{planet.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">KEY FACTS:</h4>
                    <ul className="space-y-1">
                      {planet.facts.map((fact, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Beyond Planets */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Beyond Planets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">The Sun</h3>
              <p className="text-gray-300 mb-4">
                The Sun is the star at the center of our solar system, a nearly perfect sphere of hot plasma. 
                It is by far the most important source of energy for life on Earth, providing the light and 
                heat that sustains all living organisms.
              </p>
              <p className="text-gray-300">
                With a diameter of about 1.39 million kilometers (864,000 miles), the Sun is about 109 times 
                wider than Earth. Its mass is about 330,000 times that of Earth, comprising about 99.86% of 
                the total mass of the Solar System.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-300">Asteroid Belt</h3>
              <p className="text-gray-300 mb-4">
                The asteroid belt is a torus-shaped region in the Solar System, located roughly between the 
                orbits of the planets Jupiter and Mars. It contains a great many solid, irregularly shaped 
                bodies called asteroids or minor planets.
              </p>
              <p className="text-gray-300">
                About half the mass of the belt is contained in the four largest asteroids: Ceres, Vesta, 
                Pallas, and Hygiea. Ceres, the largest asteroid, is now classified as a dwarf planet.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-200">Kuiper Belt & Oort Cloud</h3>
              <p className="text-gray-300 mb-4">
                The Kuiper Belt is a circumstellar disc in the outer Solar System, extending from the orbit 
                of Neptune to approximately 50 AU from the Sun. It is similar to the asteroid belt, but is 
                far larger and contains mainly icy objects rather than rocky ones.
              </p>
              <p className="text-gray-300">
                The Oort Cloud is a theoretical cloud of predominantly icy planetesimals believed to surround 
                the Sun at distances ranging from 2,000 to 100,000 AU. It is the source of long-period comets 
                and marks the boundary of the Sun's gravitational influence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Cosmic Explorer | Interactive Space Exploration Website</p>
          <p className="text-gray-500 text-sm mt-2">Developed with Next.js and TailwindCSS</p>
        </div>
      </footer>
    </main>
  )
}
