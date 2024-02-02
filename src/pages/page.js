// In pages/index.js

import Card from '../src/components/Card';

function HomePage() {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        title="About Us"
        description="Learn about our mission and values."
        href="/about"
      />
      <Card
        title="Capabilities"
        description="Discover our services and expertise."
        href="/capabilities"
      />
      {/* Repeat for other sections like Certifications, Contracts, Contact */}
    </div>
  );
}

export default HomePage;
