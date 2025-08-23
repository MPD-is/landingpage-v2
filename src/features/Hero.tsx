import { ArrowRight, Zap, Atom, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Icons */}
      <div className="hidden md:block absolute top-20 left-20 animate-float">
        <Zap className="w-8 h-8 text-sky-400/50" />
      </div>
      <div className="hidden md:block absolute top-40 right-20 animate-float-delayed">
        <Atom className="w-12 h-12 text-purple-400/50" />
      </div>
      <div className="hidden md:block absolute bottom-40 left-40 animate-float-slow">
        <Rocket className="w-10 h-10 text-orange-400/50" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Reinventing</span>
          <br />
          <span className="text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-orange-500 bg-clip-text animate-gradient">
            Innovation
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          We're a revolutionary research, design, and product development firm that transforms breakthrough ideas into tomorrow's reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
          <a 
            href="#contact"
            className="group bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Start Your Revolution
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          
          <a 
            href="#portfolio"
            className="group border-2 border-slate-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/25 w-full sm:w-auto text-center"
          >
            Explore Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-400">100+</div>
            <div className="text-slate-400 text-sm sm:text-base">Innovations Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">10+</div>
            <div className="text-slate-400 text-sm sm:text-base">Whiteboards</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">24/7</div>
            <div className="text-slate-400 text-sm sm:text-base">Operations</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;