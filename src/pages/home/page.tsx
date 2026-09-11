import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/templates/sections/_layout";

// Lazy load the subsequent page sections for optimized performance
const CompanySlider = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.CompanySlider,
  }))
);
const AppDownloadSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.AppDownloadSection,
  }))
);
const GlobalFlexibility = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.GlobalFlexibility,
  }))
);
const ProductSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.ProductSection,
  }))
);
const HowMoneyTravels = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.HowMoneyTravels,
  }))
);
const PeopleSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.PeopleSection,
  }))
);
const BusinessSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.BusinessSection,
  }))
);
const NGOSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.NGOSection,
  }))
);
const RealWorldSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.RealWorldSection,
  }))
);
const ReviewSection = lazy(() =>
  import("@/components/templates/sections/_layout").then((mod) => ({
    default: mod.ReviewSection,
  }))
);

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <Suspense
        fallback={
          <div className="w-full py-20 flex items-center justify-center bg-[#051a0e]">
            <div className="h-8 w-8 rounded-full border-2 border-[#E0EC27] border-t-transparent animate-spin" />
          </div>
        }
      >
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
      </Suspense>
    </div>
  );
};

export default HomePage;
