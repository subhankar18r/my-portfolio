import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mt-16 flex flex-col items-center justify-around text-center text-white py-4 gap-5"
    >
      <div>
        <h1 className="text-[#06B6D4] text-4xl font-bold">
          Subhankar Rajbanshi
        </h1>
        <p className="mt-4">
          Software developer by title, digital wizard by passion — casting code
          spells daily!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button className="bg-[#06B6D4] text-white text-lg font-medium py-2 px-4 rounded hover:bg-[#05A1BF] transition">
            View Resume
          </button>
          <button className="bg-[#06B6D4] text-white text-lg font-medium py-2 px-4 rounded hover:bg-[#05A1BF] transition">
            Hire as Freelancer
          </button>
        </div>
      </div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48 object-cover border-4 border-[#06B6D4]"
      />
    </section>
  );
}
