function About({
  title = "About Us",
  subtitle = "Who We Are",
  description = "We are a forward-thinking company dedicated to delivering exceptional solutions and outstanding service to our clients.",
  features = [
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology to solve complex challenges."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every project we undertake."
    },
    {
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    }
  ]
}) {
  return (
    <section className="about-section w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Features Grid */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
