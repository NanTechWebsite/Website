"use client";

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Play, GraduationCap, TrendingUp } from "lucide-react";

interface Demo {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  video: string;
  gradient: string;
  accent: string;
  border: string;
  glow: string;
}

const demos: Demo[] = [
  {
    id: "mathpi",
    title: "MathPi Demo",
    subtitle: "EdTech & AI Learning Platform",
    icon: GraduationCap,
    description:
      "See how MathPi personalizes learning through adaptive AI tutoring, intelligent assessments, and real-time analytics—helping students, educators, and institutions learn smarter.",
    video: "/images/MathPi_Demo (1).mp4",
    gradient: "from-blue-600/20 to-purple-600/20",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    glow: "bg-blue-500/10",
  },
  {
    id: "trainpi",
    title: "TrainPi Demo",
    subtitle: "Workforce Development Platform",
    icon: TrendingUp,
    description:
      "Discover how TrainPi identifies skills gaps, delivers targeted training, and aligns learning with real-world outcomes—supporting reskilling and upskilling at scale.",
    video: "/images/TrainPi_Demo.mp4",
    gradient: "from-cyan-600/20 to-teal-600/20",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    glow: "bg-cyan-500/10",
  },
];

function VideoCard({
  demo,
  autoplay,
}: {
  demo: Demo;
  autoplay: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Autoplay this video when the page loads if it matches the hash
  useEffect(() => {
    if (autoplay && videoRef.current) {
      const vid = videoRef.current;
      // Scroll into view first, then play
      vid.scrollIntoView({ behavior: "smooth", block: "center" });
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => {
            // Browser blocked autoplay — user will click manually
          });
      }
    }
  }, [autoplay]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      id={demo.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl border ${demo.border} bg-gradient-to-br ${demo.gradient} backdrop-blur-sm overflow-hidden`}
    >
      {/* Card Header */}
      <div className="px-8 pt-10 pb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div
          className={`w-14 h-14 rounded-2xl ${demo.glow} border ${demo.border} flex items-center justify-center shrink-0`}
        >
          <demo.icon className={`w-7 h-7 ${demo.accent}`} />
        </div>
        <div>
          <p className={`text-sm font-medium ${demo.accent} mb-0.5`}>
            {demo.subtitle}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">{demo.title}</h2>
        </div>
      </div>

      <p className="px-8 pb-8 text-muted-foreground leading-relaxed max-w-3xl">
        {demo.description}
      </p>

      {/* Video Player */}
      <div className="mx-6 mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black relative group">
        <video
          ref={videoRef}
          controls
          preload="auto"
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="w-full aspect-video block"
        >
          <source src={demo.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play overlay — hidden once playing */}
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label={`Play ${demo.title}`}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <span
              className={`w-20 h-20 rounded-full flex items-center justify-center ${demo.glow} border-2 ${demo.border} backdrop-blur-sm`}
            >
              <Play className={`w-9 h-9 ${demo.accent} translate-x-0.5`} />
            </span>
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              Click to play
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function DemoPage() {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    // Read the hash from the URL (e.g. #mathpi or #trainpi)
    const hash = window.location.hash.replace("#", "");
    setActiveHash(hash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Play className="w-3.5 h-3.5" />
              Live Demos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              See Our Platforms{" "}
              <span className="text-gradient-primary">In Action</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Watch real walkthroughs of MathPi and TrainPi—our AI-powered
              platforms built to transform education and workforce development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Videos — both on one page */}
      <section className="pb-28">
        <div className="container mx-auto px-6 space-y-20">
          {demos.map((demo) => (
            <VideoCard
              key={demo.id}
              demo={demo}
              autoplay={activeHash === demo.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
