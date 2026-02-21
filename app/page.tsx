import React from 'react';
import { Phone, Mail, MapPin, Hammer, Home, Sparkles, ChevronRight, Menu, CheckCircle2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-wood-100 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo Icon */}
            <div className="h-12 w-12 relative overflow-hidden rounded-md border border-wood-100 shadow-sm">
              <img src="/logo-icon.png" alt="Schreinerei Burchert Logo" className="w-full h-full object-contain p-1" />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-brand-yellow uppercase tracking-wider">Schreinerei</span>
              <span className="font-bold text-2xl text-brand-dark tracking-tight">BURCHERT</span>
              <span className="text-[10px] text-wood-500 tracking-widest uppercase">... die Komplettlösung</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-wood-800 font-medium items-center">
            <a href="#philosophie" className="hover:text-brand-yellow transition">Philosophie</a>
            <a href="#services" className="hover:text-brand-yellow transition">Leistungen</a>
            <a href="#contact" className="px-6 py-2.5 bg-brand-yellow text-white font-bold rounded-lg hover:bg-orange-500 transition shadow-md shadow-orange-100 transform hover:-translate-y-0.5">
              Kontakt
            </a>
          </div>
          <Menu className="md:hidden text-wood-700" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Modernes Wohnen mit Holz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/80 to-wood-900/30" />
        </div>
        
        <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-yellow/90 backdrop-blur text-white text-sm font-bold mb-8 shadow-lg">
              <Sparkles size={16} /> MEISTERBETRIEB IM ALLGÄU
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Wohn(t)räume<br />
              <span className="text-brand-yellow">nach Maß.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-light">
              Wir verwandeln Ihre Ideen in handgefertigte Realität. Individuell, hochwertig und mit der Wärme echten Holzes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-yellow text-white rounded-xl text-lg font-bold hover:bg-orange-500 transition shadow-xl hover:scale-105 transform duration-200 flex items-center justify-center gap-2">
                Projekt anfragen <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition flex items-center justify-center">
                Unsere Arbeiten
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophie Section */}
      <section id="philosophie" className="py-24 bg-wood-50 relative overflow-hidden">
        {/* Decorative Logo Watermark */}
        <img src="/logo-abstract.png" className="absolute -left-20 top-20 w-[500px] opacity-[0.03] rotate-12 pointer-events-none mix-blend-multiply" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-1 bg-brand-yellow mb-6"></div>
              <h2 className="text-4xl font-bold text-wood-900 mb-6 leading-tight">Die Wärme des Holzes spüren.</h2>
              <p className="text-lg text-wood-700 leading-relaxed mb-6">
                Wenn wir Ihr besonderes Möbelstück liefern, streichen Menschen oftmals mit der flachen Hand über ihr neues Holzprodukt. Dieser Moment – wenn Sie die natürliche Wärme und Haptik spüren – ist unser Antrieb.
              </p>
              <p className="text-lg text-wood-700 leading-relaxed mb-8">
                Wir sind ein moderner und gleichzeitig erfahrener Schreinereibetrieb. Wir beherrschen das traditionelle Handwerk genauso virtuos wie den Umgang mit modernen Werkstoffen wie Corian®, Glas und Metall.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-yellow/10 p-1 rounded-full"><CheckCircle2 className="text-brand-yellow" size={20} /></div>
                  <span className="text-wood-800 font-medium">Terminliche Zuverlässigkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-yellow/10 p-1 rounded-full"><CheckCircle2 className="text-brand-yellow" size={20} /></div>
                  <span className="text-wood-800 font-medium">Echte Kundenfreundlichkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-yellow/10 p-1 rounded-full"><CheckCircle2 className="text-brand-yellow" size={20} /></div>
                  <span className="text-wood-800 font-medium">Innovative Materialkombinationen</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-yellow rounded-2xl rotate-3 opacity-20 group-hover:rotate-2 transition duration-500"></div>
              <img src="/kitchen.png" alt="Handwerk im Detail" className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover" />
              
              {/* Badge */}
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-wood-500 text-sm font-bold uppercase mb-1">Unser Anspruch</p>
                <p className="text-wood-900 font-bold italic">"Alles ist Ganzheit und lebt voneinander."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm">Was wir tun</span>
            <h2 className="text-5xl font-bold text-wood-900 mt-2 mb-6">Unser Handwerk</h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              Wir gestalten Ihre Räume so, dass sie perfekt zu Ihnen passen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1: Innenausbau */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6 shadow-lg">
                <img src="/innenausbau.png" alt="Innenausbau" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Hammer size={32} className="text-brand-yellow mb-3" />
                  <h3 className="text-2xl font-bold">Innenausbau & Treppen</h3>
                </div>
              </div>
              <p className="text-wood-600 leading-relaxed px-2">
                Ob Treppen, Türen oder komplette Raumkonzepte. Wir schaffen Atmosphäre durch durchdachte Raumlösungen und hochwertige Materialien.
              </p>
            </div>

            {/* Service 2: Möbel */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6 shadow-lg">
                <img src="/kitchen.png" alt="Küche" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Home size={32} className="text-brand-yellow mb-3" />
                  <h3 className="text-2xl font-bold">Möbel & Küchen</h3>
                </div>
              </div>
              <p className="text-wood-600 leading-relaxed px-2">
                Keine Massenware. Wir fertigen Möbelstücke, die exakt nach Ihren Vorstellungen konzipiert sind. Funktional, langlebig und wunderschön.
              </p>
            </div>

            {/* Service 3: Sauna */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6 shadow-lg">
                <img src="/sauna.png" alt="Sauna" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Sparkles size={32} className="text-brand-yellow mb-3" />
                  <h3 className="text-2xl font-bold">Saunabau</h3>
                </div>
              </div>
              <p className="text-wood-600 leading-relaxed px-2">
                Ihr privater Rückzugsort. Wir planen und bauen Saunen, die sich harmonisch in Ihr Zuhause einfügen und Wellness erlebbar machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-wood-900 text-white relative overflow-hidden">
        {/* Background Decorative Icon */}
        <img src="/logo-icon.png" className="absolute -right-24 -bottom-24 w-[600px] opacity-[0.05] grayscale rotate-12 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Kontakt</span>
              <h2 className="text-5xl font-bold mb-6 leading-tight">Lust auf <span className="text-brand-yellow">Veränderung?</span></h2>
              <p className="text-wood-200 text-xl mb-10 leading-relaxed">
                Wir beraten Sie gerne unverbindlich zu Ihrem Vorhaben – egal ob Einzelstück oder Komplettausbau.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                  <div className="bg-brand-yellow p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                    <Phone size={28} className="text-wood-900" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400 uppercase tracking-wider font-semibold">Rufen Sie uns an</p>
                    <p className="text-2xl font-bold font-mono">+49 (0) 8321 123456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                  <div className="bg-brand-yellow p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                    <Mail size={28} className="text-wood-900" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400 uppercase tracking-wider font-semibold">Schreiben Sie uns</p>
                    <p className="text-2xl font-bold">info@schreinerei-allgaeu.de</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full bg-white text-wood-900 p-10 rounded-3xl shadow-2xl border-t-8 border-brand-yellow">
              <h3 className="text-2xl font-bold mb-6 text-wood-800">Projekt anfragen</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">E-Mail</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition" placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">Wie können wir helfen?</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition" placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea>
                </div>
                <button className="w-full py-4 bg-brand-yellow text-white font-bold text-lg rounded-xl hover:bg-orange-500 transition shadow-lg transform hover:-translate-y-1">
                  Anfrage absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-950 text-wood-400 py-16 border-t border-wood-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 relative overflow-hidden rounded bg-white/5 border border-white/10 p-1">
                  <img src="/logo-icon.png" className="w-full h-full object-contain opacity-80" />
                </div>
                <div className="font-bold text-xl text-white tracking-tight leading-none">
                  SCHREINEREI <br /><span className="text-brand-yellow">BURCHERT</span>
                </div>
              </div>
              <p className="max-w-xs text-wood-500">
                Ihr Schreinermeister Heinrich Burchert.<br/>
                Qualität und Tradition aus dem Allgäu.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-brand-yellow transition">Startseite</a></li>
                  <li><a href="#services" className="hover:text-brand-yellow transition">Leistungen</a></li>
                  <li><a href="#about" className="hover:text-brand-yellow transition">Über uns</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Rechtliches</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                  <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-wood-900 mt-12 pt-8 text-center text-sm text-wood-600">
            © 2026 Schreinerei Burchert. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}