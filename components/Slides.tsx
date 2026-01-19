import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  CheckCircle2,
  MapPin,
  Phone,
  User,
  Star,
  Layers,
  Zap,
  Layout as LayoutIcon,
  Play,
  Award,
  Sparkles
} from 'lucide-react';
import { SlideProps, SlideContent } from '../types';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const itemVariants: Variants = {
  hidden: { y: 25, opacity: 0 }, 
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } }
};

export const CinemaBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen opacity-10 contrast-150" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] bg-[radial-gradient(ellipse_at_top,_rgba(229,9,20,0.18)_0%,transparent_80%)] blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
    <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />
  </div>
);

const MentorComment = ({ text }: { text?: string }) => {
  if (!text) return null;
  return (
    <motion.div variants={itemVariants} className="absolute bottom-10 left-8 md:left-24 max-w-2xl z-40">
      <div className="bg-[#1a0f0f]/95 border-l-4 border-[#E50914] p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-r-lg">
        <div className="flex items-center gap-2 mb-2">
          <Star size={12} className="text-[#E50914] fill-[#E50914]" />
          <p className="text-[#E50914] text-[10px] font-black uppercase tracking-[0.3em]">Director's Advice</p>
        </div>
        <p className="text-white/95 text-lg md:text-xl font-medium italic leading-relaxed">"{text}"</p>
      </div>
    </motion.div>
  );
};

const HeroLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full max-w-7xl mx-auto">
    <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
      <div className="w-16 h-px bg-[#E50914]" />
      <span className="text-[#ffcc00] text-sm font-black tracking-[0.5em] uppercase">Phase: {data.id <= 6 ? 'Design' : data.id <= 10 ? 'AI Tech' : 'Video Master'}</span>
    </motion.div>
    <motion.h1 
      variants={itemVariants}
      className="text-5xl md:text-[8rem] font-black italic tracking-tighter text-white mb-8 uppercase leading-[0.85] drop-shadow-[0_0_50px_rgba(229,9,20,0.5)]"
    >
      {data.title}
    </motion.h1>
    <motion.p variants={itemVariants} className="text-xl md:text-4xl text-white/70 font-light max-w-5xl leading-tight mb-12 whitespace-pre-line">
      {data.subtitle}
    </motion.p>
    {data.highlight && (
      <motion.div variants={itemVariants} className="bg-[#E50914] inline-block self-start px-8 py-3 text-white text-xl font-black italic uppercase tracking-widest rounded-sm shadow-[0_0_40px_rgba(229,9,20,0.5)]">
        {data.highlight}
      </motion.div>
    )}
  </div>
);

const ListLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full max-w-7xl mx-auto">
    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
        <Award className="text-[#E50914]" size={28} />
        <span className="text-[#ffcc00] font-bold text-lg tracking-widest uppercase">{data.subtitle}</span>
    </motion.div>
    <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-black text-white mb-16 uppercase tracking-tighter italic leading-none">
      {data.title}
    </motion.h2>
    <div className="space-y-6 md:space-y-8">
      {data.items?.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants} className="flex items-center gap-8 group">
          <span className="text-3xl md:text-5xl font-black text-[#E50914] italic opacity-30 group-hover:opacity-100 transition-all duration-300">0{idx+1}</span>
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl text-white/90 font-bold group-hover:translate-x-4 transition-transform duration-500">
              {item}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const GridLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full max-w-7xl mx-auto py-12">
    <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
        <Sparkles className="text-[#E50914]" size={24} />
        <p className="text-[#ffcc00] font-bold tracking-widest uppercase">{data.subtitle}</p>
    </motion.div>
    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter italic leading-none">
      {data.title}
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {data.items?.map((item, idx) => (
        <motion.div 
          key={idx} 
          variants={itemVariants}
          className="bg-white/5 p-8 border-l border-white/10 hover:border-[#E50914] transition-all duration-500 group backdrop-blur-md relative overflow-hidden flex flex-col justify-center min-h-[160px]"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E50914]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-[#E50914] font-mono text-[10px] mb-4 tracking-widest uppercase">Curriculum 0{idx+1}</p>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#ffcc00] transition-colors">{item}</h3>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProfileLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
  <div className="h-full flex flex-col md:flex-row px-8 md:px-24 relative z-10 items-center justify-center gap-16 max-w-7xl mx-auto">
    <motion.div variants={itemVariants} className="w-full md:w-1/2">
      <div className="relative group text-center md:text-left">
        <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <User className="text-[#E50914]" size={32} />
            <span className="text-[#E50914] font-black text-sm tracking-[0.5em] uppercase">{data.title}</span>
        </div>
        <h2 className="text-6xl md:text-[7.5rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 italic">
          {data.subtitle}
        </h2>
        <p className="text-[#ffcc00] text-xl md:text-3xl font-bold tracking-widest uppercase">{data.highlight}</p>
      </div>
    </motion.div>
    <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-8">
      <div className="w-16 h-1 bg-[#E50914] mb-8" />
      {data.items?.map((item, idx) => (
        <div key={idx} className="flex gap-4 items-start">
            <CheckCircle2 className="text-[#E50914] shrink-0 mt-1" size={20} />
            <p className="text-lg md:text-2xl font-light text-white/90 leading-snug">{item}</p>
        </div>
      ))}
    </motion.div>
  </div>
);

const FinaleLayout: React.FC<{ data: SlideContent }> = ({ data }) => {
  const isContact = !!data.extraData?.qrCode;
  return (
    <div className="h-full flex flex-col justify-center items-center px-8 relative z-10 text-center w-full max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center">
        <span className="text-[#E50914] font-black text-sm tracking-[0.7em] uppercase mb-12 border-b border-[#E50914]/40 pb-3">
          {data.extraData?.subTitle2}
        </span>
        <h1 className="text-5xl md:text-[10rem] font-black italic tracking-tighter text-white uppercase leading-[0.8] mb-14 drop-shadow-[0_0_80px_rgba(229,9,20,0.6)]">
          {data.title}
        </h1>
        <p className="text-lg md:text-3xl text-white/75 font-medium max-w-5xl mb-16 leading-relaxed whitespace-pre-wrap">
          {data.subtitle}
        </p>
        {isContact ? (
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-12 border border-white/10 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                <div className="text-left flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Phone size={18} className="text-[#E50914]" />
                        <p className="text-[#E50914] font-black text-xs uppercase tracking-widest">Call to Action</p>
                    </div>
                    <p className="text-4xl md:text-7xl font-black text-white italic tracking-tighter leading-none">{data.highlight}</p>
                </div>
                <div className="p-4 bg-white rounded-[2rem] shadow-[0_0_60px_rgba(255,255,255,0.2)] group hover:scale-110 transition-transform duration-500">
                    <img src={data.extraData.qrCode} className="w-28 h-28 md:w-44 md:h-44" alt="QR Contact" />
                </div>
            </div>
        ) : (
            <div className="text-3xl md:text-7xl font-black text-white italic border-b-[12px] border-[#E50914] pb-6 px-16 uppercase tracking-tighter shadow-2xl">
                {data.highlight}
            </div>
        )}
      </motion.div>
    </div>
  );
};

const CenterLayout: React.FC<{ data: SlideContent }> = ({ data }) => {
  const isVisual = data.title.includes('VISUAL');
  const isAI = data.title.includes('AI');
  
  return (
    <div className="h-full flex flex-col justify-center items-center px-8 relative z-10 text-center max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="mb-10 p-4 bg-[#E50914] rounded-full shadow-[0_0_40px_rgba(229,9,20,0.6)]">
         {isVisual ? <LayoutIcon size={40} className="text-white" /> : 
          isAI ? <Zap size={40} className="text-white fill-white" /> :
          <Play size={40} className="text-white fill-white" />}
      </motion.div>
      <motion.h2 variants={itemVariants} className="text-5xl md:text-[9.5rem] font-black text-white mb-12 uppercase italic tracking-tighter leading-[0.85] drop-shadow-2xl">
        {data.title}
      </motion.h2>
      <motion.p variants={itemVariants} className="text-2xl md:text-5xl font-bold text-white/60 mb-20 max-w-6xl leading-tight">
        {data.subtitle}
      </motion.p>
      <motion.div variants={itemVariants} className="bg-[#E50914] text-white px-20 py-10 text-3xl md:text-5xl font-black italic uppercase tracking-widest shadow-[0_0_70px_rgba(229,9,20,0.7)]">
        {data.highlight}
      </motion.div>
    </div>
  );
};

const TextLeftLayout: React.FC<{ data: SlideContent }> = ({ data }) => (
    <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 w-full max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <MapPin size={24} className="text-[#E50914]" />
          <span className="text-[#ffcc00] font-bold text-xl uppercase tracking-widest">{data.subtitle}</span>
      </motion.div>
      <motion.h2 variants={itemVariants} className="text-5xl md:text-[8rem] font-black text-white mb-20 uppercase italic tracking-tighter leading-[0.8] drop-shadow-2xl">
        {data.title}
      </motion.h2>
      <div className="space-y-12 border-l-[12px] border-[#E50914] pl-16">
        {data.items?.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6">
            <span className="text-2xl md:text-5xl text-white font-bold tracking-tighter leading-tight uppercase italic hover:text-[#E50914] transition-colors cursor-default">
                {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
);

export const NikeSlide: React.FC<SlideProps> = ({ data, isActive }) => (
  <div className="w-full h-full relative bg-transparent font-display overflow-hidden">
    <motion.div
      className="w-full h-full relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
    >
      {data.layout === 'hero' && <HeroLayout data={data} />}
      {data.layout === 'profile' && <ProfileLayout data={data} />}
      {data.layout === 'list' && <ListLayout data={data} />}
      {data.layout === 'grid' && <GridLayout data={data} />}
      {data.layout === 'finale' && <FinaleLayout data={data} />}
      {data.layout === 'center' && <CenterLayout data={data} />}
      {data.layout === 'text-left' && <TextLeftLayout data={data} />}

      <MentorComment text={data.mentorComment} />
      
      <div className="absolute top-12 right-12 text-white/5 font-black italic text-[12rem] z-20 pointer-events-none select-none">
        {data.id.toString().padStart(2, '0')}
      </div>
    </motion.div>
  </div>
);