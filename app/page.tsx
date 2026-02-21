import React from 'react';
import { Phone, Mail, MapPin, Hammer, Home, Sparkles, ChevronRight, Menu } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-wood-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-wood-700 tracking-tight">
            SCHREINEREI <span className="text-wood-500">BURCHERT</span>
          </div>
          <div className="hidden md:flex space-x-8 text-wood-800 font-medium">
            <a href="#services" className="hover:text-wood-500 transition">Leistungen</a>
            <a href="#about" className="hover:text-wood-500 transition">Über uns</a>
            <a href="#contact" className="px-5 py-2 bg-wood-600 text-white rounded-lg hover:bg-wood-700 transition shadow-lg shadow-wood-200">
              Kontakt
            </a>
          </div>
          <Menu className="md:hidden text-wood-700" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Modernes Wohnen mit Holz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold mb-6 border border-white/30">
            MEISTERBETRIEB IM ALLGÄU
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Wir geben Ihren Träumen<br />
            <span className="text-wood-200 italic">ein Zuhause.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Individueller Möbelbau, Innenausbau und Saunabau. 
            Handwerkliche Präzision trifft auf modernes Design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-wood-600 text-white rounded-xl text-lg font-semibold hover:bg-wood-500 transition shadow-xl hover:scale-105 transform duration-200 flex items-center justify-center gap-2">
              Projekt anfragen <ChevronRight size={20} />
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition flex items-center justify-center">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-wood-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-wood-800 mb-6">Mehr als nur Holz.</h2>
          <p className="text-xl text-wood-600 leading-relaxed">
            "Wenn wir Ihr besonderes Möbelstück liefern, streichen die Menschen oftmals mit der flachen Hand über ihr neues Holzprodukt und spüren die natürliche Wärme."
          </p>
          <p className="mt-4 text-wood-500">
            Wir verbinden traditionelles Handwerk mit modernen Werkstoffen wie Corian®, Glas und Metall.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-900 mb-4">Unser Handwerk</h2>
            <div className="w-20 h-1 bg-wood-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-wood-50">
              <div className="h-64 overflow-hidden relative">
                <img src="/kitchen.png" alt="Küche" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Home className="text-wood-600" size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-wood-800 mb-3">Möbel & Küchen</h3>
                <p className="text-wood-600 mb-6">
                  Vom begehbaren Kleiderschrank bis zur Traumküche. Wir fertigen Unikate, die perfekt in Ihr Leben passen.
                </p>
                <span className="text-wood-500 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1 cursor-pointer">
                  Mehr erfahren <ChevronRight size={16} />
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-wood-50">
              <div className="h-64 overflow-hidden relative">
                <img src="/sauna.png" alt="Sauna" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Sparkles className="text-wood-600" size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-wood-800 mb-3">Saunabau</h3>
                <p className="text-wood-600 mb-6">
                  Ihr privater Wellness-Bereich. Maßgefertigte Saunen, die sich harmonisch in Ihr Zuhause einfügen.
                </p>
                <span className="text-wood-500 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1 cursor-pointer">
                  Mehr erfahren <ChevronRight size={16} />
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-wood-50">
              <div className="h-64 overflow-hidden bg-wood-200 relative flex items-center justify-center">
                {/* Fallback pattern if image missing or conceptual */}
                <div className="absolute inset-0 bg-wood-300 opacity-20 pattern-grid-lg"></div>
                <Hammer className="text-wood-400 w-16 h-16" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Hammer className="text-wood-600" size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-wood-800 mb-3">Innenausbau</h3>
                <p className="text-wood-600 mb-6">
                  Treppen, Türen, Böden. Wir gestalten komplette Räume und sorgen für eine warme Wohnatmosphäre.
                </p>
                <span className="text-wood-500 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1 cursor-pointer">
                  Mehr erfahren <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-wood-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Bereit für Ihr Projekt?</h2>
              <p className="text-wood-200 text-lg mb-8">
                Lassen Sie uns über Ihre Ideen sprechen. Wir beraten Sie gerne vor Ort im Allgäu oder in unserer Werkstatt.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-wood-800 p-3 rounded-full">
                    <Phone size={24} className="text-wood-300" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400">Rufen Sie uns an</p>
                    <p className="text-xl font-semibold">+49 (0) 8321 123456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-wood-800 p-3 rounded-full">
                    <Mail size={24} className="text-wood-300" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400">Schreiben Sie uns</p>
                    <p className="text-xl font-semibold">info@schreinerei-allgaeu.de</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full bg-white text-wood-900 p-8 rounded-2xl shadow-2xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">E-Mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition" placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Nachricht</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition" placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea>
                </div>
                <button className="w-full py-4 bg-wood-600 text-white font-bold rounded-lg hover:bg-wood-700 transition shadow-lg">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-950 text-wood-400 py-12 border-t border-wood-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">SCHREINEREI BURCHERT</span>
            <p className="mt-2 text-sm">Meisterqualität aus dem Allgäu.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition">Impressum</a>
            <a href="#" className="hover:text-white transition">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}