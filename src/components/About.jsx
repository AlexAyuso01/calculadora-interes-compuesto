import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 bg-white/5 border-white/10">
          <h1 className="text-3xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-lg text-slate-300 mb-4">
            En <strong>Calculadora de Interés Compuesto</strong> creemos en la educación financiera y en la
            transparencia. Nuestra herramienta ayuda a usuarios de todo el mundo a visualizar el crecimiento
            de sus inversiones de forma clara, sencilla y gratuita.
          </p>
          <p className="text-lg text-slate-300">
            El proyecto está desarrollado por <strong>A2E Web & Cloud Solutions</strong>, un equipo especializado
            en crear aplicaciones web rápidas, seguras y fáciles de usar.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
