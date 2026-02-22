import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dar-navy">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/dar-logo.svg"
              alt="DAR Hypotheken"
              width={80}
              height={32}
            />
            <p className="mt-4 text-sm text-dar-cream/70">
              Duurzaam. Alternatief. Rentevrij.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 font-semibold text-dar-cream">Navigatie</h4>
            <ul className="space-y-2 text-sm text-dar-cream/70">
              <li>
                <a href="#about" className="hover:text-dar-cream">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-dar-cream">
                  Hoe het werkt
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-dar-cream">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-dar-cream">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-3 font-semibold text-dar-cream">Contact</h4>
            <p className="text-sm text-dar-cream/70">
              info@darhypotheken.nl
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-dar-cream/20 pt-6 text-center text-sm text-dar-cream/50">
          &copy; {new Date().getFullYear()} DAR Hypotheken. Alle rechten
          voorbehouden.
        </div>
      </div>
    </footer>
  );
}
