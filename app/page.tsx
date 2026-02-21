import React from 'react';
import { Phone, Mail, MapPin, Hammer, Home, Sparkles, ChevronRight, Menu, CheckCircle2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-wood-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder - wird ersetzt sobald Datei da ist */}
            <div className="font-bold text-2xl text-wood-700 tracking-tight flex flex-col leading-none">
              <span>SCHREINEREI</span>
              <span className="text-wood-500 text-lg">BURCHERT</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-wood-800 font-medium items-center">
            <a href="#philosophie" className="hover:text-wood-500 transition">Philosophie</a>
            <a href="#services" className="hover:text-wood-500 transition">Leistungen</a>
            <a href="#contact" className="px-5 py-2 bg-wood-600 text-white rounded-lg hover:bg-wood-700 transition shadow-md shadow-wood-200">
              Kontakt aufnehmen
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-wood-500/80 backdrop-blur text-white text-sm font-semibold mb-6 border border-white/20 tracking-wider">
              MEISTERBETRIEB IM ALLGÄU
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Wohn(t)räume<br />
              <span className="text-wood-200">nach Maß.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-light">
              Wir verwandeln Ihre Ideen in handgefertigte Realität. Von der ersten Skizze bis zum spürbaren Ergebnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-wood-600 text-white rounded-xl text-lg font-semibold hover:bg-wood-500 transition shadow-xl hover:scale-105 transform duration-200 flex items-center justify-center gap-2">
                Projekt besprechen <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition flex items-center justify-center">
                Unsere Arbeiten
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophie Section */}
      <section id="philosophie" className="py-24 bg-wood-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-wood-900 mb-6 leading-tight">Die Wärme des Holzes spüren.</h2>
              <p className="text-lg text-wood-700 leading-relaxed mb-6">
                Wenn wir Ihr besonderes Möbelstück liefern, streichen Menschen oftmals mit der flachen Hand über ihr neues Holzprodukt. Dieser Moment – wenn Sie die natürliche Wärme und Haptik spüren – ist unser Antrieb.
              </p>
              <p className="text-lg text-wood-700 leading-relaxed mb-8">
                Wir sind ein moderner und gleichzeitig erfahrener Schreinereibetrieb. Wir beherrschen das traditionelle Handwerk genauso virtuos wie den Umgang mit modernen Werkstoffen wie Corian®, Glas und Metall.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-wood-500" />
                  <span className="text-wood-800 font-medium">Terminliche Zuverlässigkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-wood-500" />
                  <span className="text-wood-800 font-medium">Echte Kundenfreundlichkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-wood-500" />
                  <span className="text-wood-800 font-medium">Innovative Materialkombinationen</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-wood-200 rounded-2xl rotate-3 opacity-50"></div>
              <img src="/kitchen.png" alt="Handwerk im Detail" className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-wood-500 font-bold tracking-widest uppercase text-sm">Was wir tun</span>
            <h2 className="text-5xl font-bold text-wood-900 mt-2 mb-6">Unser Handwerk</h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              Alles ist Ganzheit und lebt voneinander. Wir gestalten Ihre Räume so, dass sie perfekt zu Ihnen passen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1: Innenausbau (NEU) */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6">
                <img src="/innenausbau.png" alt="Innenausbau" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition">Innenausbau & Treppen</h3>
              <p className="text-wood-600 leading-relaxed">
                Ob Treppen, Türen oder komplette Raumkonzepte. Wir schaffen Atmosphäre durch durchdachte Raumlösungen und hochwertige Materialien.
              </p>
            </div>

            {/* Service 2: Möbel */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6">
                <img src="/kitchen.png" alt="Küche" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition">Möbel & Küchen</h3>
              <p className="text-wood-600 leading-relaxed">
                Keine Massenware. Wir fertigen Möbelstücke, die exakt nach Ihren Vorstellungen konzipiert sind. Funktional, langlebig und wunderschön.
              </p>
            </div>

            {/* Service 3: Sauna */}
            <div className="group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-2xl relative mb-6">
                <img src="/sauna.png" alt="Sauna" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition">Saunabau</h3>
              <p className="text-wood-600 leading-relaxed">
                Ihr privater Rückzugsort. Wir planen und bauen Saunen, die sich harmonisch in Ihr Zuhause einfügen und Wellness erlebbar machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-wood-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-6 leading-tight">Lust auf Veränderung?</h2>
              <p className="text-wood-200 text-xl mb-10 leading-relaxed">
                Service spielt für uns eine zentrale Rolle. Wir beraten Sie gerne unverbindlich zu Ihrem Vorhaben – egal ob Einzelstück oder Komplettausbau.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="bg-wood-800 p-4 rounded-full group-hover:bg-wood-700 transition">
                    <Phone size={28} className="text-wood-300" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400 uppercase tracking-wider font-semibold">Rufen Sie uns an</p>
                    <p className="text-2xl font-bold font-mono">+49 (0) 8321 123456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="bg-wood-800 p-4 rounded-full group-hover:bg-wood-700 transition">
                    <Mail size={28} className="text-wood-300" />
                  </div>
                  <div>
                    <p className="text-sm text-wood-400 uppercase tracking-wider font-semibold">Schreiben Sie uns</p>
                    <p className="text-2xl font-bold">info@schreinerei-allgaeu.de</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full bg-white text-wood-900 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-wood-800">Nachricht senden</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-4 focus:ring-wood-100 outline-none transition" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">E-Mail</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-4 focus:ring-wood-100 outline-none transition" placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wood-600 mb-2">Wie können wir helfen?</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-wood-50 border border-wood-200 focus:border-wood-500 focus:ring-4 focus:ring-wood-100 outline-none transition" placeholder="Erzählen Sie uns von Ihrem Projekt..."></textarea>
                </div>
                <button className="w-full py-4 bg-wood-600 text-white font-bold text-lg rounded-xl hover:bg-wood-700 transition shadow-lg transform hover:-translate-y-1">
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
              <div className="font-bold text-2xl text-white tracking-tight mb-4">
                SCHREINEREI <span className="text-wood-500">BURCHERT</span>
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
                  <li><a href="#" className="hover:text-white transition">Startseite</a></li>
                  <li><a href="#services" className="hover:text-white transition">Leistungen</a></li>
                  <li><a href="#about" className="hover:text-white transition">Über uns</a></li>
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