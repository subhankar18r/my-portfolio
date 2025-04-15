import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mt-16 flex scroll-mt-20 flex-col items-center justify-around gap-5 py-4 text-center text-white md:h-[60vh] md:max-h-[400px] md:flex-row md:items-center md:justify-between md:gap-25"
    >
      <div className="left md:flex-1 md:text-left">
        <h1 className="text-4xl font-bold text-[#06B6D4]">
          Subhankar Rajbanshi
        </h1>
        <p className="mt-4">
          Software developer by title, digital wizard by passion — casting code
          spells daily!
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://www.canva.com/design/DAGZuGulnLQ/36H2rC4kN1isY6EYF3uOtw/edit?utm_content=DAGZuGulnLQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#06B6D4] px-4 py-2 text-lg font-medium text-white transition hover:bg-[#05A1BF]"
          >
            View Resume
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~016c3b6749b282da4e"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#06B6D4] px-4 py-2 text-lg font-medium text-white transition hover:bg-[#05A1BF]"
          >
            Hire as Freelancer
          </Link>
        </div>
      </div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="right h-48 w-48 rounded-full border-4 border-[#06B6D4] object-cover md:h-64 md:w-64"
      />
    </section>
  );
}
