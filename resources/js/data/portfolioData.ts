import { PortfolioData } from '../types/portfolio';

/**
 * Default portfolio data.
 * This is used for static deployment and as fallback values when dynamic data is not provided.
 * You can edit these values to update your portfolio content.
 */
export const defaultPortfolioData: PortfolioData = {
    personalInfo: {
        name: 'Sudheer Gupta',
        title: 'Backend Developer',
        tagline: 'I build reliable backend systems with Java, PHP & Laravel',
        availability: 'Remote / Full-time',
        location: 'Navi Mumbai, India',
        aboutText: 'I build robust, scalable server-side applications and RESTful APIs. Passionate about clean code and optimizing database performance. With a strong foundation in modern backend technologies, I focus on creating secure and efficient systems that power seamless user experiences.',
        email: 'sudheergupta@example.com', // Replace with your actual email
    },
    education: {
        degree: 'B.Sc. IT',
        institution: 'Mumbai University',
        year: '2024',
    },
    quickFacts: [
        {
            icon: 'school',
            label: 'Education',
            value: 'B.Sc. IT (2024)',
        },
        {
            icon: 'schedule',
            label: 'Availability',
            value: 'Remote / Full-time',
        },
        {
            icon: 'location_on',
            label: 'Location',
            value: 'Navi Mumbai, India',
        },
    ],
    experience: [
        {
            role: 'Web/Backend Developer',
            company: 'Freelance / Projects',
            period: '2023 - Present',
            responsibilities: [
                'Developed and maintained RESTful APIs using Laravel and PHP, ensuring high performance and responsiveness to frontend requests.',
                'Collaborated with cross-functional teams to define, design, and ship new backend features.',
                'Optimized database queries and schema designs in MySQL to improve application speed and scalability.',
            ],
        },
    ],
    projects: [
        {
            title: 'E-commerce API',
            description: 'A robust RESTful API for an e-commerce platform with authentication, product management, and order processing capabilities.',
            techStack: ['Laravel', 'PHP', 'MySQL'],
            githubUrl: 'https://github.com/sudheergupta/ecommerce-api',
        },
        {
            title: 'Task Management System',
            description: 'A scalable backend system for task tracking and team collaboration, featuring real-time updates and secure data handling.',
            techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
            githubUrl: 'https://github.com/sudheergupta/task-manager',
        },
    ],
    socialLinks: [
        {
            platform: 'WhatsApp',
            url: 'https://wa.me/1234567890', // Replace with your actual WhatsApp link
            icon: 'message-circle', // Uses Lucide icons
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/sudheergupta', // Replace with your actual LinkedIn link
            icon: 'linkedin',
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/sudheergupta', // Replace with your actual GitHub link
            icon: 'github',
        },
        {
            platform: 'Email',
            url: 'mailto:sudheergupta@example.com', // Replace with your actual email
            icon: 'mail',
        },
    ],
    services: [
        {
            title: 'Backend Development',
            url: '#contact',
        },
        {
            title: 'API Integration',
            url: '#contact',
        },
        {
            title: 'Database Design',
            url: '#contact',
        },
        {
            title: 'Cloud Deployment',
            url: '#contact',
        },
    ],
};
