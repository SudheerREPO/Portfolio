import { PortfolioData } from '../types/portfolio';

/**
 * Default portfolio data.
 * This is used for static deployment and as fallback values when dynamic data is not provided.
 * You can edit these values to update your portfolio content.
 */
export const defaultPortfolioData: PortfolioData = {
    personalInfo: {
        name: 'Sudheer Gupta',
        title: 'PHP Laravel & Java Spring Boot Developer',
        tagline: 'I build Production-ready APIs with Laravel & Spring Boot',
        availability: 'Remote / Full-time',
        location: 'Navi Mumbai, India',
        aboutText:
            "I design and ship production-ready backend systems \u2014 RESTful APIs with Laravel (RBAC, Redis, Queues, Observers, Sanctum) and Java Spring Boot (Spring Security, Hibernate, Microservices, JWT/OAuth2). I care about clean architecture, database optimization, and writing code that doesn't break at 2 AM.",
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

    skills: [
        // PHP / Laravel Stack
        { category: 'laravel', name: 'PHP 8.x', level: 'Expert', tags: ['OOP', 'Traits', 'Interfaces', 'Enums', 'Attributes'] },
        { category: 'laravel', name: 'Laravel (8 – 12)', level: 'Expert', tags: ['Full Framework'] },
        { category: 'laravel', name: 'Eloquent ORM', level: 'Expert', tags: ['Relationships', 'Query Scopes', 'Eager Loading'] },
        { category: 'laravel', name: 'Middleware & Lifecycle', level: 'Advanced', tags: ['Request Pipeline', 'Auth Guards'] },
        { category: 'laravel', name: 'Queues & Jobs', level: 'Advanced', tags: ['Redis Driver', 'Horizon', 'Retry Logic'] },
        { category: 'laravel', name: 'Events & Listeners', level: 'Advanced', tags: ['Sync', 'Async', 'Broadcasting'] },
        { category: 'laravel', name: 'Policies, Gates & RBAC', level: 'Advanced', tags: ['Role-based Access', 'Resource Policies'] },
        { category: 'laravel', name: 'Service Container & Providers', level: 'Advanced', tags: ['Dependency Injection', 'Binding'] },
        { category: 'laravel', name: 'API Resources & Transformers', level: 'Expert', tags: ['Fractal', 'Resource Collections'] },
        { category: 'laravel', name: 'Redis Caching & Sessions', level: 'Advanced', tags: ['Cache Tags', 'Pub/Sub', 'Rate Limiting'] },
        { category: 'laravel', name: 'Observers & Model Events', level: 'Advanced', tags: ['created', 'updated', 'deleted'] },
        { category: 'laravel', name: 'Blade & SPA (React/Inertia)', level: 'Proficient', tags: ['Server Components', 'Inertia.js'] },
        { category: 'laravel', name: 'JWT / Sanctum / OAuth2', level: 'Advanced', tags: ['Token Auth', 'SPA Auth', 'Passport'] },
        { category: 'laravel', name: 'CSRF / XSS Protection', level: 'Proficient', tags: ['Security Headers', 'Input Sanitization'] },

        // Java / Spring Boot Stack
        { category: 'spring', name: 'Java 8 – 17+', level: 'Advanced', tags: ['Streams API', 'Lambdas', 'Collections', 'Multithreading'] },
        { category: 'spring', name: 'Spring Boot 3.x', level: 'Advanced', tags: ['Auto-configuration', 'Actuator', 'DevTools'] },
        { category: 'spring', name: 'Spring MVC', level: 'Advanced', tags: ['REST Controllers', 'Request Mapping', 'Interceptors'] },
        { category: 'spring', name: 'Spring Data JPA + Hibernate', level: 'Advanced', tags: ['Repositories', 'JPQL', 'Lazy Loading'] },
        { category: 'spring', name: 'Spring Security', level: 'Advanced', tags: ['JWT', 'OAuth2', 'Role-Based Authorization'] },
        { category: 'spring', name: 'Microservices Architecture', level: 'Proficient', tags: ['REST Integration', 'Service Discovery'] },
        { category: 'spring', name: 'Transaction Management', level: 'Proficient', tags: ['@Transactional', 'Rollback Strategies'] },
        { category: 'spring', name: 'MySQL / PostgreSQL', level: 'Advanced', tags: ['Query Optimization', 'Indexing', 'Joins'] },
        { category: 'spring', name: 'Database Relationships', level: 'Advanced', tags: ['1-1', '1-M', 'M-M', 'JPA Mappings'] },
        { category: 'spring', name: 'OOP & Exception Handling', level: 'Expert', tags: ['SOLID', 'Design Patterns', 'Global Handler'] },
    ],

    stats: [
        { value: '15+', label: 'Production APIs Built', icon: 'ServerCog', accent: 'teal' },
        { value: '99.9%', label: 'Uptime Maintained', icon: 'Activity', accent: 'green' },
        { value: '3+', label: 'Microservices Deployed', icon: 'Network', accent: 'teal' },
        { value: '20+', label: 'DB Tables Optimized', icon: 'Database', accent: 'green' },
        { value: '∞', label: 'Clean Architecture Always', icon: 'Layers', accent: 'teal' },
        { value: '0', label: 'Bugs Left Unresolved', icon: 'Bug', accent: 'green' },
    ],

    experience: [
        {
            role: 'PHP Laravel & Java Spring Boot Developer',
            company: 'Freelance / Projects',
            period: '2023 – Present',
            responsibilities: [
                'Designed and shipped RESTful APIs using Laravel with full RBAC (Policies & Gates), Sanctum authentication, and Redis-backed queue jobs for async processing.',
                'Built Role-Based Access Control systems from scratch — custom permission tables, middleware, policy checks, and resource-level authorization.',
                'Implemented Redis caching layers with cache tags and rate limiting, reducing API response time by over 60% on high-load endpoints.',
                'Created background job pipelines using Laravel Queues + Horizon — email dispatch, report generation, and webhook delivery with retry logic.',
                'Leveraged Eloquent Observers and model events to decouple business logic from controllers, keeping code clean and testable.',
                'Developed Spring Boot microservices with Spring Security (JWT), Spring Data JPA, and Hibernate — clean layered architecture (Controller → Service → Repository).',
                'Optimized MySQL/PostgreSQL schemas — added composite indexes, rewrote N+1 queries with eager loading, reduced query time for complex reports.',
                'Integrated SPA frontend (React + Inertia.js) with Laravel backend, handling SSR concerns, shared props, and auth state seamlessly.',
            ],
        },
    ],

    projects: [
        {
            title: 'RBAC Permission Engine (Laravel)',
            description:
                'A fully custom Role-Based Access Control system built in Laravel — dynamic roles, granular permission tables, middleware guards, and Policy/Gate resolution. Supports multi-role users and resource-level restrictions.',
            techStack: ['Laravel 11', 'PHP 8.2', 'Eloquent', 'Policies', 'Gates', 'MySQL', 'Sanctum'],
            githubUrl: 'https://github.com/sudheergupta/rbac-engine',
        },
        {
            title: 'Redis Queue Job Processor',
            description:
                'Async job pipeline built with Laravel Queues + Redis + Horizon. Handles email dispatch, report generation, and webhook delivery — with retry logic, failure alerts, and per-queue concurrency controls.',
            techStack: ['Laravel', 'Redis', 'Laravel Horizon', 'Queues', 'Events', 'Listeners'],
            githubUrl: 'https://github.com/sudheergupta/redis-job-processor',
        },
        {
            title: 'Spring Boot Microservice API',
            description:
                'A production-style microservice built with Spring Boot 3 — Spring Security (JWT + OAuth2), Spring Data JPA, Hibernate ORM, layered architecture, and PostgreSQL. Covers REST CRUD, role-based endpoints, and transaction management.',
            techStack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Hibernate', 'PostgreSQL'],
            githubUrl: 'https://github.com/sudheergupta/springboot-microservice',
        },
        {
            title: 'React SPA + Laravel API',
            description:
                'Full-stack SPA — React frontend powered by a Laravel API backend. Inertia.js bridges the gap, sharing server-side auth state and props. Blade handles SSR fallback, while Vite manages the asset pipeline.',
            techStack: ['React', 'Laravel', 'Inertia.js', 'Vite', 'Blade', 'Sanctum', 'MySQL'],
            githubUrl: 'https://github.com/sudheergupta/react-laravel-spa',
        },
        {
            title: 'E-commerce API Backend',
            description:
                'Scalable RESTful API for an e-commerce platform — product catalog, cart, orders, and payment webhooks. Built with Laravel API Resources, Observer pattern for stock events, and Redis caching for popular products.',
            techStack: ['Laravel', 'PHP', 'MySQL', 'Redis', 'API Resources', 'Observers'],
            githubUrl: 'https://github.com/sudheergupta/ecommerce-api',
        },
    ],

    socialLinks: [
        {
            platform: 'WhatsApp',
            url: 'https://wa.me/1234567890', // Replace with your actual WhatsApp link
            icon: 'message-circle',
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
        { title: 'REST API Development', url: '#contact' },
        { title: 'RBAC & Auth Systems', url: '#contact' },
        { title: 'Redis / Queue Architecture', url: '#contact' },
        { title: 'Database Design & Optimization', url: '#contact' },
        { title: 'Spring Boot Microservices', url: '#contact' },
        { title: 'SPA + Laravel Integration', url: '#contact' },
    ],
};
