import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-2xl tracking-tight">
              Muse Academy
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["Privacy", "Terms", "Instagram", "LinkedIn"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-caption text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-caption text-primary-foreground/40">
            © {currentYear} Muse Academy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
