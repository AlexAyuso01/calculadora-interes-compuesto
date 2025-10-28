import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calculator, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-20 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-white">Herramienta Financiera Gratuita</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Calculadora de
            <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Interés Compuesto
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Descubre el poder del interés compuesto y aprende cómo hacer crecer tu dinero de forma exponencial
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20"
            >
              <Calculator className="w-8 h-8 text-emerald-300" />
              <div className="text-left">
                <div className="text-sm text-emerald-200">Cálculos</div>
                <div className="text-lg font-bold text-white">Precisos</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20"
            >
              <TrendingUp className="w-8 h-8 text-cyan-300" />
              <div className="text-left">
                <div className="text-sm text-cyan-200">Resultados</div>
                <div className="text-lg font-bold text-white">En Tiempo Real</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;