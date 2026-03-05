import { PortfolioData } from '@/types/portfolio';
import { Clock, GraduationCap, Info, MapPin } from 'lucide-react';

interface AboutProps {
    data: {
        personalInfo: PortfolioData['personalInfo'];
        quickFacts: PortfolioData['quickFacts'];
    };
}

// Map string icons to Lucide components
const IconMap: Record<string, any> = {
    'school': GraduationCap,
    'schedule': Clock,
    'location_on': MapPin,
};

export default function About({ data }: AboutProps) {
    const { personalInfo, quickFacts } = data;

    return (
        <section id="about" className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Left Column: Quick Facts */}
                    <div className="lg:col-span-4 order-2 lg:order-1">
                        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-border flex items-center space-x-2">
                                <Info className="text-teal" size={20} />
                                <h3 className="font-semibold text-lg text-foreground">Quick Facts</h3>
                            </div>
                            <div className="p-0">
                                {quickFacts.map((fact, index) => {
                                    const IconComponent = IconMap[fact.icon] || Info;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4 p-6 border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors"
                                        >
                                            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                                <IconComponent size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">{fact.label}</p>
                                                <p className="text-base font-semibold text-foreground mt-0.5">{fact.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio */}
                    <div className="lg:col-span-8 order-1 lg:order-2 lg:pl-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                SudheerDev
                            </h2>
                            <div className="h-0.5 flex-1 bg-border/50 ml-4 hidden sm:block"></div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                            {personalInfo.title} — specializing in Laravel, Spring Boot, RBAC &amp; Redis.
                        </h3>

                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
                            <p className="leading-relaxed">
                                {personalInfo.aboutText}
                            </p>

                            {/* Decorative tech stack visual */}
                            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {[
                                    { label: 'PHP 8.x', value: 'Backend Logic' },
                                    { label: 'Laravel', value: 'Full Framework' },
                                    { label: 'Java 17+', value: 'Core Systems' },
                                    { label: 'Spring Boot', value: 'Microservices' },
                                    { label: 'Redis', value: 'Caching & Queues' },
                                    { label: 'MySQL / PgSQL', value: 'Databases' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-xl font-bold text-foreground">{stat.label}</span>
                                        <span className="text-sm text-teal font-medium mt-1">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
