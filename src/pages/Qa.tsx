import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { Link } from "react-router-dom";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions (FAQ)</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Your Complete Guide to Finding OnlyFans Creators
          </p>
          
          <div className="space-y-8">
            {/* About Fansclubonly */}
            <section>
              <h2 className="text-3xl font-bold mb-6">About Fansclubonly</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">What is Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Fansclubonly is a free OnlyFans creator discovery platform designed to help you find the perfect content creators based on your preferences. Whether you're searching for a specific creator by name or exploring new creators by category, our platform makes discovery simple, fast, and intuitive.
                    </p>
                    <p className="leading-relaxed">
                      Unlike the limited search functionality on OnlyFans itself, Fansclubonly offers comprehensive search and filtering options that help you discover creators based on content type, niche, subscription price, and more. We connect fans with creators they'll love while helping creators reach new audiences.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How does Fansclubonly work?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Fansclubonly works as a specialized search engine and directory for OnlyFans creators. Here's how it works:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Search by Name:</strong> Looking for a specific creator? Simply type their name or username in our search bar to find their profile instantly.</li>
                      <li><strong>Browse by Category:</strong> Explore creators organized by content categories and niches. From fitness and lifestyle to cosplay and gaming, find creators who match your interests.</li>
                      <li><strong>Smart Recommendations:</strong> Our unique technology analyzes your searches, clicks, and browsing activity to recommend the most suitable creators for your preferences.</li>
                      <li><strong>Direct Links:</strong> When you find a creator you like, we link you directly to their official OnlyFans profile where you can subscribe and support them.</li>
                    </ol>
                    <p className="leading-relaxed">
                      We aggregate publicly available information from various open sources, including third-party websites and social media platforms, to build comprehensive creator profiles that help you make informed decisions.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Is Fansclubonly free to use?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes, Fansclubonly is completely free for all users. There are no subscriptions, no hidden fees, and no account required to browse and search for creators.
                    </p>
                    <p className="leading-relaxed">You can:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Search for creators by name — <strong>Free</strong></li>
                      <li>Browse categories and niches — <strong>Free</strong></li>
                      <li>View creator profiles and information — <strong>Free</strong></li>
                      <li>Access direct links to OnlyFans profiles — <strong>Free</strong></li>
                      <li>Use all search filters and sorting options — <strong>Free</strong></li>
                    </ul>
                    <p className="leading-relaxed">
                      We believe everyone should have access to quality creator discovery tools without barriers.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Do I need to create an account to use Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      No, you don't need to create an account. Fansclubonly is designed for instant access. Simply visit our website and start searching or browsing immediately.
                    </p>
                    <p className="leading-relaxed">
                      No registration. No login. No personal information required.
                    </p>
                    <p className="leading-relaxed">
                      Just open the site and discover amazing creators right away.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Is Fansclubonly affiliated with OnlyFans?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      No, Fansclubonly is not affiliated with, endorsed by, or connected to OnlyFans or FENIX INTERNATIONAL LIMITED in any way.
                    </p>
                    <p className="leading-relaxed">
                      We operate as an independent third-party discovery platform. OnlyFans is a registered trademark of FENIX INTERNATIONAL LIMITED, and we make no claim to this trademark.
                    </p>
                    <p className="leading-relaxed">
                      Our purpose is to help users discover creators and to provide creators with additional organic visibility. When you find a creator on our platform, you'll be directed to their official OnlyFans page for subscriptions and content access.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How often is the creator database updated?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Our creator database is updated <strong>daily</strong> to ensure you have access to the most current information. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>New creator profiles added regularly</li>
                      <li>Updated subscription prices</li>
                      <li>Refreshed profile information</li>
                      <li>New categories and tags</li>
                      <li>Verified creator badges</li>
                    </ul>
                    <p className="leading-relaxed">
                      We work continuously to maintain accurate, up-to-date information so you can trust what you see on Fansclubonly.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Finding Creators */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Finding Creators</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How do I find a specific OnlyFans creator?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Finding a specific creator on Fansclubonly is easy:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Go to the search bar</strong> at the top of our homepage</li>
                      <li><strong>Enter the creator's name</strong> or username</li>
                      <li><strong>Press Enter or click Search</strong></li>
                      <li><strong>Browse the results</strong> to find the creator you're looking for</li>
                      <li><strong>Click on their profile</strong> for more details and a direct link to their OnlyFans</li>
                    </ol>
                    <p className="leading-relaxed font-semibold">Pro Tips:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Try searching with their display name (e.g., "Bella Rose")</li>
                      <li>Try their username without the @ symbol (e.g., "bellarose")</li>
                      <li>If you know their OnlyFans username, search for that directly</li>
                      <li>Use partial names if you're unsure of the exact spelling</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How do I find OnlyFans creators by category?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Discovering creators by category is one of the best ways to find new favorites:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Visit our Categories page</strong> or use the category navigation menu</li>
                      <li><strong>Browse available categories</strong> like Fitness, Cosplay, Lifestyle, Gaming, and more</li>
                      <li><strong>Click on a category</strong> that interests you</li>
                      <li><strong>Explore creator profiles</strong> within that category</li>
                      <li><strong>Use additional filters</strong> to narrow down results by price, popularity, or other criteria</li>
                    </ol>
                    <p className="leading-relaxed">
                      Our category system helps you discover creators based on the type of content they produce, making it easy to find exactly what you're looking for.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Can I search for free OnlyFans accounts?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes! Fansclubonly allows you to filter creators by subscription price, including free accounts.
                    </p>
                    <p className="leading-relaxed">To find free OnlyFans creators:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Use our search or browse categories</li>
                      <li>Apply the <strong>price filter</strong></li>
                      <li>Select <strong>"Free"</strong> or set the price range to $0</li>
                      <li>Browse creators offering free subscriptions</li>
                    </ol>
                    <p className="leading-relaxed">
                      Many creators offer free subscriptions with pay-per-view content, while others have entirely free profiles. Our filters help you find both.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">What categories of creators can I find on Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Fansclubonly features creators across a wide range of categories and niches, including:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-2">Lifestyle & Fitness</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Fitness & Gym</li>
                          <li>Yoga & Wellness</li>
                          <li>Lifestyle & Daily Life</li>
                          <li>Travel & Adventure</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Creative & Entertainment</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Cosplay & Costume</li>
                          <li>Gaming & Streaming</li>
                          <li>Art & Photography</li>
                          <li>Music & Performance</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Style & Fashion</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Fashion & Modeling</li>
                          <li>Alternative & Gothic</li>
                          <li>Tattoo & Piercing</li>
                          <li>Lingerie & Glamour</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Demographics</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Age ranges</li>
                          <li>Locations & Countries</li>
                          <li>Body types</li>
                          <li>And many more...</li>
                        </ul>
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      Our categories are continuously updated to reflect the diverse creator community on OnlyFans.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How does Fansclubonly recommend creators to me?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Our platform uses <strong>smart recommendation technology</strong> that learns from your activity to suggest the most relevant creators.
                    </p>
                    <p className="leading-relaxed font-semibold">How it works:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We analyze which profiles you click on</li>
                      <li>We track your search queries and patterns</li>
                      <li>We monitor your browsing behavior across categories</li>
                      <li>Our algorithm identifies patterns in your preferences</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">
                      The result: Personalized creator recommendations that become more accurate the more you use Fansclubonly. The creators we suggest are tailored specifically to your demonstrated interests and preferences.
                    </p>
                    <p className="leading-relaxed">
                      This technology sets us apart from other directories and helps you discover creators you'll genuinely enjoy.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Why can't I find a specific creator on Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      If you can't find a specific creator, there could be several reasons:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Different username:</strong> Try searching with variations of their name or username</li>
                      <li><strong>New creator:</strong> They may be recently launched and not yet in our database</li>
                      <li><strong>Opted out:</strong> The creator may have requested removal from our directory</li>
                      <li><strong>Profile changes:</strong> They may have changed their username or display name</li>
                      <li><strong>Spelling variations:</strong> Double-check the spelling of their name</li>
                    </ol>
                    <p className="leading-relaxed">
                      <strong>Can't find someone?</strong> Creators and agencies can submit a request to add profiles to our directory.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* For Creators */}
            <section>
              <h2 className="text-3xl font-bold mb-6">For Creators</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How do creators get listed on Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Creators are added to Fansclubonly through multiple methods:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Open Source Data:</strong> We aggregate publicly available information from third-party websites, social media platforms, and other public sources.</li>
                      <li><strong>Direct Submission:</strong> Creators or their representatives can submit a request to be added to our directory.</li>
                      <li><strong>Agency Submissions:</strong> Talent agencies representing creators can submit profiles on behalf of their clients.</li>
                    </ol>
                    <p className="leading-relaxed">
                      All profiles are carefully reviewed before being published to ensure accuracy and compliance with our standards.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Can I verify or claim my creator profile?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes, creators can verify and claim their profiles on Fansclubonly.
                    </p>
                    <p className="leading-relaxed">Verification benefits include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Verified badge</strong> displayed on your profile</li>
                      <li><strong>Profile accuracy</strong> — ensure your information is correct</li>
                      <li><strong>Priority updates</strong> — changes processed faster</li>
                      <li><strong>Enhanced visibility</strong> — verified profiles may rank higher in search results</li>
                      <li><strong>Direct communication</strong> — contact us about your listing</li>
                    </ul>
                    <p className="leading-relaxed">To verify your profile, contact us at <a href="mailto:creators@fansclubonly.com" className="text-primary hover:underline">creators@fansclubonly.com</a> with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your creator username</li>
                      <li>Your OnlyFans profile link</li>
                      <li>Proof of identity (verification photo or message from your official account)</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How can creators promote their profile on Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      We offer <strong>promotional options for creators and agencies</strong> who want enhanced visibility:
                    </p>
                    <p className="leading-relaxed font-semibold">Promoted Profiles:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Featured placement in search results and categories</li>
                      <li>Highlighted profile with <strong>"Promoted" badge</strong></li>
                      <li>Increased visibility to potential subscribers</li>
                      <li>Priority positioning on relevant pages</li>
                    </ul>
                    <p className="leading-relaxed">
                      <strong>Transparency:</strong> All promoted profiles are clearly marked with a "Promoted" badge so users know when content is sponsored. We believe in honest advertising.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Interested in promotion?</strong> Contact us at <a href="mailto:partnerships@fansclubonly.com" className="text-primary hover:underline">partnerships@fansclubonly.com</a> for pricing and options.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Can I remove my profile from Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes, creators have full control over their presence on our platform.
                    </p>
                    <p className="leading-relaxed">To request removal:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Email us at <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a> or <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a></li>
                      <li>Include your creator username and OnlyFans profile link</li>
                      <li>Provide verification that you're the creator (or authorized representative)</li>
                    </ol>
                    <p className="leading-relaxed">
                      We process removal requests within <strong>7-10 business days</strong>.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Please note:</strong> Removing your profile means you'll no longer receive the free organic traffic and exposure our platform provides. Many creators find that being listed on Fansclubonly helps them gain new subscribers at no cost.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Is there a cost for creators to be listed?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      No, basic listings on Fansclubonly are completely free for creators.
                    </p>
                    <p className="leading-relaxed">Being listed means:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Free exposure to users searching for creators like you</li>
                      <li>Free organic traffic to your OnlyFans profile</li>
                      <li>Free discoverability in relevant categories</li>
                      <li>Free search visibility for your name and username</li>
                    </ul>
                    <p className="leading-relaxed">
                      We only charge for <strong>optional promotional features</strong> if creators choose to boost their visibility. Standard listings are always free.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Safety & Trust */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Safety & Trust</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Is Fansclubonly safe to use?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes, Fansclubonly is safe to use. Here's why:
                    </p>
                    <p className="leading-relaxed font-semibold">For Users:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No account or personal information required</li>
                      <li>We don't store payment information</li>
                      <li>We don't host any adult content on our servers</li>
                      <li>We link directly to official OnlyFans profiles</li>
                      <li>Our site uses secure HTTPS encryption</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">For Creators:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We respect intellectual property rights</li>
                      <li>We don't store or host your content</li>
                      <li>Easy opt-out process available</li>
                      <li>DMCA compliant</li>
                      <li>Profile verification available</li>
                    </ul>
                    <p className="leading-relaxed">
                      We're committed to providing a safe, trustworthy platform for both users and creators.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Does Fansclubonly verify creator ages?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      <strong>Yes, every profile is carefully reviewed before being added to our platform.</strong>
                    </p>
                    <p className="leading-relaxed">Our verification process includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Review of public profile information</li>
                      <li>Cross-referencing with source platforms</li>
                      <li>Age verification checks</li>
                      <li>Content compliance review</li>
                    </ul>
                    <p className="leading-relaxed">
                      OnlyFans itself requires all creators to be 18+ and undergo identity verification. We only list creators from the OnlyFans platform, which has its own strict age verification processes.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Does Fansclubonly host any creator content?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      No, Fansclubonly does not host, store, or distribute any creator content.
                    </p>
                    <p className="leading-relaxed font-semibold">What we do:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Display publicly available profile images (linked from source)</li>
                      <li>Show profile information and descriptions</li>
                      <li>Provide direct links to official OnlyFans profiles</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">What we don't do:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Store photos or videos on our servers</li>
                      <li>Host or distribute creator content</li>
                      <li>Bypass OnlyFans paywalls</li>
                      <li>Provide leaked or pirated content</li>
                    </ul>
                    <p className="leading-relaxed">
                      All content remains on OnlyFans. We're simply a discovery tool that helps you find creators you'll love.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How does Fansclubonly handle copyright and DMCA?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      We take intellectual property rights seriously and fully comply with the Digital Millennium Copyright Act (DMCA).
                    </p>
                    <p className="leading-relaxed font-semibold">Our commitments:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We don't claim ownership of any creator content</li>
                      <li>We respond promptly to valid DMCA takedown notices</li>
                      <li>We provide easy opt-out options for creators</li>
                      <li>We respect creator intellectual property</li>
                    </ul>
                    <p className="leading-relaxed">
                      <strong>For DMCA requests:</strong> Email <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a> with the required information outlined in our <Link to="/dmca" className="text-primary hover:underline">DMCA Policy</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Technical Questions */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Technical Questions</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Why isn't the website loading properly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      If you're experiencing issues with Fansclubonly:
                    </p>
                    <p className="leading-relaxed font-semibold">Try these solutions:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Refresh the page</strong> — Press F5 or click the refresh button</li>
                      <li><strong>Clear your browser cache</strong> — Remove stored data and cookies</li>
                      <li><strong>Try a different browser</strong> — Chrome, Firefox, Safari, or Edge</li>
                      <li><strong>Disable ad blockers</strong> — Some features may be affected</li>
                      <li><strong>Check your internet connection</strong> — Ensure stable connectivity</li>
                      <li><strong>Try incognito/private mode</strong> — Rules out extension conflicts</li>
                    </ol>
                    <p className="leading-relaxed">
                      <strong>Still having issues?</strong> Contact us at <a href="mailto:tech@fansclubonly.com" className="text-primary hover:underline">tech@fansclubonly.com</a> with details about the problem and your browser/device.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Does Fansclubonly work on mobile devices?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      Yes, Fansclubonly is fully optimized for mobile devices.
                    </p>
                    <p className="leading-relaxed">Our responsive design works seamlessly on:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>iPhones and iPads (iOS)</li>
                      <li>Android phones and tablets</li>
                      <li>All major mobile browsers</li>
                      <li>Various screen sizes</li>
                    </ul>
                    <p className="leading-relaxed">
                      Simply visit <strong>fansclubonly.com</strong> on your mobile browser for the same great experience as desktop.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Does Fansclubonly use cookies?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Yes, we use cookies to improve your experience. Our cookies help us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Remember your preferences</li>
                      <li>Analyze site usage and performance</li>
                      <li>Provide personalized recommendations</li>
                      <li>Deliver relevant content</li>
                    </ul>
                    <p className="leading-relaxed">
                      You can manage your cookie preferences through your browser settings. For full details, see our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Comparison Questions */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Comparison Questions</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">What makes Fansclubonly different from other OnlyFans search sites?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      Fansclubonly stands out from competitors with our <strong>unique recommendation technology</strong>:
                    </p>
                    <p className="leading-relaxed font-semibold">Smart Recommendations:</p>
                    <p className="leading-relaxed">
                      While other sites simply list creators, Fansclubonly learns from your behavior. Our algorithm analyzes your clicks, searches, and browsing patterns to recommend creators who match your specific preferences. The more you use our platform, the better our suggestions become.
                    </p>
                    <p className="leading-relaxed font-semibold">Additional advantages:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Clean, user-friendly interface</li>
                      <li>Daily database updates</li>
                      <li>Comprehensive category organization</li>
                      <li>Free for all users — no account required</li>
                      <li>Creator verification options</li>
                      <li>Transparent promotional content (clearly labeled)</li>
                      <li>Fast, responsive search</li>
                      <li>Direct links to official OnlyFans profiles</li>
                    </ul>
                    <p className="leading-relaxed">
                      We're not just a directory — we're an intelligent discovery platform designed to connect you with creators you'll genuinely enjoy.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Is Fansclubonly better than searching directly on OnlyFans?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed font-semibold">
                      For discovery purposes, yes. Here's why:
                    </p>
                    <p className="leading-relaxed font-semibold">OnlyFans Search Limitations:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Basic search functionality</li>
                      <li>Limited filtering options</li>
                      <li>Difficult to browse by category</li>
                      <li>No personalized recommendations</li>
                      <li>Hard to discover new creators</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">Fansclubonly Advantages:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Advanced search capabilities</li>
                      <li>Multiple filter options (price, category, etc.)</li>
                      <li>Organized category browsing</li>
                      <li>Smart, personalized recommendations</li>
                      <li>Easy creator discovery</li>
                      <li>Compare creators before subscribing</li>
                    </ul>
                    <p className="leading-relaxed">
                      OnlyFans is great for subscribing and enjoying content. Fansclubonly is great for <em>finding</em> the right creators to subscribe to. We complement each other.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Contact & Support */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Contact & Support</h2>
              
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How do I contact Fansclubonly?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      We're here to help! Reach us through these channels:
                    </p>
                    <div className="space-y-2">
                      <p><strong>General Support:</strong> <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a></p>
                      <p><strong>Creator Services:</strong> <a href="mailto:creators@fansclubonly.com" className="text-primary hover:underline">creators@fansclubonly.com</a></p>
                      <p><strong>DMCA & Removal Requests:</strong> <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a></p>
                      <p><strong>Partnerships & Advertising:</strong> <a href="mailto:partnerships@fansclubonly.com" className="text-primary hover:underline">partnerships@fansclubonly.com</a></p>
                      <p><strong>Technical Issues:</strong> <a href="mailto:tech@fansclubonly.com" className="text-primary hover:underline">tech@fansclubonly.com</a></p>
                    </div>
                    <p className="leading-relaxed">
                      <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">How can I report a problem or provide feedback?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      We value your feedback! Here's how to reach us:
                    </p>
                    <p className="leading-relaxed font-semibold">Report Issues:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Email: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a></li>
                      <li>Include: Description of the problem, browser/device info, screenshots if possible</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">Provide Feedback:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Email: <a href="mailto:feedback@fansclubonly.com" className="text-primary hover:underline">feedback@fansclubonly.com</a></li>
                      <li>Share: Suggestions, feature requests, or general comments</li>
                    </ul>
                    <p className="leading-relaxed font-semibold">Report Incorrect Information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Email: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a></li>
                      <li>Include: Creator profile URL and what information is incorrect</li>
                    </ul>
                    <p className="leading-relaxed">
                      Your input helps us improve Fansclubonly for everyone.
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg border border-border overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-secondary/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground pr-4">Where can I find your Privacy Policy and Terms of Service?</h3>
                    <span className="flex-shrink-0 text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground space-y-3">
                    <p className="leading-relaxed">
                      All our legal documents are available on our website:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> — How we collect, use, and protect your information</li>
                      <li><Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> — Rules and guidelines for using our platform</li>
                      <li><Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> — How we use cookies and tracking technologies</li>
                      <li><Link to="/dmca" className="text-primary hover:underline">DMCA Policy</Link> — Copyright and takedown procedures</li>
                    </ul>
                    <p className="leading-relaxed">
                      We're committed to transparency and protecting both user and creator rights.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Quick Answers */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Quick Answers</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground"><strong>Is Fansclubonly free?</strong> ✅ Yes, 100% free for all users. No account required.</p>
                  <p className="text-muted-foreground"><strong>Do I need to sign up?</strong> ❌ No registration or account needed.</p>
                  <p className="text-muted-foreground"><strong>Is Fansclubonly affiliated with OnlyFans?</strong> ❌ No, we're completely independent.</p>
                  <p className="text-muted-foreground"><strong>Can I find creators by name?</strong> ✅ Yes, search any creator by name or username.</p>
                  <p className="text-muted-foreground"><strong>Can I browse by category?</strong> ✅ Yes, explore dozens of categories and niches.</p>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground"><strong>Is the site safe?</strong> ✅ Yes, we use secure encryption and don't host adult content.</p>
                  <p className="text-muted-foreground"><strong>Do you host creator content?</strong> ❌ No, we only link to official OnlyFans profiles.</p>
                  <p className="text-muted-foreground"><strong>Can creators be removed?</strong> ✅ Yes, creators can opt out at any time.</p>
                  <p className="text-muted-foreground"><strong>How often is data updated?</strong> 📅 Daily updates to keep information current.</p>
                  <p className="text-muted-foreground"><strong>Is there a mobile app?</strong> 📱 No app, but our website works great on mobile browsers.</p>
                </div>
              </div>
            </section>

            {/* Still Have Questions */}
            <section className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Didn't find the answer you were looking for? We're here to help!
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Contact us at:</strong> <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
              </p>
              <p className="text-muted-foreground">
                Our support team typically responds within 24-48 hours and is happy to assist with any questions about Fansclubonly.
              </p>
            </section>

            {/* Footer Note */}
            <section className="text-center border-t pt-8">
              <p className="text-muted-foreground italic">
                Fansclubonly — Discover Your Perfect OnlyFans Creators
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
