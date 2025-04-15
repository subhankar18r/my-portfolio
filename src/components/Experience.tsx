export default function ExperienceSection() {
  const timeline = [
    {
      id: 1,
      title: "Freelancer | Software Developer | self-Employed",
      date: "Jan '25 - Present",
    },
    {
      id: 2,
      title:
        "Runner Up | Exathon'25 Hackathon | St. Xavier autonomous college ",
      date: "19th Feb '25",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-16 py-4 text-white">
      <div className="mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-bold">Experience</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 z-0 h-full w-1 -translate-x-1/2 transform bg-blue-500 md:block" />

          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col items-center justify-between md:flex-row ${
                index === timeline.length - 1 ? "mb-6" : "mb-16"
              } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Content */}
              <div className="z-10 md:w-5/12">
                <div className="rounded-md bg-blue-500 px-4 py-3 font-semibold text-black shadow-md">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-gray-300">{item.date}</p>
              </div>

              {/* Circle */}
              <div className="z-20 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-blue-500 font-bold text-black md:flex"></div>

              {/* Empty side for spacing */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
