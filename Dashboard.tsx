import React from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('satellite');
  
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Interactive Dashboard</h2>
      <p className="text-lg mb-8">
        Explore space through our interactive simulations and visualizations.
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        <button 
          onClick={() => setActiveTab('satellite')}
          className={`px-4 py-2 rounded-full ${activeTab === 'satellite' ? 'bg-blue-600' : 'bg-blue-900'}`}
        >
          🛰️ Satellite Orbit Viewer
        </button>
        <button 
          onClick={() => setActiveTab('rover')}
          className={`px-4 py-2 rounded-full ${activeTab === 'rover' ? 'bg-blue-600' : 'bg-blue-900'}`}
        >
          🚀 Mars Rover Simulator
        </button>
        <button 
          onClick={() => setActiveTab('iss')}
          className={`px-4 py-2 rounded-full ${activeTab === 'iss' ? 'bg-blue-600' : 'bg-blue-900'}`}
        >
          🏢 ISS Virtual Tour
        </button>
        <button 
          onClick={() => setActiveTab('planets')}
          className={`px-4 py-2 rounded-full ${activeTab === 'planets' ? 'bg-blue-600' : 'bg-blue-900'}`}
        >
          🌍 Planet Comparator
        </button>
      </div>
      
      {activeTab === 'satellite' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Satellite Orbit Viewer</h3>
          <p>
            Adjust the parameters to see how satellites orbit Earth at different altitudes and inclinations.
          </p>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="w-full h-64 bg-black rounded-lg relative overflow-hidden mb-4">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-500 rounded-full"></div>
              <div className="absolute top-1/2 left-calc(50%-20px) w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Altitude: 400 km</label>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                </div>
                <div className="text-xs text-gray-400 flex justify-between">
                  <span>Low Earth Orbit: 200-1000 km</span>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Inclination: 45°</label>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                </div>
                <div className="text-xs text-gray-400 flex justify-between">
                  <span>0° = Equatorial, 90° = Polar</span>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Animation Speed</label>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'rover' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Mars Rover Simulator</h3>
          <p>
            Control a virtual rover on the Martian surface. Use the directional buttons to navigate.
          </p>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="w-full h-64 bg-red-900 rounded-lg relative overflow-hidden mb-4">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-sm"></div>
            </div>
            <div className="flex justify-center gap-2">
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">↑</button>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">←</button>
                <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">→</button>
              </div>
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">↓</button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'iss' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">ISS Virtual Tour</h3>
          <p>
            Explore the International Space Station by navigating between modules. Click on connected modules to move through the station.
          </p>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="text-xl font-medium mb-2">Unity (Node 1)</h4>
            <p className="mb-4">The first U.S. module of the ISS, connecting the Russian and American segments.</p>
            <div className="mb-4 uppercase text-sm font-bold text-gray-400">CONNECTED MODULES:</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-2 bg-blue-900 rounded">Zarya (FGB)</button>
              <button className="px-3 py-2 bg-blue-900 rounded">Tranquility (Node 3)</button>
              <button className="px-3 py-2 bg-blue-900 rounded">Destiny Laboratory</button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'planets' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Planet Comparator</h3>
          <p>
            Compare different features of planets in our solar system. Select planets and choose a comparison type.
          </p>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">SELECT PLANETS (UP TO 3):</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-gray-800 rounded border border-blue-500">Mercury</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Venus</button>
                <button className="px-3 py-1 bg-gray-800 rounded border border-blue-500">Earth</button>
                <button className="px-3 py-1 bg-gray-800 rounded border border-blue-500">Mars</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Jupiter</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Saturn</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Uranus</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Neptune</button>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">COMPARISON TYPE:</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-blue-900 rounded">Size</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Distance from Sun</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Day Length</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Year Length</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Surface Gravity</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Temperature</button>
                <button className="px-3 py-1 bg-gray-800 rounded">Number of Moons</button>
              </div>
            </div>
            
            <h4 className="text-lg font-medium mb-2">Diameter Comparison</h4>
            <p className="text-sm mb-2">The diameter of the planet at its equator.</p>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Earth</span>
                  <span>12,756 km</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Mars</span>
                  <span>6,792 km</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{width: '53%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Mercury</span>
                  <span>4,880 km</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-gray-500 h-4 rounded-full" style={{width: '38%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <h2 className="text-3xl font-bold mt-12 mb-6">Interactive Features</h2>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🛰️</span> Satellite Orbit Viewer
          </h3>
          <p>
            Visualize how satellites orbit Earth at different altitudes and inclinations. Adjust the parameters to see how they affect the satellite's trajectory and speed.
          </p>
          <p>
            This simulation demonstrates concepts like orbital mechanics, Low Earth Orbit (LEO), and how inclination affects a satellite's coverage area. The visualization shows a simplified model of Earth and a satellite with an adjustable orbit.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🚀</span> Mars Rover Simulator
          </h3>
          <p>
            Control a virtual rover on the Martian surface. Use the directional buttons to navigate the rover across the simulated Martian terrain, complete with craters and rocks.
          </p>
          <p>
            This interactive feature gives you a sense of what it's like to operate a rover on Mars, similar to how NASA engineers control rovers like Curiosity and Perseverance. The simulation includes a simplified representation of the Martian landscape.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🏢</span> ISS Virtual Tour
          </h3>
          <p>
            Explore the International Space Station by navigating between its various modules. Learn about each module's purpose and how they connect to form the complete space station.
          </p>
          <p>
            This virtual tour allows you to move through the ISS by clicking on connected modules. Each module includes information about its function, when it was added to the station, and which space agency contributed it. The tour gives you a sense of the station's layout and the international cooperation that made it possible.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-2">🌍</span> Planet Comparator
          </h3>
          <p>
            Compare different features of planets in our solar system. Select up to three planets and choose a comparison type to see how they stack up against each other.
          </p>
          <p>
            This tool allows you to compare planetary characteristics like size, distance from the Sun, day length, year length, surface gravity, temperature, and number of moons. The visual comparison helps illustrate the vast differences between planets in our solar system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
