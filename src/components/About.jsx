import React from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
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
    </section>
  );
};

export default About;
