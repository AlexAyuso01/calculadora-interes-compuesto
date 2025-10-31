import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 bg-white/5 border-white/10">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-slate-300 mb-6">
            Si tienes dudas, sugerencias o incidencias, puedes escribirnos a:
          </p>
          <div className="flex items-center gap-3 text-emerald-300 text-lg">
            <Mail className="w-5 h-5" />
            <a href="mailto:contacto@a2ewebsolutions.com" className="underline">
              contacto@a2ewebsolutions.com
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            Intentamos responder a todas las consultas en un plazo máximo de 48 horas.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
