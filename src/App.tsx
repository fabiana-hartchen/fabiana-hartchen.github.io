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
          Dr. F. Hartchen
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
          Super-Recognizerin & Kognitive Neurowissenschaftlerin
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[60px] md:text-[82px] font-display font-black uppercase tracking-[-4px] leading-[0.9] mb-8"
        >
          Analytische <br />
          Methodik
        </motion.h1>
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
            src="https://picsum.photos/seed/cyber-eye-light/1920/1080?blur=1"
            alt="Abstract Eye"
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-10 z-10"></div>
        
        <div className="relative z-20 grid grid-cols-2 gap-6 mt-auto">
          <div className="border-l-2 border-black pl-4">
            <span className="text-[32px] font-black block text-black">1-2%</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">Der Bevölkerung</span>
          </div>
          <div className="border-l-2 border-black pl-4">
            <span className="text-[32px] font-black block text-black">99.9%</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">Präzisionsrate</span>
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
              Mein Name ist <strong className="text-black font-bold">Dr. Fabiana Hartchen</strong>. Als Junior Researcher bei <strong className="text-black font-bold">Ludenscheidt Research</strong> widme ich mich der Entschlüsselung digitaler Täuschungen. Ich gehöre zu den 1-2% der Bevölkerung, die als <strong className="text-black font-bold">Super-Recognizer</strong> klassifiziert werden – eine neurologische Besonderheit, die mir eine übermenschliche Präzision bei der Gesichtserkennung verleiht.
            </p>
            <p>
              Nach meiner Promotion in <strong className="text-black font-bold">Kognitiver Neurowissenschaft an der Universität Bonn</strong> habe ich meine Forschung auf die Schnittstelle zwischen menschlicher Kognition und künstlicher Intelligenz fokussiert. Während moderne KI-Systeme bei der Erkennung von Deepfakes und synthetischen Medien oft an ihre Grenzen stoßen, erlaubt mir meine einzigartige neuronale Verarbeitung, subtilste Unstimmigkeiten in Mimik, Hautstruktur und Augenbewegungen zu identifizieren.
            </p>
            <p>
              In einer Zeit, in der Fake-News und Desinformationskampagnen zunehmend auf KI-generierte Inhalte setzen, nutze ich diese Fähigkeit, um die Wahrheit hinter dem Pixel aufzudecken und die Mechanismen der sublimativen Beeinflussung zu erforschen.
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
            src="/Fabiana.png"
            alt="Dr. Fabiana Hartchen"
            className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/portrait-woman-tech/800/1000?grayscale";
            }}
          />
          <div className="absolute inset-0 bg-diagonal-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-black/10 p-4">
            <div className="text-[10px] text-brand uppercase tracking-[2px] mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse"></span>
              Identität verifiziert
            </div>
            <div className="text-black font-bold uppercase tracking-[1px]">Dr. Fabiana Hartchen</div>
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
      title: "Gesichtserkennung & KI-Detektion",
      desc: "Die Identifikation von synthetischen Gesichtern (Deepfakes, GAN-generierte Porträts) durch die Analyse mikroskopischer Inkonsistenzen in Belichtung, Asymmetrie und Textur. Wo algorithmische Detektoren durch neue KI-Modelle ausgetrickst werden, erkennt mein Gehirn die unnatürliche 'Uncanny Valley'-Signatur mit 99,9%iger Präzision."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Fake-News-Analyse",
      desc: "Untersuchung visueller Medien in Nachrichtenkontexten auf Manipulationen. Durch den Abgleich von biometrischen Merkmalen über verschiedene, oft qualitativ minderwertige Quellen hinweg, verifiziere ich die Authentizität von Bild- und Videomaterial in Echtzeit."
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Desinformationsbekämpfung",
      desc: "Identifikation von 'Fake-Influencern' und synthetischen Identitäten. In groß angelegten, staatlichen oder privaten Desinformationskampagnen werden oft hunderte KI-generierte Profile genutzt. Ich isoliere die wiederkehrenden Artefakte und entlarve das Netzwerk dahinter."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Sublimative Beeinflussung",
      desc: "Erforschung, wie subtile, oft KI-gesteuerte Veränderungen in der visuellen Darstellung von Personen (z.B. Mikromimik in politischen Kampagnen) die unbewusste Wahrnehmung und Meinungsbildung von Betrachtern manipulieren."
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
          Meine Forschung setzt dort an, wo algorithmische Mustererkennung an ihre Grenzen stößt. Eine seltene Kombination aus angeborener Fähigkeit und wissenschaftlicher Methodik.
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
    { id: 1, x: 35, y: 45, title: "Pupillen-Asymmetrie", desc: "KI-Modelle haben oft Schwierigkeiten, perfekt runde und symmetrische Pupillen mit korrekten Lichtreflexionen zu generieren." },
    { id: 2, x: 65, y: 30, title: "Unnatürlicher Haaransatz", desc: "Der Übergang zwischen Haut und Haaren verschwimmt oft oder weist unlogische Strähnenverläufe auf." },
    { id: 3, x: 75, y: 60, title: "Inkonsistente Beleuchtung", desc: "Schattenwurf am Ohr oder Hals stimmt nicht mit der primären Lichtquelle im Auge überein." }
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
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
            Interaktive Analyse
          </p>
          <h2 className="text-[40px] md:text-[60px] font-display font-black uppercase tracking-[-2px] leading-[0.9] mb-6 text-black">
            Visuelle <br/><span className="text-black/30">Verifikation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Künstliche neuronale Netze suchen nach antrainierten Mustern. Als Super-Recognizerin erfasse ich visuelle Inkonsistenzen intuitiv und ganzheitlich. Die folgende Demo veranschaulicht typische Artefakte synthetischer Medien. Klicke auf die markierten Bereiche, um die Analyse zu starten.
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
              Analyse-Protokoll
            </h3>
            
            {activeSpot ? (
              <motion.div
                key={activeSpot}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <div className="text-brand mb-4">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h4 className="text-[16px] font-bold uppercase tracking-[1px] mb-4 text-black">
                  {spots.find(s => s.id === activeSpot)?.title}
                </h4>
                <p className="text-gray-600 leading-[1.6]">
                  {spots.find(s => s.id === activeSpot)?.desc}
                </p>
                <div className="mt-8 p-4 bg-brand/10 border border-brand/20 text-[12px] text-brand uppercase tracking-[1px]">
                  Status: Synthetisches Artefakt bestätigt
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
          "Technologie liefert Wahrscheinlichkeiten. Menschliche Kognition liefert <span className="text-brand">Gewissheit</span>."
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
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
            Aktuelle Position
          </p>
          <h2 className="text-[50px] md:text-[70px] font-display font-black uppercase tracking-[-3px] leading-[0.9] mb-8 text-black">
            Ludenscheidt Research
          </h2>
          <p className="text-gray-600 text-lg leading-[1.6] mb-10">
            Seit Januar 2024 bin ich als Junior Researcher im Team von Ludenscheidt Research (LR) tätig. Wir sind eine spezialisierte Institution, die sich mit der Erforschung und Analyse von Fake-News, Desinformation und sublimativer Beeinflussung durch Medien beschäftigt.
          </p>
          <a href="#research" className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-bold uppercase text-[12px] tracking-[2px] hover:bg-gray-800 transition-colors">
            Mehr über LR erfahren <ArrowRight className="w-4 h-4" />
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
            <div className="text-[40px] font-black text-black mb-2 leading-none">2024</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Teambeitritt</div>
          </div>
          <div className="border-l-2 border-black pl-6">
            <div className="text-[40px] font-black text-black mb-2 leading-none">1-2%</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Der Bevölkerung</div>
          </div>
          <div className="border-l-2 border-black pl-6 col-span-2">
            <div className="text-[32px] font-black text-black mb-2 leading-none">Dr. rer. nat.</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Kognitive Neurowissenschaft, Uni Bonn</div>
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
          Hinter der <br/><span className="text-black/30">Fassade</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Die ständige Analyse von Gesichtern fordert ihren Tribut. Ein Einblick in meinen Alltag, meine Bewältigungsstrategien und die absolute Notwendigkeit von Achtsamkeit.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><HeartPulse className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Achtsamkeit & Psyche</h3>
          <p className="text-gray-600 leading-[1.6]">
            Seit einigen Jahren kann ich keine Nachrichten wie die Tagesschau oder Reportagen in der ARD Mediathek mehr schauen. Meine natürliche Deepfake-Erkennung lässt sich nicht abschalten, was psychisch extrem stresst. Daher bin ich in regelmäßiger psychiatrischer Behandlung und besuche die Ergotherapie für Achtsamkeits-Training. Denn man muss stets achtsam sein! Achtsamkeit ist wichtig!
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
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Musikalischer Ausgleich</h3>
          <p className="text-gray-600 leading-[1.6]">
            Um meinem Gehirn eine Pause von der visuellen Überstimulation zu geben, flüchte ich mich in die Musik. Am liebsten höre ich Tracks von <a href="https://open.spotify.com/artist/2Om0GfadCZSPxA6gDFMYUs" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4">Lil Keen</a>, <a href="https://open.spotify.com/artist/2Lz9H6cgFrZtpArDLQ1WE1" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4">Maytrixx</a> oder <a href="https://open.spotify.com/artist/3WiX1u4IpVintfUX7Qze06" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4">Raket One</a>.
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
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Zahlenrätsel</h3>
          <p className="text-gray-600 leading-[1.6]">
            Wenn die visuelle Mustererkennung überlastet ist, wechsle ich zur reinen Logik. Zahlenrätsel sind für mich eine Form der Meditation. Sie bieten klare, unbestreitbare Wahrheiten in einer Welt, die zunehmend aus synthetischen Illusionen besteht.
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
            Dr. F. Hartchen
          </div>
          <div className="font-bold italic text-black/50 text-[12px] tracking-[1px] mb-6">
            LUDENSCHEIDT RESEARCH (LR)
          </div>
          <div className="flex gap-6">
            <a href="mailto:dr.hartchen@ludenscheidt-research.de" className="text-black/40 hover:text-brand transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://ludenscheidt-research.de" target="_blank" rel="noreferrer" className="text-black/40 hover:text-brand transition-colors"><ExternalLink className="w-5 h-5" /></a>
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
          &copy; {new Date().getFullYear()} DR. FABIANA HARTCHEN
        </div>
        <div className="text-[10px] text-black/30 uppercase tracking-[2px]">
          STRICTLY CONFIDENTIAL
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
        <div className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[8px] text-[10px] text-black/30 whitespace-nowrap">
          LUDENSCHEIDT RESEARCH • 2024
        </div>
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
