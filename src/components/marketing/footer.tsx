import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
  return (
    <div className="relative h-[800px]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <footer className="h-[800px] sticky top-[calc(100vh-800px)] w-full bg-blue-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-32 pb-10">
            <div className="grid gap-12 xl:grid-cols-3 xl:gap-12 w-full">
              <Container>
                <div className="flex flex-col items-start justify-start max-w-xs">
                  <div className="flex items-center gap-2">
                    <Icons.icon className="w-auto h-5 text-white" />
                    <span className="text-lg font-medium">Nexora</span>
                  </div>
                  <p className="text-sm mt-4 text-white/80 text-start">
                    AI-powered platform that transforms your marketing workflow in seconds.<br />
                    Made by Manthan
                  </p>
                </div>
              </Container>

              <div className="grid grid-cols-2 gap-8 xl:col-span-2 mt-12 xl:mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <Container delay={0.1}>
                    <h3 className="text-base font-medium">Product</h3>
                    <ul className="mt-4 text-sm text-white/80 space-y-3">
                      {["Features", "Pricing", "Testimonials", "Supported Languages"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="#" className="hover:text-white transition-all duration-300">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>

                  <Container delay={0.2}>
                    <h3 className="text-base font-medium">Solutions</h3>
                    <ul className="mt-4 text-sm text-white/80 space-y-3">
                      {["Content Creators", "Businesses", "Education", "Enterprise"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="#" className="hover:text-white transition-all duration-300">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Container delay={0.3}>
                    <h3 className="text-base font-medium">Resources</h3>
                    <ul className="mt-4 text-sm text-white/80 space-y-3">
                      {["Blog", "Translation Guides", "Support"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="#" className="hover:text-white transition-all duration-300">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>

                  <Container delay={0.4}>
                    <h3 className="text-base font-medium">Company</h3>
                    <ul className="mt-4 text-sm text-white/80 space-y-3">
                      {["About Us", "Privacy Policy", "Terms & Conditions"].map((item, idx) => (
                        <li key={idx}>
                          <Link href="#" className="hover:text-white transition-all duration-300">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </div>
            </div>

            <Container delay={0.5} className="w-full mt-12 lg:mt-20">
              <div className="w-full text-center">
                <p className="text-sm text-white/70">
                  &copy; {new Date().getFullYear()} Nexora. All rights reserved.
                </p>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
