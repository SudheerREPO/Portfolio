import { PortfolioData } from '@/types/portfolio';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

interface ContactProps {
    data: {
        personalInfo: PortfolioData['personalInfo'];
        socialLinks: PortfolioData['socialLinks'];
    };
}

// Map string icons to Lucide components for social links
const SocialIconMap: Record<string, any> = {
    'message-circle': MessageCircle,
    'linkedin': Linkedin,
    'github': Github,
    'mail': Mail,
};

export default function Contact({ data }: ContactProps) {
    const { personalInfo, socialLinks } = data;

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-500">Scalable</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Connect Instantly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left Column: Form */}
                        <div className="bg-card rounded-2xl border border-border shadow-md p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>

                            {/* Simple mailto form as requested for static mode */}
                            <form
                                action={`mailto:${personalInfo.email}`}
                                method="post"
                                encType="text/plain"
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full p-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors resize-none"
                                        placeholder="How can I help you..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-12 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                >
                                    <span>Send Message via Email Client</span>
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    This will open your default email client.
                                </p>
                            </form>
                        </div>

                        {/* Right Column: Contact Info & Socials */}
                        <div className="space-y-8 lg:pl-8">

                            {/* Location Box */}
                            <div className="bg-secondary/30 rounded-2xl p-6 border border-border flex items-start space-x-4">
                                <div className="p-3 bg-background rounded-full shrink-0 border border-border shadow-sm">
                                    <MapPin className="h-6 w-6 text-teal" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Based in</h4>
                                    <p className="text-muted-foreground">{personalInfo.location}</p>
                                    <p className="text-foreground font-medium mt-2">{personalInfo.availability} worldwide</p>
                                </div>
                            </div>

                            {/* Social Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => {
                                    const IconComponent = SocialIconMap[link.icon] || Mail;
                                    return (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-4 p-4 rounded-xl border border-border bg-card hover:border-teal/50 hover:bg-secondary/50 transition-all group shadow-sm"
                                        >
                                            <div className="p-2 rounded-lg bg-secondary group-hover:bg-background transition-colors text-foreground">
                                                <IconComponent className="h-5 w-5 group-hover:text-teal transition-colors" />
                                            </div>
                                            <span className="font-semibold text-foreground">{link.platform}</span>
                                        </a>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
