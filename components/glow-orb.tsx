"use client";

export function GlowOrb() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
      {/* Core orb with glow */}
      <div className="absolute inset-0 animate-float">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-bitcoin/20 rounded-full blur-[80px]" />

        {/* Inner orb */}
        <div className="absolute inset-[15%] bg-gradient-to-br from-burnt via-bitcoin to-gold rounded-full opacity-80 blur-sm" />
        <div className="absolute inset-[20%] bg-gradient-to-br from-burnt via-bitcoin to-gold rounded-full" />

        {/* Highlight */}
        <div className="absolute top-[25%] left-[25%] w-[20%] h-[20%] bg-white/30 rounded-full blur-md" />
      </div>

      {/* Orbital ring 1 - outer */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-0 border-2 border-bitcoin/30 rounded-full" />
        {/* Orbital dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-bitcoin rounded-full shadow-[0_0_15px_rgba(247,147,26,0.8)]" />
      </div>

      {/* Orbital ring 2 - inner, rotated */}
      <div className="absolute inset-[10%] animate-spin-slow-reverse">
        <div className="absolute inset-0 border border-gold/20 rounded-full rotate-45" />
        {/* Orbital dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(255,214,0,0.8)]" />
      </div>

      {/* Orbital ring 3 - tilted */}
      <div className="absolute inset-[5%] animate-spin-slow" style={{ animationDuration: "20s" }}>
        <div
          className="absolute inset-0 border border-white/10 rounded-full"
          style={{ transform: "rotateX(60deg)" }}
        />
      </div>
    </div>
  );
}
