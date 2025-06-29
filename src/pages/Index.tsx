import Hero from "@/components/Hero";
import PricingPlans from "@/components/PricingPlans";
import LocationMap from "@/components/LocationMap";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PricingPlans />
      <LocationMap />
      <ContactInfo />
    </div>
  );
};

export default Index;
