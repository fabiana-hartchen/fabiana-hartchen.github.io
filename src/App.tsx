import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Eye, Brain, ShieldAlert, ScanFace, ChevronDown, Mail, ArrowRight, ExternalLink, Menu, X, AlertTriangle, Crosshair, Headphones, Puzzle, Gamepad2, Heart, Terminal } from 'lucide-react';

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
          Dr. Fabiana Hartchen
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
          Dr. Fabiana<br />
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
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
          <img
            src="images/Koblenz-Deutsches_Eck.png"
            alt="Koblenz Deutsches Eck"
            className="w-full h-full object-cover opacity-15 mix-blend-multiply grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-diagonal-pattern opacity-10 z-10"></div>
        
        <div className="relative z-20 grid grid-cols-3 gap-4 mt-auto">
          <div className="border-l-2 border-black pl-4">
            <span className="text-[28px] font-black block text-black">Savantin</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">Eidetisches Gedächtnis</span>
          </div>
          <div className="border-l-2 border-black pl-4">
            <span className="text-[28px] font-black block text-black">IQ 144</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">99,8. Perzentil</span>
          </div>
          <div className="border-l-2 border-black pl-4">
            <span className="text-[28px] font-black block text-black">0,0002%</span>
            <span className="text-[10px] uppercase tracking-[1px] text-gray-600">1 von 500.000</span>
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
              Ich bin <strong className="text-black font-bold">Dr. Fabiana Hartchen</strong>, Researcher bei <strong className="text-black">Ludenscheidt Research</strong> in Koblenz. Als <strong className="text-black">autistische Savantin</strong> (Asperger-Typus) mit <strong className="text-black">eidetischem Gedächtnis</strong>, einem <strong className="text-black">IQ von 144</strong> (99,8. Perzentil) und <strong className="text-black">Super-Recognizer-Fähigkeit</strong> gehöre ich zu einer der seltensten neurodivergenten Konstellationen überhaupt. Etwa die Hälfte aller Savants liegt im Autismus-Spektrum – bei mir manifestiert sich das als außergewöhnliche kognitive Leistung kombiniert mit spezifischen sozialen Herausforderungen.

Mein Gehirn speichert Erinnerungen nicht linear, sondern räumlich-zeitlich: Jeder Moment, jede Begegnung, jeder Raum existiert in meinem Gedächtnis als dreidimensionale, immersive Szenerie. Ich kann mich an den 14. März 2009 um 15:43 Uhr erinnern – wie das Licht durch das Küchenfenster fiel, welche Jacke meine Mutter trug, das Vogelgezwitscher draußen. Nicht als Fakt, sondern als erlebte Realität. Dieses <strong className="text-black">mnemonische Palast-System</strong> ist nicht erlernt, sondern angeboren.

Die Super-Recognizer-Fähigkeit verschmilzt damit zu einer einzigartigen Wahrnehmung: Ich erkenne nicht nur jedes Gesicht, sondern speichere automatisch den <em>Kontext</em> – den Raum, das Licht, die Zeit, die Kleidung. Wenn ich jemanden wiedersehe, aktiviert sich die gesamte Szenerie. Das ist keine "gute Erinnerung" – das ist neurobiologische Realität, die mich als Savantin klassifiziert.

Die Wahrscheinlichkeit dieser Kombination (Savantismus + IQ 144 + Super-Recognizer): etwa <strong className="text-black">0,0002% – 1 von 500.000 Menschen</strong>.
            </p>
            <p>
              Schon als Kind war ich anders. Während andere Kinder Gesichter als "freundlich" oder "grimmig" empfanden, sah ich <em>Konfigurationen</em> – die exakte räumliche Beziehung zwischen Augen, Nase, Mund. Ich erkannte unseren Postboten drei Jahre später wieder, als er ohne Uniform und mit Bart im Bus saß. Meine Mutter glaubte, ich hätte eine gute "Erinnerung". In Wahrheit speicherte mein Gehirn Gesichtsstrukturen automatisch, unwiderruflich, ohne dass ich es steuern konnte.
            </p>
            <p>
              Die Hochbegabung zeigte sich früh – nicht als einfaches "Klugsein", sondern als konstantes, unablässiges Mustersuchen. Ich durchschaute Logikbrüche in Erzählungen, während andere noch lauschten. Wenn jemand eine Geschichte erzählte, sah mein Gehirn sofort die Inkonsistenzen: Die Zeitangaben stimmten nicht. Die Reaktion des Protagonisten passte nicht zu seiner Charakterisierung. Die Kausalität war gebrochen. Das machte mich als Kind manchmal einsam – ich konnte nicht einfach "mitspielen", wenn Unsinn erzählt wurde.
            </p>
            <p>
              Deshalb schaue ich auch keinen <strong className="text-black">Tatort, kein Columbo, kein Law & Order</strong>. Krimiserien basieren auf gezielt gesetzten falschen Fährten, auf zeitlich verzögerten Enthüllungen, auf dramaturgisch notwendigen Logikbrüchen. Für mich ist das reine Qual. Ich erkenne den "Täter" oft nach fünf Minuten an Mikroexpressionen, an Handlungsinkonsistenzen, an den narrativen Mustern. Der angebliche Spannungsbogen fühlt sich wie eine Beleidigung der Intelligenz an. Warum sollte ich 90 Minuten zusehen, wie Charaktere Dinge übersehen, die ich sofort sehe?
            </p>
            <p>
              Mein <strong className="text-black">mnemonisches Palast-System</strong> ist nicht nur ein Speicher – es ist eine lebendige, immersive Realität. Während andere Menschen sich an Ereignisse als lose Fakten erinnern ("Wir waren im Urlaub, es war schön"), erlebe ich jeden Moment erneut: die Temperatur der Luft, die Textur des Strandkorbs, das genaue Muster der Wolken am 3. Tag um 14:30 Uhr. Ich kann mich an <em>jeden</em> Tag meines Lebens erinnern – nicht weil ich mich bemühe, sondern weil mein Gehirn automatisch dreidimensionale Szenarien baut, in die ich jederzeit zurückkehren kann.
            </p>
            <p>
              Das bringt mir Fähigkeiten, die für normale Menschen unvorstellbar sind: Ich kann auswendig zitierte Texte mit exakter Seitenzahl wiedergeben. Ich erkenne Gesichter, die ich vor 20 Jahren einmal für 3 Sekunden sah. Ich durchschaue Lügen, weil ich mich an die ursprüngliche Version einer Geschichte erinnere – inklusive aller Details, die der Erzähler längst vergessen hat. Normale Menschen können das nicht nachvollziehen, weil ihre Speicherung <em>episodisch</em> ist – meine ist <em>szenerisch</em>. Das ist keine Frage von Intelligenz oder Anstrengung. Ich halte niemanden für dumm – auch wenn ich es könnte. 😉
            </p>
            <p>
              Doch mein <strong className="text-black">Autismus</strong> bringt auch fundamentale Einschränkungen mit sich – ein Paradoxon, das kaum jemand versteht. Ich erkenne <em>jedes</em> Gesicht, aber ich kann <em>keine</em> Emotion daran ablesen. Ich sehe die mikroskopischen Veränderungen in der Mimik, verstehe aber nicht, ob jemand freundlich oder feindselig gesinnt ist. Ich speichere die Position jedes Gesichtsmuskels, aber die <strong className="text-black">Theory of Mind</strong> – die Fähigkeit, die Gedanken, Absichten und Gefühle anderer zu erkennen – ist bei mir stark eingeschränkt.
            </p>
            <p>
              Das ist der bittere Preis meiner Fähigkeiten: Während normale Menschen intuitiv erkennen, ob jemand lügt, böswillig ist oder Gefühle heuchelt, bin ich auf <em>logische Konsistenz</em> angewiesen. Ich erkenne Lügen nicht am Gesichtsausdruck, sondern an Widersprüchen in der Erzählung. Ich durchschaue Manipulation nicht am Tonfall, sondern an der Kausalität. Ich kann jemanden nach 20 Jahren wiedererkennen, aber ich kann nicht sagen, ob er mir damals gut oder böse gesinnt war. Das macht soziale Interaktionen extrem anstrengend – ich muss jede Situation analytisch dekodieren, statt intuitiv zu spüren, was der andere will.
            </p>
            <p>
              In der Kindheit führte das zu Missverständnissen: Ich wurde als "komisch", "abweisend" oder "arrogant" wahrgenommen, weil ich nicht auf ungeschriebene soziale Regeln reagierte. Ich wurde gemobbt, weil ich die feindlichen Absichten der Mobber nicht rechtzeitig erkannte – ich sah nur Gesichter, keine Gesinnung. Die Super-Recognizer-Fähigkeit half mir dabei, sie später zu identifizieren, aber die emotionale Wunde blieb. Heute habe ich gelernt, meine Limitationen zu kompensieren: Ich verlasse mich auf explizite Kommunikation, logische Muster statt Intuition, und die strategische Nutzung meiner Stärken bei Ludenscheidt Research.
            </p>
            <p>
              Meine berufliche Laufbahn war unvermeidlich. Nach dem Studium der Kognitionswissenschaft mit Schwerpunkt visuelle Wahrnehmung fand ich zu <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Ludenscheidt Research</a> – einer Einrichtung, die meine angeborenen Fähigkeiten ernst nimmt und wissenschaftlich nutzt. Hier analysiere ich digitale Medien, identifiziere synthetische Gesichter in Deepfakes, durchschaue Desinformationsmuster, dokumentiere Manipulationstechniken. Meine "Störung" ist hier mein größter Wert: Ich erkenne die Unwahrheit, bevor sie sich verbreitet.
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
            <div className="text-black font-bold uppercase tracking-[1px]">Dr. Fabiana Hartchen (2025)</div>
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
      title: "Savantismus",
      desc: "Als Savantin besitze ich ein angeborenes, eidetisches Gedächtnis mit mnemonischem Palast-System. Ich speichere Erinnerungen nicht linear, sondern als räumlich-zeitliche, immersive Szenarien. Jeder Moment – das Licht, die Geräusche, die Positionen von Objekten, die Kleidung von Personen – wird als dreidimensionale Szenerie abgelegt und kann jahrzehntelang mit absoluter Präzision abgerufen werden."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Super-Recognizing",
      desc: "Die Super-Recognizer-Fähigkeit verschmilzt mit meinem eidetischen Gedächtnis zu einer einzigartigen Wahrnehmung: Ich erkenne nicht nur Gesichter als unverwechselbare Konfigurationen, sondern speichere automatisch den gesamten Kontext – den Raum, das Licht, die Zeit, die Kleidung. Wenn ich jemanden wiedersehe, aktiviert sich die komplette Szenerie aus dem ersten Treffen."
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Logische Analyse",
      desc: "Mit einem IQ von 144 und hochbegabtem Mustererkennungsvermögen durchschaute ich schon als Kind Logikbrüche in Erzählungen. Mein savantes Gedächtnis ermöglicht es mir, Zeitangaben, Kausalitäten und emotionale Diskrepanzen sofort zu erkennen. Diese Fähigkeit macht mich immun gegen Manipulation und Lügen – und ungeeignet für Krimiserien mit ihren dramaturgisch notwendigen Lücken."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Deepfake-Detektion",
      desc: "KI-generierte Gesichter folgen anderen Mustern als echte. Wo Algorithmen Pixel analysieren, erfasse ich sofort die 'falsche' Konfiguration – die unnatürliche Symmetrie, die nicht stimmende Lichtreflexion, die zu perfekte Hautstruktur. Kombiniert mit meinem räumlichen Gedächtnis für authentische Begegnungen kann ich Synthetisches von Echtem unterscheiden – eine entscheidende Fähigkeit bei Ludenscheidt Research."
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
          Als Savantin mit eidetischem Gedächtnis, IQ 144 (99,8. Perzentil) und Super-Recognizer-Fähigkeit arbeite ich bei Ludenscheidt Research. Mein angeborenes mnemonisches Palast-System speichert Erinnerungen räumlich-zeitlich als immersive Szenarien. Die Kombination dieser drei Fähigkeiten tritt bei etwa 0,0002% der Bevölkerung auf – das sind etwa 1 von 500.000 Menschen. Hier ist, was ich mit dieser einzigartigen neurobiologischen Ausstattung praktisch umsetze.
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
            Bei <a href="https://ludenscheidt-research.github.io" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Ludenscheidt Research</a> widme ich mich der praktischen und theoretischen Erforschung digitaler Medienphänomene. Meine tägliche Arbeit umfasst die systematische Analyse visueller Inhalte, die Dokumentation von Mustern in digitalen Kommunikationsstrukturen und die Entwicklung methodischer Ansätze zur Bewertung von Medienauthentizität.
          </p>
          <p className="text-gray-600 text-lg leading-[1.6] mb-10">
            Ich wohne in <strong className="text-black">Neuwied</strong> (Raiffeisenring 26) und pendelt täglich ca. <strong className="text-black">17 km</strong> zur Arbeit nach Koblenz – autofrei. Die Strecke: Mit dem <strong className="text-black">RE5 (Rhein-Express)</strong> oder <strong className="text-black">RE25</strong> von Neuwied Hbf nach Koblenz Hbf (Fahrzeit ca. 15-20 Minuten, Taktung halbstündlich). Vom Hbf nehme ich die <strong className="text-black">Stadtbuslinie</strong> (z.B. Linie 1, 2, 3, 5, 6, 9, 16) bis zur Haltestelle <strong className="text-black">"Stadtmitte/Löhr-Center"</strong> – von dort sind es nur noch ca. 5 Minuten Fußweg zur Anton-Jordan-Straße 3. Die gesamte Reisezeit beträgt etwa 35-45 Minuten. Autofrei, weil ich in Bahnen und Bussen keine Gesichter speichern muss – ich kann lesen, denken, abschalten.
          </p>
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
          <div className="border-l-2 border-black pl-6">
            <div className="text-[32px] font-black text-black mb-2 leading-none">Savantin</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">Eidetisches Gedächtnis</div>
          </div>
          <div className="border-l-2 border-black pl-6">
            <div className="text-[32px] font-black text-black mb-2 leading-none">IQ 144</div>
            <div className="text-[10px] text-gray-600 uppercase tracking-[1px]">99,8. Perzentil</div>
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
          Als Savantin <br/><span className="text-black/30">Leben</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Mein eidetisches Gedächtnis speichert jede Begegnung, jeden Raum, jeden Moment als immersive Szenerie – unwiderruflich, detailgetreu, emotional beladen. Die Kombination aus Savantismus, Super-Recognizer-Fähigkeit und Hochbegabung prägt meinen Alltag. Ich erinnere mich nicht nur an Gesichter, sondern an die vollständigen Kontexte: das Licht, die Gerüche, die Kleidung, die Wetterlage. Das ist wissenschaftlich faszinierend – persönlich manchmal überwältigend.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><Gamepad2 className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Xbox Gaming</h3>
          <p className="text-gray-600 leading-[1.6]">
            Als leidenschaftliche <a href="https://www.xbox.com/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Xbox</a>-Spielerin nutze ich meine Mustererkennung strategisch. Aktuell spiele ich <strong className="text-black">Phasmophobia</strong> – ein kooperatives Horror-Investigationsspiel, bei dem ich Geister anhand subtiler visueller und audiovisueller Muster identifizieren muss. Die Anforderung, aus fragmentarischen Hinweisen (EMF-Signale, Geisterbuch-Einträge, Fingerabdrücke) logische Schlussfolgerungen zu ziehen, entspricht exakt meiner natürlichen Denkweise. Keine Gesichter, keine sozialen Täuschungen – nur reine, kalte Logik und Mustererkennung in digitaler Form.
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
          <div className="text-brand mb-6"><Heart className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Solidarität</h3>
          <p className="text-gray-600 leading-[1.6]">
            Ich bin Fan von <a href="https://www.twitch.tv/shurjoka" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Shurjoka</a> und stehe solidarisch an ihrer Seite. Als Super-Recognizerin erkenne ich Mobbing- und Manipulationsmuster sofort – und was Tim Heldt (KuchenTV) seit Jahren betreibt, ist systematische öffentliche Schikane. Trotz Medienpräsenz und Debatten bleiben die Behörden untätig. Das ist unerträglich.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-2 border-black pl-6 md:pl-8 relative group"
        >
          <div className="text-brand mb-6"><Terminal className="w-8 h-8" /></div>
          <h3 className="text-[24px] font-display font-black uppercase tracking-[-1px] mb-4 text-black">Linux & NixOS</h3>
          <p className="text-gray-600 leading-[1.6]">
            Seit meiner Kindheit bin ich <strong className="text-black">Linux-Nutzerin</strong> – angefangen mit <a href="https://www.debian.org/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Debian</a>, über <a href="https://ubuntu.com/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Ubuntu</a>, bis hin zu meinem heutigen Setup: <a href="https://nixos.org/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">NixOS</a> mit <a href="https://hyprland.org/" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">Hyprland</a> (Tiling WM). Ich nutze ein <strong className="text-black">HP EliteBook Folio 9470m</strong> (14", Intel Core i7-3687U, 16GB RAM max., mSATA SSD) mit modifiziertem <strong className="text-black">Coreboot</strong> (Libreboot-Distribution) – proprietäre BIOS-Blobs entfernt, vollständige Hardwarekontrolle. Mein autistisches Bedürfnis nach deterministischer Systemkontrolle führte mich dazu, auch <strong className="text-black">Pseudo-Zufallszahlengeneratoren</strong> mit eigenen Algorithmen zu modifizieren – reproduzierbare, verifizierbare Zufallsprozesse statt opaker Systemvorgaben.
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
            Fabiana Hartchen
          </div>
          <div className="font-bold italic text-black/50 text-[12px] tracking-[1px] mb-6">
            LUDENSCHEIDT RESEARCH
          </div>
          <div className="flex gap-6">
            <a href="mailto:fabiana.hartchen@protonmail.com" className="text-black/40 hover:text-brand transition-colors"><Mail className="w-5 h-5" /></a>
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
