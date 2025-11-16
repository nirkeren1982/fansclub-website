import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { TrendingCreators } from "@/components/TrendingCreators";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { WebSiteSchema, OrganizationSchema } from "@/components/SEO/StructuredData";
import { generateTitle } from "@/utils/seo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle('Discover Top OnlyFans Creators | Adult Content Directory', false)}
        description="Find and explore verified OnlyFans creators. Browse by category, search by name, and discover trending adult content creators. Updated daily with 1,700+ profiles."
        canonical="/"
        keywords="OnlyFans, OnlyFans creators, adult content, verified creators, OnlyFans directory, adult models, content creators"
      />
      <WebSiteSchema />
      <OrganizationSchema />
      
      <Header />
      <main className="flex-1">
        <Hero />
        <TrendingCreators />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
