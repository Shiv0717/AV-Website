const features = [
    {
      icon: "⚖️",
      title: "Compare charts",
      description:
        "Open multiple clients side-by-side to analyze their compatibility and life patterns instantly.",
    },
    {
      icon: "📅",
      title: "Dasha charts",
      description:
        "Accurate Base grid, Mahadasha, Antardasha, and Pratyantar Dasha charts without errors across devices.",
    },
    {
      icon: "📄",
      title: "Download report",
      description:
        "Generate beautiful, branded PDF reports that reflect the quality of your practice.",
    },
    {
      icon: "📂",
      title: "Secure CRM",
      description:
        "Manage unlimited clients, track consultation history, and save private notes.",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="bg-gray-50 border-t border-gray-200 py-16 ">
        <div className="mx-auto max-w-7xl px-4">
  
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Built for Pro Practitioners
            </h2>
            <p className="mt-4  font-light  tracking-wide  text-lg text-slate-500">
              Everything you need to run a professional numerology practice.
            </p>
          </div>
  
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 p-8 
                           hover:shadow-lg transition-shadow duration-200"
              >
                {/* ICON */}
                <div className="mb-5 w-12 h-12 rounded-xl bg-blue-50 
                                flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
  
                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
  
                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  