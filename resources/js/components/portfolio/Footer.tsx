import { PortfolioData } from '@/types/portfolio';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
    data: {
        services: PortfolioData['services'];
        socialLinks: PortfolioData['socialLinks'];
    };
}

// Map string icons to Lucide components
const SocialIconMap: Record<string, any> = {
    'message-circle': MessageCircle,
    'linkedin': Linkedin,
    'github': Github,
    'mail': Mail,
};

export default function Footer({ data }: FooterProps) {
    const { services, socialLinks } = data;
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, '#home')}
                            className="text-2xl font-bold tracking-tight text-foreground inline-block mb-4"
                        >
                            Sudheer<span className="text-teal">Dev</span>
                        </a>
                        <p className="text-muted-foreground mb-6 max-w-xs">
                            Professional backend developer passionate about building robust, scalable APIs and server-side logic using Java, PHP, and Laravel ecosystem.
                        </p>

                        {/* Social Links Small */}
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => {
                                const IconComponent = SocialIconMap[link.icon] || Mail;
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-teal transition-colors"
                                        aria-label={link.platform}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold text-foreground mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-muted-foreground hover:text-teal transition-colors flex items-center"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.url}
                                        onClick={(e) => scrollToSection(e, service.url)}
                                        className="text-muted-foreground hover:text-teal transition-colors"
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        © {currentYear} SudheerDev. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center">
                        Built with <span className="text-destructive mx-1">♥</span> using Laravel & React
                    </p>
                </div>
            </div>
        </footer>
    );
}
