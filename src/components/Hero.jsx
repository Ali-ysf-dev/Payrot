function Hero({ 
  title = "Welcome to PAYROT",
  subtitle = "Your trusted partner for innovative solutions",
  description = "We deliver excellence through cutting-edge technology and exceptional service.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick
}) {
  return (
    <section className=" hero-section relative w-full min-h-[110vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-2xl md:text-3xl text-white/80 mb-4 font-medium">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryButtonText && (
            <button
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
            >
              {primaryButtonText}
            </button>
          )}
          {secondaryButtonText && (
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
