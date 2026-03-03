import { PortfolioData } from '@/types/portfolio';
import { Code2, ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
    data: PortfolioData['projects'];
}

export default function Projects({ data }: ProjectsProps) {
    return (
        <section id="projects" className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A selection of my recent work in backend architecture, API design, and full-stack development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-teal/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            {/* Decorative top border gradient using CSS custom property */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-teal to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-6">
                                    <Code2 size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-teal transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
                                                aria-label={`View ${project.title} source code on GitHub`}
                                            >
                                                <Github size={18} />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-teal transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-border rounded-xl">
                        <Code2 className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                        <h3 className="text-xl font-medium text-foreground">More projects coming soon</h3>
                        <p className="text-muted-foreground mt-2">I'm currently updating my portfolio with recent work.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
