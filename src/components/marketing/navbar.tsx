import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Icons.icon className="w-6" />
              <span className="text-xl font-semibold hidden lg:block">
                Nexora
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
  <ul className="flex items-center gap-8">
    {NAV_LINKS.map((link, index) => (
      <li key={index} className="ml-1">
        <Link
          href={link.href}
          className="relative text-sm font-medium text-foreground transition-colors duration-300 hover:text-blue-500 group pb-1"
        >
          {link.name}
          <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full lg:block hidden"></span>
        </Link>
      </li>
    ))}
  </ul>
</nav>


          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden lg:block">
              <Button variant="blue">
                Get Started
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
