import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">DrivenYou</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#tests" className="hover:text-blue-600">Tests</a>
            <a href="#videos" className="hover:text-blue-600">Vídeos</a>
            <a href="#manuals" className="hover:text-blue-600">Manuales</a>
            <a href="#premium" className="hover:text-blue-600">Premium</a>
          </nav>
          <button className="border rounded px-4 py-2 text-sm">Iniciar sesión</button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Aprueba tu examen de conducir rápido</h2>
        <p className="text-lg mb-6">Con test, vídeos y manuales interactivos</p>
        <button className="bg-white text-blue-600 px-6 py-2 font-semibold rounded">Empieza gratis</button>
      </section>

      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" id="tests">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Tests por Permiso</h3>
          <p className="text-sm mb-4">Permiso B, A, C y más disponibles</p>
          <button className="text-blue-600 font-semibold">Ver tests</button>
        </div>
        <div className="bg-white p-6 rounded shadow text-center" id="videos">
          <h3 className="font-semibold text-lg mb-2">Vídeos Explicativos</h3>
          <p className="text-sm mb-4">Comprende mejor con contenido visual</p>
          <button className="text-blue-600 font-semibold">Ver vídeos</button>
        </div>
        <div className="bg-white p-6 rounded shadow text-center" id="manuals">
          <h3 className="font-semibold text-lg mb-2">Manuales Descargables</h3>
          <p className="text-sm mb-4">Toda la teoría en un solo lugar</p>
          <button className="text-blue-600 font-semibold">Descargar</button>
        </div>
        <div className="bg-white p-6 rounded shadow text-center" id="premium">
          <h3 className="font-semibold text-lg mb-2">Accede a Premium</h3>
          <p className="text-sm mb-4">Más tests, más vídeos, más aprobado</p>
          <button className="text-blue-600 font-semibold">Suscríbete</button>
        </div>
      </main>

      <footer className="mt-20 bg-white border-t text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} DrivenYou · Términos · Política de privacidad
      </footer>
    </div>
  );
}

export default App;
