function GlassCard({ children })
{
    return (
        <div className="max-w-[750px] 
                        rounded-2xl 
                        overflow-hidden 
                        p-[8px] 
                        relative
                        bg-white/20
                        backdrop-blur-xl
                        border border-white/30
                        shadow-[var(--box-shadow)]
                        ">
          <div className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-br
            from-white/40
            via-white/10
            to-transparent
          "></div>
          {children}
        </div>
    );
}

export default GlassCard;