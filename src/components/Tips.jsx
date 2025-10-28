import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Lightbulb, Target, Clock, Zap, Shield, TrendingUp, PiggyBank, BookOpen } from 'lucide-react';

const tips = [
  {
    icon: Clock,
    title: 'Empieza Cuanto Antes',
    description: 'El tiempo es tu mejor aliado. Cuanto antes comiences a invertir, más tiempo tendrá tu dinero para crecer exponencialmente gracias al interés compuesto.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: PiggyBank,
    title: 'Invierte Regularmente',
    description: 'Las aportaciones mensuales constantes, aunque sean pequeñas, pueden generar grandes resultados a largo plazo. La disciplina es clave.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Target,
    title: 'Reinvierte los Beneficios',
    description: 'No retires los intereses ganados. Déjalos trabajar para ti y aprovecha el efecto multiplicador del interés sobre interés.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Diversifica tus Inversiones',
    description: 'No pongas todos los huevos en la misma cesta. Distribuye tu capital en diferentes activos para reducir riesgos y optimizar rendimientos.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Busca Tasas Competitivas',
    description: 'Una diferencia del 1-2% en la tasa de interés puede significar miles de euros a largo plazo. Compara opciones y elige sabiamente.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Aprovecha el Interés Compuesto',
    description: 'Einstein lo llamó "la octava maravilla del mundo". El interés compuesto hace que tu dinero crezca de forma exponencial, no lineal.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: BookOpen,
    title: 'Edúcate Financieramente',
    description: 'Invierte tiempo en aprender sobre finanzas personales e inversiones. El conocimiento es la mejor inversión que puedes hacer.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Lightbulb,
    title: 'Establece Metas Claras',
    description: 'Define objetivos financieros específicos y realistas. Saber hacia dónde vas te ayudará a mantener la disciplina y motivación.',
    color: 'from-pink-500 to-fuchsia-500'
  }
];

const Tips = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Consejos para Maximizar tus Inversiones
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Aplica estas estrategias probadas para aprovechar al máximo el poder del interés compuesto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {tip.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {tip.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border-emerald-400/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  La Regla del 72
                </h3>
                <p className="text-lg text-slate-200">
                  Divide 72 entre tu tasa de interés anual para saber aproximadamente en cuántos años se duplicará tu inversión. 
                  Por ejemplo, con un 7% de interés: 72 ÷ 7 = ~10 años para duplicar tu capital.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Tips;