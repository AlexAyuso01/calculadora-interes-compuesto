import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-bold text-white">Calculadora de Interés Compuesto</span>
          </div>
          
          <p className="text-slate-400 text-sm text-center">
            © 2025 Todos los derechos reservados. Herramienta educativa gratuita.
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-slate-500 text-xs text-center">
            Nota: Esta calculadora proporciona estimaciones basadas en los datos ingresados. Los resultados reales pueden variar según las condiciones del mercado y otros factores. Consulta con un asesor financiero para decisiones de inversión importantes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;