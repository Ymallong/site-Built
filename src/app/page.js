import Card from "@/components/Card";
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
    </div>
  );
}

export default HomePage;
