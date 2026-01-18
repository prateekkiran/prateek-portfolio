export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Geometric Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <div className="w-3 h-3 rounded-full bg-[#D02020] group-hover:scale-110 transition-transform" />
            <div className="w-3 h-3 bg-[#1040C0] group-hover:scale-110 transition-transform" />
            <div className="w-3 h-3 bg-[#F0C020] shape-triangle group-hover:scale-110 transition-transform" />
            <span className="ml-2 font-heading text-lg uppercase tracking-tight text-white">
              PK
            </span>
          </a>

          {/* Copyright */}
          <p className="text-xs font-bold uppercase tracking-wider text-white/60">
            © {currentYear} Prateek Kiran. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="px-4 py-2 bg-white border-2 border-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#F0C020] transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
