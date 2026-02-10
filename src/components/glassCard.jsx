function GlassCard({ children, index }) {


  return (
    <div
      className="
        w-[272px] md:w-[640px] lg:w-[790]
        h-[145px] md:h-[340px] lg:h-[400]
        rounded-2xl 
        overflow-hidden 
        p-[8px] 
        absolute
        top-0
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-[var(--box-shadow)]
        "

        style={{
          top: `${index * 24}px`,
          bottom: 8,
          zIndex: 10 + index,
          scale: 1 - index * 0.05,
        }}
    >
      <div
        className="
          relative
          w-full 
          pointer-events-none
          relative
          bg-gradient-to-br
          from-white/40
          via-white/10
          to-transparent
          "
      ></div>
      {children}
    </div>
  );
}

export default GlassCard;
