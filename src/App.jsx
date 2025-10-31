import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Tips from '@/components/Tips';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';

function App() {
  return (
    <>
      <Helmet>
        <title>Calculadora de Interés Compuesto - Maximiza tus Inversiones</title>
        <meta
          name="description"
          content="Calcula el crecimiento de tus inversiones con interés compuesto y descubre consejos prácticos para maximizar tus ganancias financieras."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Calculator />
                <Tips />
              </>
            }
          />

          {/* Páginas estáticas */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
