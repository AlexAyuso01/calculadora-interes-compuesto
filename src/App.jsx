import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Tips from '@/components/Tips';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Calculadora de Interés Compuesto - Maximiza tus Inversiones</title>
        <meta name="description" content="Calcula el crecimiento de tus inversiones con interés compuesto y descubre consejos prácticos para maximizar tus ganancias financieras." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <Calculator />
        <Tips />
        <Footer />
      </div>
    </>
  );
}

export default App;