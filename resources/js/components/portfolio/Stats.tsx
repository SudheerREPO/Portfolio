import { PortfolioData } from '@/types/portfolio';
import {
    Activity,
    Bug,
    Database,
    Layers,
    Network,
    ServerCog,
} from 'lucide-react';

interface StatsProps {
    data: PortfolioData['stats'];
}

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    ServerCog,
    Activity,
    Network,
    Database,
    Layers,
    Bug,
};

export default function Stats({ data }: StatsProps) {
    return (
        <section id="stats" className="py-20 md:py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decorative gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        What Makes a Real Dev
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Not just years of experience — but deliverables that prove it.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {data.map((stat, index) => {
                        const IconComponent = IconMap[stat.icon];
                        const isTeal = stat.accent === 'teal';

                        return (
                            <div
                                key={index}
                                className={`group relative flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default overflow-hidden
                                    ${isTeal
                                        ? 'border-teal/20 bg-card hover:border-teal/50 hover:shadow-teal/10'
                                        : 'border-green-400/20 bg-card hover:border-green-400/50 hover:shadow-green-400/10'
                                    }`}
                            >
                                {/* Glow on hover */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-b
                                        ${isTeal ? 'from-teal/5 to-transparent' : 'from-green-400/5 to-transparent'}`}
                                />

                                {/* Icon */}
                                {IconComponent && (
                                    <div
                                        className={`mb-3 w-10 h-10 rounded-xl flex items-center justify-center
                                            ${isTeal ? 'bg-teal/10 text-teal' : 'bg-green-400/10 text-green-400'}`}
                                    >
                                        <IconComponent size={20} />
                                    </div>
                                )}

                                {/* Value */}
                                <span
                                    className={`text-3xl md:text-4xl font-black tracking-tight mb-1
                                        ${isTeal ? 'text-teal' : 'text-green-400'}`}
                                >
                                    {stat.value}
                                </span>

                                {/* Label */}
                                <span className="text-xs font-medium text-muted-foreground leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
