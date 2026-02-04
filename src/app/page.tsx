import Hero from "../components/Hero/Hero";
import FeaturedCollections from "../components/Collection/FeaturedCollections";
import EditorialSection from "../components/Story/EditorialSection";

import CustomerPersonaDashboard from "../components/Analytics/CustomerPersonaDashboard";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollections />
      <EditorialSection />
      <CustomerPersonaDashboard />
    </main>
  );
}




