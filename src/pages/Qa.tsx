import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";

const Qa = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title="Q&A - Frequently Asked Questions | FansClubOnly"
        description="Find answers to frequently asked questions about FansClubOnly, our services, creator profiles, and how to use our platform."
        canonical="/qa"
      />
      <Header />
      <main className="flex-1">
        <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Q&A</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Frequently Asked Questions
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Content will be added here */}
            <section>
              <p className="text-muted-foreground leading-relaxed text-lg text-center">
                Content coming soon. We're preparing comprehensive answers to your most frequently asked questions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Qa;

