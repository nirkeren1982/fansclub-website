import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MetaTags } from "@/components/SEO/MetaTags";
import { generateTitle } from "@/utils/seo";

const Promote = () => {
  const [email, setEmail] = useState("");
  const [onlyfansLink, setOnlyfansLink] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !onlyfansLink) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // OnlyFans link validation
    if (!onlyfansLink.includes("onlyfans.com/")) {
      toast({
        title: "Invalid OnlyFans Link",
        description: "Please enter a valid OnlyFans profile link.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // TODO: Add actual form submission logic here (e.g., API call)
    // For now, just simulate submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your profile has been submitted for listing. We'll contact you soon!",
      });
      
      // Reset form
      setEmail("");
      setOnlyfansLink("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle('Promote Your OnlyFans Profile - Free Listing')}
        description="Increase your OnlyFans profile visibility. Submit your profile for FREE listing on FansClubOnly. Get more subscribers and boost your reach."
        canonical="/promote"
        keywords="promote OnlyFans, list profile, OnlyFans promotion, increase subscribers, OnlyFans marketing"
        noindex={true}
      />
      
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-8 md:px-12 lg:px-16 max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-black mb-4">
                Increase Your Profile Visibility
              </h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and your profile will be listed
              </p>
            </div>

            {/* Lead Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg border">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* OnlyFans Link Field */}
              <div className="space-y-2">
                <label htmlFor="onlyfans-link" className="text-sm font-semibold">
                  OnlyFans Profile Link <span className="text-red-500">*</span>
                </label>
                <Input
                  id="onlyfans-link"
                  type="url"
                  placeholder="https://onlyfans.com/your_username"
                  value={onlyfansLink}
                  onChange={(e) => setOnlyfansLink(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Free Text Box */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Additional Information (Optional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your profile..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  We won't use this information for any other use for commercial or any 3rd party use.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Your profile will be reviewed and listed within 24-48 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promote;

