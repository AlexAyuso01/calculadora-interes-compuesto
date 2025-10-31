import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 Importamos Link para navegación interna

const Footer = () => {
  const [showError, setShowError] = useState(false);

  // Ocultar el mensaje después de 5 segundos
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  // Manejador del clic en el enlace externo
  const handleExternalClick = (e) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <footer className="bg-slate-950 py-8 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + nombre */}
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-bold text-white">
              Calculadora de Interés Compuesto
            </span>
          </div>

          {/* Enlaces */}
          <div className="flex items-center gap-6 text-sm">
            {/* Usamos <Link> para navegación interna sin recarga */}
            <Link
              to="/about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Quiénes somos
            </Link>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contacto
            </Link>

            {/* Enlace externo controlado */}
            <a
              href="https://www.a2ewebsolutions.com"
              onClick={handleExternalClick}
              className="text-slate-400 hover:text-white transition-colors"
            >
              a2ewebsolutions.com
            </a>
          </div>
        </div>

        {/* Derechos */}
        <p className="text-slate-400 text-sm text-center mt-4">
          © 2025 Todos los derechos reservados. Herramienta educativa gratuita.
        </p>

        {/* Aviso legal */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-slate-500 text-xs text-center">
            Nota: Esta calculadora proporciona estimaciones basadas en los datos ingresados.
            Los resultados reales pueden variar según el mercado y otros factores.
            Consulta con un asesor financiero antes de tomar decisiones de inversión importantes.
          </p>
        </div>
      </div>

      {/* Mensaje sutil de error */}
      {showError && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500/10 border border-red-400/30 
                     text-red-300 text-sm px-4 py-2 rounded-lg backdrop-blur-sm shadow-md 
                     animate-fade-in-out flex items-center gap-2"
        >
          <span className="text-lg">⚠️</span>
          <span>No se pudo abrir el enlace en este momento, sitio en construcción</span>
        </div>
      )}

      {/* Animación de fade-in y fade-out */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            10%, 90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-in-out {
            animation: fadeInOut 5s ease-in-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
