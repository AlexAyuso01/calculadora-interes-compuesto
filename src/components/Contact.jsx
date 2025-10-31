import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
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
                target="_blank"
                rel="noopener noreferrer"
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
    </section>
  );
};

export default Contact;
