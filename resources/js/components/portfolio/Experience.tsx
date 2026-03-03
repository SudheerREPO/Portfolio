import { PortfolioData } from '@/types/portfolio';
import { CheckCircle2, Download } from 'lucide-react';

interface ExperienceProps {
    data: PortfolioData['experience'];
}

export default function Experience({ data }: ExperienceProps) {
    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                            Professional Experience
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            My journey in software development
                        </p>
                    </div>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 border border-input bg-card hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md transition-colors shadow-sm w-fit group"
                    >
                        Download Full Resume
                        <Download className="ml-2 h-4 w-4 text-teal group-hover:translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Timeline Layout */}
                <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
                    {data.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Node */}
                            <div className="absolute w-4 h-4 bg-background border-2 border-teal rounded-full -left-[9px] top-1.5 group-hover:bg-teal group-hover:scale-125 transition-all duration-300 shadow-sm"></div>

                            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {job.role}
                                            </h3>
                                            <p className="text-lg font-medium text-teal mt-1">
                                                {job.company}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground w-fit">
                                            {job.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {job.responsibilities.map((task, i) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <CheckCircle2 className="h-5 w-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
