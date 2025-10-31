import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [showError, setShowError] = useState(false);

  // Oculta el mensaje después de 5 s
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
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Card className="p-10 bg-white/5 border-white/10 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-6 text-emerald-400">Contacto</h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Si tienes dudas, sugerencias o comentarios sobre nuestra herramienta, estaremos encantados
            de escucharte. Tu opinión nos ayuda a mejorar y seguir desarrollando soluciones útiles
            para todos los usuarios.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <a
                href="mailto:contacto@a2ewebsolutions.com"
                className="text-cyan-300 hover:text-cyan-200 transition-colors text-lg"
              >
                contacto@a2ewebsolutions.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-emerald-400" />
              <a
                href="https://www.a2ewebsolutions.com"
                onClick={handleExternalClick}
                className="text-emerald-300 hover:text-emerald-200 transition-colors text-lg"
              >
                www.a2ewebsolutions.com
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Intentamos responder a todas las consultas en un plazo máximo de 48 horas laborables.
            Por favor, proporciona toda la información posible en tu mensaje para que podamos
            ayudarte de la mejor manera.
          </p>
        </Card>
      </div>

      {/* Mensaje sutil de error */}
      {showError && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500/10 border border-red-400/30 
                     text-red-300 text-sm px-4 py-2 rounded-lg backdrop-blur-sm shadow-md 
                     animate-fade-in-out flex items-center gap-2"
        >
          <span className="text-lg">⚠️</span>
          <span>No se pudo abrir el enlace en este momento</span>
        </div>
      )}

      {/* Animación de entrada/salida */}
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
    </section>
  );
};

export default Contact;
