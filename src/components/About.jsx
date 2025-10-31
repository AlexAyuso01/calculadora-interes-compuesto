import React from "react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // 👈 Importa hook de navegación

const About = () => {
  const navigate = useNavigate(); // 👈 Inicializa el hook

  const handleGoHome = () => {
    navigate("/"); // 👈 Navegación interna sin # ni recarga
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative">
      <div className="max-w-4xl mx-auto">
        <Card className="p-10 bg-white/5 border-white/10 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-6 text-emerald-400">Quiénes Somos</h1>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            En <strong>Calculadora de Interés Compuesto</strong> creemos en la educación financiera accesible
            para todos. Nuestra herramienta ha sido creada para ayudarte a entender el impacto del interés
            compuesto en tus inversiones y planificar tu futuro con claridad.
          </p>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            El proyecto forma parte de <strong>A2E Web & Cloud Solutions</strong>, un equipo especializado
            en desarrollo de aplicaciones web modernas, seguras y optimizadas para ofrecer experiencias
            rápidas y visuales.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nuestro objetivo es proporcionarte herramientas simples pero potentes, con un enfoque en la
            transparencia, la fiabilidad y la utilidad práctica. Creemos que entender tus finanzas es el
            primer paso hacia una mejor toma de decisiones.
          </p>
        </Card>
      </div>

      {/* Botón flotante arriba a la izquierda con animación */}
      <button
        onClick={handleGoHome}
        className="fixed top-6 left-6 bg-white/10 text-white px-4 py-2 rounded-full
                   border border-white/20 backdrop-blur-sm hover:bg-emerald-500/20
                   transition-all duration-300 text-sm font-medium shadow-md
                   animate-slide-fade-in"
      >
        🏠 Volver al inicio
      </button>

      {/* Animaciones */}
      <style>
        {`
          @keyframes slideFadeIn {
            0% { opacity: 0; transform: translateX(-15px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-fade-in {
            animation: slideFadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default About;
