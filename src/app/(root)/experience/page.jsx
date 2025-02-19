"use client";
import { project } from "@/app/components/projects";
import SparklesText from "@/components/ui/sparkles-text";

export default function page() {
  return (
    <section className="mx-8 md:mx-20 lg:mx-24">
      <div className="mt-6">
        <h1 className="text-4xl font-bold  text-gray-900 dark:text-white">
          Experience
        </h1>
        {/* <SparklesText
          text="Experience"
          className="text-4xl mb-7 hidden md:block text-gray-900 dark:text-white"
        /> */}
        <p className="text-gray-700 dark:text-gray-300 mt-5">
          As a full-stack developer, I have built and deployed numerous web
          applications and software solutions, leveraging a wide range of modern
          technologies. My GitHub repository showcases various projects where I
          have applied my expertise in both front-end and back-end development.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          Key Projects:
        </h1>
        {project.map((item, index) => (
          <ul
            key={index}
            className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300"
          >
            <li className="mt-2 mb-2">
              <strong className="text-gray-900 dark:text-white">
                {item.title}
              </strong>
              : {item.description}
            </li>
          </ul>
        ))}
      </div>

      <div>
        <h1 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
          Freelance Work:
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          In addition to personal projects, I’ve collaborated on numerous
          freelance assignments, delivering robust, scalable web applications
          for clients across various industries. My experience ranges from
          developing e-commerce platforms to building custom content management
          systems (CMS), optimizing performance, and ensuring responsive design.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Technical Skills:
        </h2>
        <ul className="list-disc text-gray-700 dark:text-gray-300 list-inside space-y-2 mb-7">
          <li>
            <strong className="text-gray-900 dark:text-white">Frontend</strong>:
            React.js, Next.js, JavaScript, Tailwind CSS, HTML5, CSS3
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Backend</strong>:
            Node.js, Express, Python, RESTful APIs
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Database</strong>:
            MongoDB, PostgreSQL, MySQL
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">DevOps</strong>:
            AWS, Docker, CI/CD pipelines
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              Tools & Frameworks
            </strong>
            : Git, GitHub, Figma, VSCode
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Security</strong>:
            Encryption, Authentication, Authorization
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Other</strong>:
            Freelance experience across multiple domains, UI/UX design, Agile
            methodologies
          </li>
        </ul>
      </div>
    </section>
  );
}
