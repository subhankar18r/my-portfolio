import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-4">
      <h2 className="mb-6 text-center text-4xl font-bold">Skills</h2>
      <ul className="flex flex-wrap items-center justify-center gap-6">
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/html.svg"
            alt="HTML"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">HTML</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/css.svg"
            alt="CSS"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">CSS</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/js.svg"
            alt="JavaScript"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">JavaScript</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/tailwind.svg"
            alt="Tailwind CSS"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">Tailwind CSS</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/react.svg"
            alt="React"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">React</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/next.svg"
            alt="Next.js"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">Next.js</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/node.svg"
            alt="Node.js"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">Node.js</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/ts.svg"
            alt="TypeScript"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">TypeScript</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/mongodb.svg"
            alt="MongoDB"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">MongoDB</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/postgres.svg"
            alt="PostgreSQL"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">PostgreSQL</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center text-center">
          <Image
            src="/tech_stack_icons/wordpress.svg"
            alt="WordPress"
            className="h-10 w-10"
          />
          <p className="mt-2 text-sm">WordPress</p>
        </li>
      </ul>
    </section>
  );
}
