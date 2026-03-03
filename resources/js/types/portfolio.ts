export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface QuickFact {
    icon: 'school' | 'schedule' | 'location_on';
    label: string;
    value: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface SocialLink {
    platform: 'WhatsApp' | 'LinkedIn' | 'GitHub' | 'Email' | 'Twitter';
    url: string;
    icon: string;
}

export interface Service {
    title: string;
    url: string; // usually an anchor link like '#contact'
}

export interface PortfolioData {
    personalInfo: {
        name: string;
        title: string;
        tagline: string;
        availability: string;
        location: string;
        aboutText: string;
        email: string;
    };
    education: Education;
    quickFacts: QuickFact[];
    experience: Experience[];
    projects: Project[];
    socialLinks: SocialLink[];
    services: Service[];
}
