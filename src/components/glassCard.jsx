function GlassCard({ children, index }) {
  return (
    <div
      className="
        w-full
        h-full
        rounded-2xl 
        overflow-hidden 
        p-[8px] 
        absolute
        top-0
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-[var(--box-shadow)]

        [--glassCardSpace:26px]
        md:[--glassCardSpace:42px]
        lg:[--glassCardSpace:68px]
        "

        style={{
          "--i": index,
          top: `calc(var(--glassCardSpace) * var(--i) * -1)`,
          bottom: 8,
          zIndex: 10 - index,
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
