import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';

const Calculator = () => {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    calculateCompoundInterest();
  }, [principal, monthlyContribution, rate, years]);

  const calculateCompoundInterest = () => {
    const r = rate / 100;
    const n = 12; // Compuesto mensualmente
    const t = years;
    const P = parseFloat(principal) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;

    let data = [];
    
    for (let year = 0; year <= t; year++) {
      const months = year * 12;
      
      const futureValue = P * Math.pow(1 + r/n, n * year) + 
                         PMT * ((Math.pow(1 + r/n, n * year) - 1) / (r/n));
      
      const yearlyContributions = P + (PMT * months);
      const interest = futureValue - yearlyContributions;

      data.push({
        year: year,
        total: Math.round(futureValue),
        contributions: Math.round(yearlyContributions),
        interest: Math.round(interest)
      });

      if (year === t) {
        setResult({
          finalAmount: Math.round(futureValue),
          totalContributions: Math.round(yearlyContributions),
          totalInterest: Math.round(interest)
        });
      }
    }

    setChartData(data);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calcula tu Futuro Financiero
          </h2>
          <p className="text-xl text-slate-300">
            Ajusta los valores y observa cómo crece tu inversión
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Parámetros de Inversión</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="principal" className="text-white flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    Inversión Inicial
                  </Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                  <span className="text-sm text-emerald-300 mt-1 block">{formatCurrency(principal)}</span>
                </div>

                <div>
                  <Label htmlFor="monthly" className="text-white flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    Aportación Mensual
                  </Label>
                  <Input
                    id="monthly"
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                  <span className="text-sm text-cyan-300 mt-1 block">{formatCurrency(monthlyContribution)}/mes</span>
                </div>

                <div>
                  <Label htmlFor="rate" className="text-white flex items-center gap-2 mb-2">
                    <Percent className="w-4 h-4 text-yellow-400" />
                    Tasa de Interés Anual
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                  <span className="text-sm text-yellow-300 mt-1 block">{rate}% anual</span>
                </div>

                <div>
                  <Label htmlFor="years" className="text-white flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    Período de Inversión
                  </Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="bg-white/10 border-white/20 text-white text-lg"
                  />
                  <span className="text-sm text-purple-300 mt-1 block">{years} años</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {result && (
              <Card className="p-8 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border-emerald-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Resultados Proyectados</h3>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <div className="text-sm text-emerald-300 mb-1">Valor Final</div>
                    <div className="text-3xl font-bold text-white">{formatCurrency(result.finalAmount)}</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <div className="text-sm text-cyan-300 mb-1">Total Aportado</div>
                    <div className="text-2xl font-bold text-white">{formatCurrency(result.totalContributions)}</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <div className="text-sm text-yellow-300 mb-1">Intereses Ganados</div>
                    <div className="text-2xl font-bold text-white">{formatCurrency(result.totalInterest)}</div>
                  </motion.div>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-4 rounded-lg border border-emerald-400/30 mt-4">
                    <div className="text-sm text-white/80 mb-1">Rentabilidad Total</div>
                    <div className="text-xl font-bold text-emerald-300">
                      {((result.totalInterest / result.totalContributions) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </Card>
            )}

            <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Evolución de la Inversión</h4>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff60" />
                  <YAxis stroke="#ffffff60" tickFormatter={(value) => `${(value/1000).toFixed(0)}k`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #ffffff20',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                    formatter={(value) => formatCurrency(value)}
                  />
                  <Area type="monotone" dataKey="contributions" stroke="#06b6d4" fillOpacity={1} fill="url(#colorContributions)" name="Aportaciones" />
                  <Area type="monotone" dataKey="total" stroke="#10b981" fillOpacity={1} fill="url(#colorTotal)" name="Valor Total" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;