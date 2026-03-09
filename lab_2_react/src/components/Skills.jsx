export function Skills() {
    return (
        <section id="skills" className="mb-7">
            <h2 className="text-h2 border-b border-accent2 pb-2 mb-5 text-2xl font-bold">Skills</h2>
            <div className="flex gap-6.25 mt-3.75 max-[600px]:flex-col">
                <div className="
                    skill-block shadow-[0px_0px_16px_8px_hsla(110,65%,40%,0.5)] hover:shadow-[0px_0px_24px_12px_hsla(110,65%,50%,0.5)] hover:-translate-y-1.25
                    flex-1 bg-[hsl(240,10%,15%)] pb-5 rounded-lg border-none overflow-hidden transition-all duration-300 ease 
                ">
                    <h3 className="mt-0 px-5 py-1.5 text-xl text-center font-bold rounded-lg text-h3 bg-base3">Hard</h3>
                    <ul className="px-5 py-0 mt-3.75 ml-5 list-disc">
                        <li className="mb-2">Low-Level & Hardware Programming</li>
                        <li className="mb-2">Optimization and Refactoring</li>
                        <li className="mb-2">Full-Stack Web Development</li>
                        <li className="mb-2">Database Management</li>
                        <li className="mb-2">Version Control</li>
                    </ul>
                </div>
                <div className="
                    skill-block shadow-[0px_0px_16px_8px_hsla(270,65%,45%,0.5)] hover:shadow-[0px_0px_24px_12px_hsla(270,65%,55%,0.5)] hover:-translate-y-1.25
                    flex-1 bg-[hsl(240,10%,15%)] pb-5 rounded-lg border-none overflow-hidden transition-all duration-300 ease
                ">
                    <h3 className="mt-0 px-5 py-1.5 text-xl text-center font-bold rounded-lg text-h3 bg-base4">Soft</h3>
                    <ul className="px-5 py-0 mt-3.75 ml-5 list-disc">
                        <li className="mb-2">Critical Thinking</li>
                        <li className="mb-2">Adaptability</li>
                        <li className="mb-2">Problem-Solving</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}