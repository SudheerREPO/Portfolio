import { PortfolioData } from '@/types/portfolio';

interface SkillsProps {
    data: PortfolioData['skills'];
}

const levelOrder = { Familiar: 1, Proficient: 2, Advanced: 3, Expert: 4 };
const levelColor: Record<string, string> = {
    Familiar: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
    Proficient: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    Advanced: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    Expert: 'text-green-400 bg-green-400/10 border-green-400/20',
};

export default function Skills({ data }: SkillsProps) {
    const laravelSkills = data.filter((s) => s.category === 'laravel');
    const springSkills = data.filter((s) => s.category === 'spring');

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/5 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Skills &amp; Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Years of hands-on experience shipping production systems across two powerful ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* PHP / Laravel Stack */}
                    <SkillColumn
                        title="PHP / Laravel Stack"
                        accentClass="text-teal"
                        borderClass="border-teal/30"
                        dotClass="bg-teal"
                        glowClass="from-teal/10"
                        skills={laravelSkills}
                        label="PHP"
                    />

                    {/* Java / Spring Boot Stack */}
                    <SkillColumn
                        title="Java / Spring Boot Stack"
                        accentClass="text-green-400"
                        borderClass="border-green-400/30"
                        dotClass="bg-green-400"
                        glowClass="from-green-400/10"
                        skills={springSkills}
                        label="Java"
                    />
                </div>
            </div>
        </section>
    );
}

interface SkillColumnProps {
    title: string;
    accentClass: string;
    borderClass: string;
    dotClass: string;
    glowClass: string;
    skills: PortfolioData['skills'];
    label: string;
}

function SkillColumn({ title, accentClass, borderClass, dotClass, glowClass, skills }: SkillColumnProps) {
    return (
        <div className={`rounded-2xl border ${borderClass} bg-card/60 backdrop-blur-sm overflow-hidden shadow-lg`}>
            {/* Column Header */}
            <div className={`px-6 py-5 border-b ${borderClass} bg-gradient-to-r ${glowClass} to-transparent`}>
                <div className="flex items-center gap-3">
                    <span className={`flex h-2.5 w-2.5 rounded-full ${dotClass} animate-pulse`} />
                    <h3 className={`text-lg font-bold ${accentClass}`}>{title}</h3>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="p-6 grid grid-cols-1 gap-3">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="group flex items-start justify-between gap-3 p-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/40 hover:border-border transition-all duration-200 cursor-default"
                    >
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground text-sm leading-tight">{skill.name}</p>
                            {skill.tags && skill.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                    {skill.tags.map((tag, ti) => (
                                        <span
                                            key={ti}
                                            className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <span
                            className={`flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-md border ${levelColor[skill.level]} whitespace-nowrap`}
                        >
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
