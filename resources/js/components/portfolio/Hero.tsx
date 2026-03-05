import { PortfolioData } from '@/types/portfolio';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    data: PortfolioData['personalInfo'];
}

export default function Hero({ data }: HeroProps) {
    // Split tagline on 'with' to highlight the tech stack portion
    const taglineParts = data.tagline.split('with');
    const prefix = taglineParts[0] ? `${taglineParts[0]} with ` : data.tagline;
    const highlight = taglineParts.length > 1 ? taglineParts[1] : '';

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/10 via-background to-background"></div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-both">
                        <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 bg-secondary text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse"></span>
                            <span>Available for new projects</span>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-4">
                            Hi — I'm {data.name}.
                        </h2>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-foreground">
                            {highlight ? (
                                <>
                                    {prefix}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-500">
                                        {highlight}
                                    </span>
                                </>
                            ) : (
                                data.tagline
                            )}
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                            Professional {data.title.toLowerCase()} passionate about building robust, scalable APIs and server-side logic.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                            >
                                Let's Build Something
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-input text-base font-medium rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* Illustration / Image Placeholder */}
                    <div className="hidden lg:block relative animate-in slide-in-from-right-8 duration-1000 fade-in fill-mode-both delay-300">
                        {/* Abstract code/terminal graphic representing backend dev */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-blue-500/20 rounded-2xl rotate-6 blur-xl"></div>
                            <div className="relative h-full w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
                                {/* Window Header */}
                                <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4 space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                {/* Terminal Content */}
                                <div className="p-6 font-mono text-sm space-y-4 text-foreground/80 flex-1">
                                    <p><span className="text-teal">sudheer@portfolio</span><span className="text-muted-foreground">:~$</span> ./start-backend.sh</p>
                                    <p className="text-muted-foreground animate-pulse">Initializing production architecture...</p>
                                    <p>[✓] Laravel + Spring Boot loaded</p>
                                    <p>[✓] RBAC policies &amp; JWT secured</p>
                                    <p>[✓] Redis queues &amp; jobs dispatched</p>
                                    <p>[✓] Microservices layer deployed</p>
                                    <p>[✓] DB indexes &amp; queries optimized</p>
                                    <p><span className="text-green-500 font-bold">Ready:</span> APIs live. Zero bugs in production.</p>
                                    <p className="animate-pulse">_</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
