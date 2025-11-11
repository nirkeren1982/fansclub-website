import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-16 md:py-24 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p>We use cookies for various purposes:</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously. This helps us improve our site's performance and 
                user experience.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Functionality Cookies</h3>
              <p>
                These cookies enable the website to remember your preferences (such as language or region) 
                and provide enhanced, more personalized features.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Marketing Cookies</h3>
              <p>
                These cookies may be used to track visitors across websites to display relevant 
                advertisements and encourage users to take actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
                <li><strong>First-Party Cookies:</strong> Cookies set by CreatorHub</li>
                <li><strong>Third-Party Cookies:</strong> Cookies set by external services we use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking 
                cookies may impact your user experience and some functionality may no longer be available.
              </p>
              <p className="mt-4">
                Most browsers automatically accept cookies, but you can modify your browser settings to 
                decline cookies if you prefer. Instructions for managing cookies can be found in your 
                browser's help section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p>
                We may use third-party services such as analytics providers, advertising networks, and 
                social media platforms. These third parties may set their own cookies to collect information 
                about your online activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We encourage you to review this page 
                periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us through our 
                contact form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
