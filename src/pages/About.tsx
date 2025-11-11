import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-16 md:py-24 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About CreatorHub</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p>
                CreatorHub is the ultimate creator search engine, designed to help you discover and connect 
                with talented creators from around the world. We believe in empowering creators and making 
                it easy for audiences to find the content they love.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Do</h2>
              <p>
                We provide a comprehensive platform where you can browse, search, and explore creators 
                across various categories. Our advanced search and filtering system helps you find exactly 
                what you're looking for, whether it's fitness, gaming, lifestyle, or any other niche.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Curated database of verified creators</li>
                <li>Advanced search and filtering options</li>
                <li>Regular updates with new creators</li>
                <li>User-friendly interface and seamless experience</li>
                <li>Detailed creator profiles and information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
              <p>
                We are committed to transparency, authenticity, and building a supportive community. 
                We respect both creators and their audiences, and we strive to provide a safe and 
                reliable platform for everyone.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
