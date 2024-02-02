// In src/components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Built Intellect LLC. All rights reserved.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
