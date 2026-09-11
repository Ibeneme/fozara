import {
  HeroSection,
  AppDownloadSection,
  CompanySlider,
  GlobalFlexibility,
  ProductSection,
  HowMoneyTravels,
  PeopleSection,
  BusinessSection,
  NGOSection,
  RealWorldSection,
  ReviewSection,
} from "@/components/templates/sections/_layout";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CompanySlider />
      <AppDownloadSection />
      <GlobalFlexibility />
      <ProductSection />
      <HowMoneyTravels />
      <PeopleSection />
      <BusinessSection />
      <NGOSection />
      <RealWorldSection />
      <ReviewSection />
    </div>
  );
};

export default HomePage;
