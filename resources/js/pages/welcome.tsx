import About from '@/components/portfolio/About';
import Contact from '@/components/portfolio/Contact';
import Experience from '@/components/portfolio/Experience';
import Footer from '@/components/portfolio/Footer';
import Hero from '@/components/portfolio/Hero';
import Navbar from '@/components/portfolio/Navbar';
import Projects from '@/components/portfolio/Projects';
import { defaultPortfolioData } from '@/data/portfolioData';
import { PageProps } from '@/types';
import { PortfolioData } from '@/types/portfolio';
import { Head } from '@inertiajs/react';

// The welcome page can accept portfolio data from the backend.
// If not provided, it falls back to the static defaults in portfolioData.ts
export default function Welcome({
    portfolioData,
}: PageProps<{ portfolioData?: Partial<PortfolioData> }>) {

    // Merge any dynamic data provided via DB with our static config
    const data = { ...defaultPortfolioData, ...portfolioData };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-teal selection:text-white scroll-smooth relative">
            <Head>
                <title>{data.personalInfo.name} | {data.personalInfo.title}</title>
                <meta name="description" content={data.personalInfo.aboutText} />
                <meta property="og:title" content={`${data.personalInfo.name} | ${data.personalInfo.title}`} />
                <meta property="og:description" content={data.personalInfo.tagline} />
                <meta property="og:type" content="website" />
                <meta name="theme-color" content="#25c0f4" />
            </Head>

            <Navbar />

            <main>
                <Hero data={data.personalInfo} />
                <About data={{ personalInfo: data.personalInfo, quickFacts: data.quickFacts }} />
                <Experience data={data.experience} />
                <Projects data={data.projects} />
                <Contact data={{ personalInfo: data.personalInfo, socialLinks: data.socialLinks }} />
            </main>

            <Footer data={{ services: data.services, socialLinks: data.socialLinks }} />
        </div>
    );
}
