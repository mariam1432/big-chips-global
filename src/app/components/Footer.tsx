import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-4">Bigchips Global</h3>
          <p className="font-sans text-[#9a9a9a]">
            Crafting digital excellence for businesses and creators.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold mb-4">Services</h4>
          <ul className="space-y-2 font-sans text-[#9a9a9a]">
            <li>
              <Link
                href="/services/web-development"
                className="hover:text-[#C46B5B] transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/copywriting"
                className="hover:text-[#C46B5B] transition-colors"
              >
                Copywriting
              </Link>
            </li>
            <li>
              <Link
                href="/services/visual-media"
                className="hover:text-[#C46B5B] transition-colors"
              >
                Visual Media
              </Link>
            </li>
            <li>
              <Link
                href="/services/email-solutions"
                className="hover:text-[#C46B5B] transition-colors"
              >
                Email Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 font-sans text-[#9a9a9a]">
            <li>hello@bigchipsglobal.com</li>
            <li>+971 XX XXX XXXX</li>
            <li className="text-[#C46B5B]">WhatsApp Available</li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 font-sans text-[#9a9a9a]">
            <li>
              <Link href="#" className="hover:text-[#C46B5B] transition-colors">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C46B5B] transition-colors">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C46B5B] transition-colors">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#333] text-center font-sans text-[#9a9a9a]">
        <p>&copy; 2025 Bigchips Global. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
