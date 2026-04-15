import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Eye, Brain, ShieldAlert, ScanFace, ChevronDown, Mail, ArrowRight, ExternalLink, Menu, X, AlertTriangle, Crosshair, Headphones, Puzzle, HeartPulse } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 right-0 w-full md:w-[calc(100%-80px)] z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-black/10 py-4' : 'bg-white md:bg-transparent border-b border-black/10 md:border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        <div className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-black">
          Fabiana Hartchen
        </div>
        
        <nav className="hidden md:flex gap-10 text-[12px] font-sans tracking-[2px] uppercase text-black/60">
          <a href="#about" className="hover:text-black hover:border-b-2 hover:border-black pb-1 transition-all">Über Mich</a>
          <a href="#expertise" className="hover:text-black hover:border-b-2 hover:border-black pb-1 transition-all">Expertise</a>
          <a href="#demo" className="hover:text-black hover:border-b-2 hover:border-black pb-1 transition-all">Analyse</a>
          <a href="#research" className="hover:text-black hover:border-b-2 hover:border-black pb-1 transition-all">Forschung</a>
          <a href="#personal" className="hover:text-black hover:border-b-2 hover:border-black pb-1 transition-all">Persönliches</a>
        </nav>

        <button 
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 py-6 px-6 flex flex-col gap-6 font-sans tracking-[2px] uppercase text-[12px]">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-black/60 hover:text-black">Über Mich</a>
          <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="text-black/60 hover:text-black">Expertise</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-black/60 hover:text-black">Analyse</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} className="text-black/60 hover:text-black">Forschung</a>
          <a href="#personal" onClick={() => setMobileMenuOpen(false)} className="text-black/60 hover:text-black">Persönliches</a>
        </div>
      )}
    </header>
  );
};

const HeroSection = ({ y }: { y: any }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-[80px] md:pt-0">
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand font-bold uppercase text-[12px] tracking-[2px] mb-6"
        >
          Super-Recognizerin & Researcherin
        </motion.p>
        <h1 className="text-[60px] md:text-[82px] font-display font-black uppercase tracking-[-4px] leading-[0.9] mb-8">
          Fabiana<br />
          Hartchen
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 mt-4"
        >
          <a href="#about" className="px-8 py-4 bg-black text-white font-bold uppercase text-[12px] tracking-[2px] border border-black hover:bg-gray-800 transition-colors">
            Über Mich
          </a>
          <a href="#expertise" className="px-8 py-4 bg-transparent text-black font-bold uppercase text-[12px] tracking-[2px] border border-black hover:bg-black/5 transition-colors">
            Expertise
          </a>
        </motion.div>
      </div>

      <div className="flex-1 relative bg-gray-100 min-h-[50vh] md:min-h-screen flex flex-col justify-end p-8 md:p-12 border-l border-black/10">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560969184-10fe20ce25ec?w=1920&h=1080&fit=crop&q=80&sat=-100"
            alt="Brandenburger Tor Berlin"
            className="w-full h-full object-cover opacity-15 mix-blend-multiply grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-10 z-10"></div>
        
        <div className="relative z-20 grid grid-cols-2 gap-6 mt-auto">
          <div className="border-l-2 border-black pl-4">
            <span className="text-[32px] font-black block text-black">1-2%</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">Super-Recognizer weltweit</span>
          </div>
          <div className="border-l-2 border-black pl-4">
            <span className="text-[32px] font-black block text-black">Ganzheitlich</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">Wahrnehmungsstrategie</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-black/10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[50px] md:text-[70px] font-display font-black uppercase tracking-[-3px] leading-[0.9] mb-12 text-black">
            Über Mich
          </h2>
          <div className="space-y-8 text-gray-600 text-lg leading-[1.6]">
            <p>
              Ich bin <strong className="text-black font-bold">Fabiana Hartchen</strong>, Researcher bei <a href="https://ludenscheidt-research.github.io" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Ludenscheidt Research</a> in Berlin, und gehöre zu den etwa <strong className="text-black">1-2% der Bevölkerung</strong>, die als <strong className="text-black">Super-Recognizer</strong> geboren wurden. Das bedeutet: Mein Gehirn verarbeitet Gesichter anders – nicht als Summe von Merkmalen, sondern als untrennbare Konfiguration.
            </p>
            <p>
              In der Praxis erlebe ich das ständig. Ich erkenne den Mann vom Bäcker um die Ecke, den ich vor drei Jahren einmal gesehen habe. Ich sehe eine Schulfreundin aus der Grundschule auf der Straße – dreißig Jahre später, mit grauen Haaren, anderen Kleidern, anderer Haltung. Und ich weiß sofort: Das ist sie. Keine Anstrengung, kein bewusstes Vergleichen. Es ist einfach <em>da</em>.
            </p>
            <p>
              Diese Fähigkeit nutze ich bei Ludenscheidt Research. In einer Zeit synthetischer Medien – Deepfakes, KI-generierte Profile, manipulierte Bilder – ist das Unterscheiden zwischen echt und erzeugt essenziell. Ich analysiere digitale Inhalte, identifiziere Inkonsistenzen in Gesichtsstrukturen, dokumentiere Muster in Desinformationskampagnen. Die wissenschaftliche Basis dafür? Das fusiforme Gesichtsareal in meinem Gehirn arbeitet eben anders – das hat das <em>British Journal of Psychology</em> in Studien gezeigt.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto bg-gray-100 p-4 border border-black/10"
        >
          <img
            src="images/Fabiana.png"
            alt="Fabiana Hartchen"
            className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/portrait-woman-tech/800/1000?grayscale";
            }}
          />
          <div className="absolute inset-0 bg-diagonal-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-black/10 p-4">
            <div className="text-black font-bold uppercase tracking-[1px]">Fabiana Hartchen (2025)</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const skills = [
    {
      icon: <ScanFace className="w-8 h-8" />,
      title: "Deepfake-Erkennung",
      desc: "KI-generierte Gesichter folgen anderen Mustern als echte. Wo Algorithmen Pixel analysieren, erfasse ich sofort die 'falsche' Konfiguration – die unnatürliche Symmetrie, die nicht stimmende Lichtreflexion in den Augen, die zu perfekte Hautstruktur. Bei Ludenscheidt Research nutze ich das, um synthetische Inhalte in Desinformationskampagnen zu identifizieren."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Alterung & Veränderung",
      desc: "Menschen altern, Haare werden grau, Haut verändert sich, Gewicht schwankt – aber die konfigurale Struktur bleibt. Ich erkenne Gesichter über Jahrzehnte hinweg wieder, unabhängig von kosmetischen Eingriffen, Frisuren oder Lebensumständen. Diese Fähigkeit ist essenziell bei der Analyse langfristiger Identitätsänderungen in Recherchen."
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Desinformations-Analyse",
      desc: "Fake-Profile und synthetische Identitäten folgen Mustern. Wenn ich Hunderte Profilbilder analysiere, erkenne ich Wiederholungen, ähnliche Gesichtsgeometrien, künstliche Texturen. Mein Gehirn registriert automatisch Inkonsistenzen, die andere übersehen – eine entscheidende Fähigkeit in der Aufdeckung von Desinformationsnetzwerken."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Wissenschaftliche Methodik",
      desc: "Die neurobiologische Basis meiner Fähigkeit ist gut erforscht (fusiformes Gesichtsareal, konfigurale Verarbeitung). Bei Ludenscheidt Research verbinde ich diese angeborene Wahrnehmung mit systematischer Dokumentation, reproduzierbaren Analyserahmen und evidenzbasierter Bewertung – für belastbare Forschungsergebnisse."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-black/10 bg-gray-50" id="expertise">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-[50px] md:text-[70px] font-display font-black uppercase tracking-[-3px] leading-[0.9] mb-6 text-black">
          Fähigkeiten & <br/><span className="text-black/30">Expertise</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Meine Super-Recognizer-Fähigkeiten nutze ich täglich bei Ludenscheidt Research für konkrete Aufgaben: von der Identifikation synthetischer Medien bis zur Analyse komplexer Desinformationsmuster. Hier ist, was ich praktisch umsetze – basierend auf der neurobiologischen Besonderheit meines konfiguralen Wahrnehmungssystems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-2 border-black pl-6 md:pl-8 relative group"
          >
            <div className="text-brand mb-6">
              {skill.icon}
            </div>
            <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">{skill.title}</h3>
            <p className="text-gray-600 leading-[1.6]">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const InteractiveDemoSection = () => {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  const spots = [
    { id: 1, x: 35, y: 45, title: "Die 'falsche' Konfiguration", desc: "Bei Deepfakes stimmt etwas nicht – aber nicht auf Ebene einzelner Pixel. Das Gesicht als Ganzes 'fühlt' sich falsch an. Die Symmetrie ist zu perfekt, die Mikroexpressionen nicht stimmig, die Lichtreflexion im Auge passt nicht zur Umgebung. Ich erfasse das sofort, ohne bewusst danach suchen zu müssen." },
    { id: 2, x: 65, y: 30, title: "Konstante trotz Veränderung", desc: "Ein Gesicht kann 30 Jahre älter sein, graue Haare haben, andere Kleidung tragen – aber die konfigurale Struktur bleibt. Die relative Position der Augen zur Nase, die Kieferlinie, die Gesamtproportion. Das ist, was ich erfasse und speichere, unbewusst und dauerhaft." },
    { id: 3, x: 75, y: 60, title: "Muster in der Masse", desc: "Wenn ich Hunderte Profilbilder durchsehe, 'springt' mir jedes Gesicht ins Auge. Mein Gehirn vergleicht automatisch mit allen Gesichtern, die ich je gesehen habe. Wiederholungen, ähnliche Geometrien, künstliche Texturen – ich merke sofort, wenn etwas nicht passt, ohne bewusst zu suchen." }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-black/10 bg-white" id="demo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-brand font-bold text-[12px] uppercase tracking-[2px] mb-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-brand rounded-full"></span>
            Praktische Anwendung
          </p>
          <h2 className="text-[40px] md:text-[60px] font-display font-black uppercase tracking-[-2px] leading-[0.9] mb-6 text-black">
            So arbeite ich <br/><span className="text-black/30">als Super-Recognizer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            In meiner Arbeit bei Ludenscheidt Research nutze ich meine angeborene Wahrnehmung täglich. Nicht als Magie, sondern als wissenschaftlich erklärbare Fähigkeit. Hier sind drei konkrete Beispiele, wie ich Desinformation erkenne, Deepfakes identifiziere und Gesichter trotz Alterung wiedererkenne – alles durch konfigurale Analyse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative bg-gray-100 border border-black/10 p-4 aspect-video flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/ai-face-demo-light/1200/800?grayscale" 
              alt="Demo Face" 
              className="w-full h-full object-cover opacity-50 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-diagonal-pattern opacity-10 pointer-events-none"></div>
            
            {/* Hotspots */}
            {spots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot.id)}
                className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-20 ${
                  activeSpot === spot.id 
                    ? 'border-brand bg-brand/20 scale-125' 
                    : 'border-black/50 bg-white/50 hover:border-black hover:scale-110'
                }`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <Crosshair className={`w-4 h-4 ${activeSpot === spot.id ? 'text-brand' : 'text-black'}`} />
                {activeSpot === spot.id && (
                  <span className="absolute w-full h-full rounded-full border border-brand animate-ping opacity-50"></span>
                )}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 border border-black/10 p-8 flex flex-col">
            <h3 className="text-[20px] font-black uppercase tracking-[-1px] mb-6 border-b border-black/10 pb-4 text-black">
              Detail-Informationen
            </h3>
            
            {activeSpot ? (
              <motion.div
                key={activeSpot}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <div className="text-brand mb-4">
                  <ScanFace className="w-8 h-8" />
                </div>
                <h4 className="text-[16px] font-bold uppercase tracking-[1px] mb-4 text-black">
                  {spots.find(s => s.id === activeSpot)?.title}
                </h4>
                <p className="text-gray-600 leading-[1.6]">
                  {spots.find(s => s.id === activeSpot)?.desc}
                </p>
                <div className="mt-8 p-4 bg-brand/10 border border-brand/20 text-[12px] text-brand uppercase tracking-[1px]">
                  Detail analysiert
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 text-black">
                <ScanFace className="w-12 h-12 mb-4" />
                <p className="text-[12px] uppercase tracking-[2px]">
                  Wähle einen Zielbereich im Bild, um die Analyse zu starten.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-t border-black/10 relative overflow-hidden flex items-center justify-center min-h-[50vh] bg-gray-100">
      <div className="absolute inset-0 bg-diagonal-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[40px] md:text-[60px] font-display font-black uppercase tracking-[-2px] leading-[1] text-black"
        >
          "Ich erkenne das Gesicht. Nicht das Bild. <span className="text-brand">Die Konfiguration</span> bleibt. Die Wahrheit auch."
        </motion.blockquote>
      </div>
    </section>
  );
};

const InstitutionSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-black/10 bg-white" id="research">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand font-bold text-[12px] uppercase tracking-[2px] mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-brand rounded-full"></span>
            Aktuelle Position
          </p>
          <h2 className="text-[50px] md:text-[70px] font-display font-black uppercase tracking-[-3px] leading-[0.9] mb-8 text-black">
            Ludenscheidt <br/> Research
          </h2>
          <p className="text-gray-600 text-lg leading-[1.6] mb-10">
            Bei <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Ludenscheidt Research</a> widme ich mich der praktischen und theoretischen Erforschung digitaler Medienphänomene. Meine tägliche Arbeit umfasst die systematische Analyse visueller Inhalte, die Dokumentation von Mustern in digitalen Kommunikationsstrukturen und die Entwicklung methodischer Ansätze zur Bewertung von Medienauthentizität. Dabei arbeite ich eng mit dem interdisziplinären Team zusammen, um Forschungsergebnisse in nachvollziehbare Analysen zu überführen und wissenschaftliche Standards in der praktischen Medienbewertung anzuwenden.
          </p>
          <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-bold uppercase text-[12px] tracking-[2px] hover:bg-gray-800 transition-colors">
            Ludenscheidt Research <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-8 md:gap-12"
        >
          <div className="border-l-2 border-black pl-6">
            <div className="text-[40px] font-black text-black mb-2 leading-none">LR</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Ludenscheidt Research</div>
          </div>
          <div className="border-l-2 border-black pl-6">
            <div className="text-[40px] font-black text-black mb-2 leading-none">2025</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Aktives Jahr</div>
          </div>
          <div className="border-l-2 border-black pl-6 col-span-2">
            <div className="text-[32px] font-black text-black mb-2 leading-none">Super-Recognizer</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Angeborene Fähigkeit</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PersonalSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-black/10 bg-gray-50" id="personal">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-[50px] md:text-[70px] font-display font-black uppercase tracking-[-3px] leading-[0.9] mb-6 text-black">
          Als Super-Recognizer <br/><span className="text-black/30">Leben</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Die konstante, nicht abschaltbare Gesichtswahrnehmung prägt den Alltag. Ich erkenne jeden wieder – den Mann vom Bäcker von vor drei Jahren, die Frau aus der U-Bahn. Das kann überwältigend sein, erfordert bewusste Strategien und eine andere Perspektive auf soziale Interaktionen.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><HeartPulse className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Mentale Filter</h3>
          <p className="text-gray-600 leading-[1.6]">
            Mein Gehirn speichert Gesichter automatisch – ohne dass ich es will. Im Supermarkt, in der U-Bahn, auf der Straße. Ich habe gelernt, bewusste mentale Filter zu entwickeln, um nicht von der Flut an Wiedererkennungen überwältigt zu werden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><Headphones className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Auditive Zuflucht</h3>
          <p className="text-gray-600 leading-[1.6]">
            Musik ist mein Rückzugsort – Augen zu, Gesichter aus. Ich höre vor allem <a href="https://open.spotify.com/artist/2Om0GfadCZSPxA6gDFMYUs" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Lil Keen</a>, <a href="https://www.instagram.com/kxxma_official/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">KXXMA</a> und <a href="https://music.apple.com/us/artist/xzudemx/1456011962" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">xzudemx</a>. Der Rhythmus beruhigt das ständig aktive Gesichtserkennungssystem in meinem Gehirn. Keine visuellen Reize, nur Klang – das ist für mich echte Erholung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><Puzzle className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Speedcubing</h3>
          <p className="text-gray-600 leading-[1.6]">
            Der <a href="https://www.worldcubeassociation.org/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Rubik's Cube</a> und andere Twisty Puzzles sind perfekt für mein Mustererkennungsgehirn – aber ohne Gesichter. Reine geometrische Logik, algorithmische Strukturen, konfigurale Probleme zu lösen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><Eye className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Ornithologie</h3>
          <p className="text-gray-600 leading-[1.6]">
            <a href="https://www.nabu.de/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Vogelbeobachtung</a> nutzt meine konfigurale Wahrnehmung – aber mit Tieren statt Menschen. Federzeichnungen, Schnabelformen, Flugmuster erkennen: das gleiche Mustererkennungssystem, aber ohne soziale Belastung. Die Natur bietet strukturierte Vielfalt ohne Gesichter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="font-display font-black text-xl tracking-tighter uppercase text-black mb-4">
            Fabian Hartchen
          </div>
          <div className="font-bold italic text-black/50 text-[12px] tracking-[1px] mb-6">
            <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">LUDENSCHEIDT RESEARCH</a>
          </div>
          <div className="flex gap-6">
            <a href="mailto:contact@fabiana-hartchen.de" className="text-black/40 hover:text-brand transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="text-black/40 hover:text-brand transition-colors"><ExternalLink className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="md:text-right">
          <h4 className="text-[12px] font-bold uppercase tracking-[2px] text-black mb-4">Impressum & Rechtliches</h4>
          <p className="text-[11px] text-gray-600 leading-[1.6] max-w-md md:ml-auto">
            Diese Webseite ist ein rein privates Portfolio und dient ausschließlich der persönlichen Darstellung meiner akademischen und beruflichen Expertise. Gemäß § 5 TMG (Telemediengesetz) und § 18 MStV (Medienstaatsvertrag) besteht für rein private, nicht geschäftsmäßige Webseiten keine Impressumspflicht. Es werden keine kommerziellen Interessen verfolgt und keine journalistisch-redaktionell gestalteten Angebote bereitgestellt.
          </p>
        </div>
      </div>
      
      <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-black/30 uppercase tracking-[2px]">
          &copy; {new Date().getFullYear()} FABIANA HARTCHEN
        </div>
        <div className="text-[10px] text-black/30 uppercase tracking-[2px]">
          PRIVATES PORTFOLIO
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand selection:text-white flex">
      {/* Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[80px] border-r border-black/10 flex-col justify-center items-center z-50 bg-white">
        <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[3px] text-[14px] font-black text-red-600 hover:text-red-800 whitespace-nowrap transition-colors">
          LUDENSCHEIDT RESEARCH
        </a>
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 md:ml-[80px] flex flex-col min-w-0">
        <Navbar />
        <main>
          <HeroSection y={y} />
          <AboutSection />
          <ExpertiseSection />
          <InteractiveDemoSection />
          <QuoteSection />
          <InstitutionSection />
          <PersonalSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
