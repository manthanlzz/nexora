import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 lg:pt-32 pb-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
            <div className="grid gap-12 xl:grid-cols-3 xl:gap-12 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start max-w-xs">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-auto h-5" />
                            <span className="text-lg font-medium text-foreground">
                                Nexora
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 text-start">
                            AI-powered platform that transforms your marketing workflow in seconds.< br/>
                            Made by Manthan
                        </p>
                    </div>
                </Container>

                <div className="grid grid-cols-2 gap-8 xl:col-span-2 mt-12 xl:mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">Product</h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-3">
                                {["Features", "Pricing", "Testimonials", "Supported Languages"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Container>

                        <Container delay={0.2} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">Solutions</h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-3">
                                {["Content Creators", "Businesses", "Education", "Enterprise"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">Resources</h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-3">
                                {["Blog", "Translation Guides", "Support"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Container>

                        <Container delay={0.4} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">Company</h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-3">
                                {["About Us", "Privacy Policy", "Terms & Conditions"].map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="hover:text-foreground transition-all duration-300">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full mt-12 lg:mt-20">
                <div className="w-full text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Nexora. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
