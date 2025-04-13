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
    <section id="experience" className=" text-white py-4">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className=" md:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0" />

          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-center justify-between ${
                index === timeline.length - 1 ? "mb-6" : "mb-16"
              } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Content */}
              <div className="md:w-5/12 z-10">
                <div className="bg-blue-500 px-4 py-3 rounded-md font-semibold text-black shadow-md">
                  {item.title}
                </div>
                <p className="text-sm mt-2 text-gray-300">{item.date}</p>
              </div>

              {/* Circle */}
              <div className="w-12 h-12 bg-blue-500 text-black font-bold hidden md:flex items-center justify-center rounded-full border-4 border-black z-20"></div>

              {/* Empty side for spacing */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
