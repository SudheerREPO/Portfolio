import About from '@/components/portfolio/About';
import Contact from '@/components/portfolio/Contact';
import Experience from '@/components/portfolio/Experience';
import Footer from '@/components/portfolio/Footer';
import Hero from '@/components/portfolio/Hero';
import Navbar from '@/components/portfolio/Navbar';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Stats from '@/components/portfolio/Stats';
import { defaultPortfolioData } from '@/data/portfolioData';
import { PageProps } from '@/types';
import { PortfolioData } from '@/types/portfolio';
import { Head } from '@inertiajs/react';

// The welcome page can accept portfolio data from the backend.
// If not provided, it falls back to the static defaults in portfolioData.ts
export default function Welcome({
    portfolioData,
}: PageProps<{ portfolioData?: Partial<PortfolioData> }>) {

    // Merge backend data (if any) with static fallbacks.
    // portfolioData may be undefined when using Route::inertia() with no controller.
    const data: PortfolioData = {
        ...defaultPortfolioData,
        ...(portfolioData ?? {}),
        personalInfo: {
            ...defaultPortfolioData.personalInfo,
            ...(portfolioData?.personalInfo ?? {}),
        },
    };

    const pageTitle = `${data.personalInfo.name || 'Portfolio'} | ${data.personalInfo.title || 'Developer'}`;

    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-teal selection:text-white scroll-smooth relative">
            {/*
             * Use the title prop, NOT child <meta> tags.
             * InertiaJS v2 crashes with Object.keys(null) when <meta> children
             * receive null/undefined content values. See: github.com/inertiajs/inertia/issues
             * Static meta tags (og:*, description, theme-color) live in app.blade.php.
             */}
            <Head title={pageTitle} />

            <Navbar />

            <main>
                <Hero data={data.personalInfo} />
                <About data={{ personalInfo: data.personalInfo, quickFacts: data.quickFacts }} />
                <Skills data={data.skills} />
                <Experience data={data.experience} />
                <Stats data={data.stats} />
                <Projects data={data.projects} />
                <Contact data={{ personalInfo: data.personalInfo, socialLinks: data.socialLinks }} />
            </main>

            <Footer data={{ services: data.services, socialLinks: data.socialLinks }} />
        </div>
    );
}
