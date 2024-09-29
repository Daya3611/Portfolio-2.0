import { project } from "@/app/components/projects";
import SparklesText from "@/components/ui/sparkles-text";


export default function page() {
    return (
        <section className="mx-8 md:mx-20 lg:mx-24">
            <div className="mt-6">
                <h1 className="text-4xl font-bold block md:hidden">Experience</h1>
                <SparklesText text="Experience" className="text-4xl mb-7 hidden md:block" />
                <p className="text-muted-foreground mt-5">As a full-stack developer, I have built and deployed numerous web applications and software solutions, leveraging a wide range of modern technologies. My GitHub repository showcases various projects where I have applied my expertise in both front-end and back-end development.</p>
            </div>

            <div>
                <h1 className="text-3xl font-semibold mb-4 mt-8">Key Projects:</h1>
                {project.map((item, index) => (
                    <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                        <li className="mt-2 mb-2">
                            <strong>{item.title}</strong>:{item.description}
                        </li>
                    </ul>
                ))}


            </div>

            <div>
                <h1 className="text-3xl font-semibold mb-4 mt-8">Freelance Work:</h1>
                <p className="text-muted-foreground">In addition to personal projects, I’ve collaborated on numerous freelance assignments, delivering robust, scalable web applications for clients across various industries. My experience ranges from developing e-commerce platforms to building custom content management systems (CMS), optimizing performance, and ensuring responsive design.</p>
            </div>

            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-4">Technical Skills:</h2>
                <ul className="list-disc text-foreground/75 list-inside space-y-2 mb-7">
                    <li><strong>Frontend</strong>: React.js, Next.js, JavaScript, Tailwind CSS, HTML5, CSS3</li>
                    <li><strong>Backend</strong>: Node.js, Express, Python, RESTful APIs</li>
                    <li><strong>Database</strong>: MongoDB, PostgreSQL, MySQL</li>
                    <li><strong>DevOps</strong>: AWS, Docker, CI/CD pipelines</li>
                    <li><strong>Tools & Frameworks</strong>: Git, GitHub, Figma, VSCode</li>
                    <li><strong>Security</strong>: Encryption, Authentication, Authorization</li>
                    <li><strong>Other</strong>: Freelance experience across multiple domains, UI/UX design, Agile methodologies</li>
                </ul>
            </div>
        </section>
    )
}