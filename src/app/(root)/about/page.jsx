import { metadata } from "@/app/layout";
import SparklesText from "@/components/ui/sparkles-text";
import React from "react";

// export const metadata = {
//     title: 'About',
//     description: "Get to know me. I'm a self-taught full-stack developer with a deep interest in building robust, scalable web applications...",
// }

export default function page() {
  return (
    <main className="mx-8 md:mx-20 lg:mx-24 mt-9">
      {/* <SparklesText text="About" className=' text-4xl font-bold hidden lg:block' /> */}
      <h1 className="text-4xl font-bold ">About</h1>

      <div className="text-justify">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 mt-4">
          Hi, I'm{" "}
          <strong className="font-semibold text-gray-900 dark:text-white">
            Dayanand Gawade
          </strong>
          , a <span className="font-semibold">self-taught</span> full-stack
          developer with a deep interest in building robust, scalable web
          applications. I have a strong foundation in Information Technology,
          currently pursuing my B.Sc. degree in{" "}
          <span className="font-semibold">Information Technology</span>, and
          constantly expanding my skills in both frontend and backend
          development. Whether it's crafting seamless user experiences or
          implementing efficient server-side logic, I love turning ideas into
          functional, high-performing web solutions.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I'm also in the process of launching my own web development{" "}
          <span className="font-semibold">agency</span>, where I aim to deliver
          customized, client-focused solutions that stand out in the digital
          space. When I'm not coding, I enjoy exploring new technologies and
          contributing to <span className="font-semibold">open-source</span>{" "}
          projects on GitHub. Let's build something amazing together!
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I am open to new opportunities and collaborations. Feel free to reach
          out to me anytime.
        </p>
      </div>
    </main>
  );
}
