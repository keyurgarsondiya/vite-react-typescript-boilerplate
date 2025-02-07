
function App() {

  return (
      <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
          {/* Blurry Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30"></div>

          {/* Main Content */}
          <div className="relative z-10 text-center text-white p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold">
                  Vite Boilerplate with React, TypeScript, and TailwindCSS!
              </h1>
          </div>
      </div>
  )
}

export default App
