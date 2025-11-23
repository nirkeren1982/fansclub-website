import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This Cookie Policy explains how Fansclubonly ("we," "us," or "our") uses cookies and similar tracking technologies on fansclubonly.com (the "Website"). This policy helps you understand what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                By continuing to use our Website, you consent to our use of cookies as described in this Cookie Policy and our Privacy Policy.
              </p>
            </section>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, smartphone, or other electronic device) when you visit a website. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Key Characteristics of Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Small Data Files:</strong> Typically contain a unique identifier and the website domain</li>
                <li><strong>Stored Locally:</strong> Saved in your browser or device</li>
                <li><strong>Retrieval:</strong> Read by the website on subsequent visits</li>
                <li><strong>Purpose:</strong> Remember information about your visit and preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">What Cookies Are NOT</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cookies are not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Viruses or malware</li>
                <li>Programs that can harm your device</li>
                <li>Capable of accessing other files on your device</li>
                <li>Used to identify you personally (in most cases)</li>
              </ul>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>

              {/* Essential Cookies */}
              <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">1. Essential Cookies (Strictly Necessary)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are required for the Website to function properly and cannot be disabled in our systems.
                </p>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">Purpose:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Enable core website functionality</li>
                  <li>Allow you to navigate the site</li>
                  <li>Access secure areas of the website</li>
                  <li>Maintain your session</li>
                  <li>Remember your cookie preferences</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">Examples:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>Cookie consent cookies</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Duration:</strong> Session-based or persistent (up to 12 months)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Can You Disable Them?</strong> These cookies cannot be disabled as they are essential for the Website to work. Blocking them may prevent you from using parts of our service.
                </p>
              </div>

              {/* Performance and Analytics Cookies */}
              <div className="border border-border p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">2. Performance and Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our Website by collecting and reporting information anonymously.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-2">Purpose:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Measure website traffic and usage patterns</li>
                  <li>Track which pages are most popular</li>
                  <li>Identify technical issues</li>
                  <li>Understand user navigation paths</li>
                  <li>Improve website performance</li>
                  <li>Test new features</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">Information Collected:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Links clicked</li>
                  <li>Navigation paths</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Referring website</li>
                  <li>General location (city/country level)</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Third-Party Services We Use:</h4>
                <div className="pl-4 mb-4">
                  <h5 className="text-lg font-semibold text-foreground mb-2">Google Analytics</h5>
                  <ul className="list-none space-y-1 text-muted-foreground mb-3">
                    <li><strong>Provider:</strong> Google LLC</li>
                    <li><strong>Purpose:</strong> Website traffic analysis</li>
                    <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
                    <li><strong>Opt-Out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
                  </ul>
                  <p className="text-muted-foreground text-sm italic">
                    We may use additional analytics services to better understand user behavior and improve our services.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Duration:</strong> Typically 12-24 months
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Can You Disable Them?</strong> Yes, you can opt out of these cookies without affecting your ability to use the Website.
                </p>
              </div>

              {/* Functionality Cookies */}
              <div className="border border-border p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">3. Functionality Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies enable enhanced functionality and personalization on our Website.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-2">Purpose:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Provide personalized features</li>
                  <li>Remember your language preference</li>
                  <li>Remember your region/location</li>
                  <li>Enable enhanced functionality</li>
                  <li>Provide social media features</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">Examples:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Language preference cookies</li>
                  <li>Region/location cookies</li>
                  <li>Display preference cookies</li>
                  <li>Recently viewed creators</li>
                  <li>Favorite categories</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Duration:</strong> Typically 12 months
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Can You Disable Them?</strong> Yes, but disabling these cookies may affect certain features and your user experience.
                </p>
              </div>

              {/* Targeting and Advertising Cookies */}
              <div className="border border-border p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">4. Targeting and Advertising Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are used to deliver advertisements that are more relevant to you and your interests. They also help limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-2">Purpose:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Display relevant advertisements</li>
                  <li>Track ad campaign effectiveness</li>
                  <li>Prevent showing the same ad repeatedly</li>
                  <li>Measure ad performance</li>
                  <li>Share information with advertising partners</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">How They Work:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Track your browsing behavior across different websites</li>
                  <li>Build a profile of your interests</li>
                  <li>Deliver targeted advertisements based on your profile</li>
                  <li>Measure whether you interact with ads</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">Third-Party Advertising Partners:</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may work with advertising networks and partners, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                  <li>Google AdSense</li>
                  <li>Third-party ad networks</li>
                  <li>Affiliate marketing partners</li>
                  <li>Retargeting platforms</li>
                </ul>
                <p className="text-muted-foreground text-sm italic mb-4">
                  Each partner has their own privacy policy governing their use of cookies.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Duration:</strong> Typically 12-24 months
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Can You Disable Them?</strong> Yes, you can opt out of targeted advertising cookies. However, you may still see advertisements, but they will be less relevant to your interests.
                </p>
              </div>

              {/* Social Media Cookies */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-3">5. Social Media Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If we integrate social media features (such as sharing buttons), these platforms may set cookies on your device.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-2">Purpose:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Enable social sharing functionality</li>
                  <li>Track social media interactions</li>
                  <li>Integrate social media content</li>
                  <li>Measure social engagement</li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-2">Third-Party Platforms:</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Facebook</li>
                  <li>Twitter/X</li>
                  <li>Instagram</li>
                  <li>Other social networks</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                  Important: We do not control these cookies. Please review the privacy policies of respective social media platforms for information on their cookies.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Duration:</strong> Varies by platform
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Can You Disable Them?</strong> Yes, through your social media account settings or browser settings.
                </p>
              </div>
            </section>

            {/* Cookie Duration */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookie Duration: Session vs. Persistent</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Session Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Lifespan:</strong> Deleted when you close your browser</li>
                <li><strong>Purpose:</strong> Remember your actions during a single browsing session</li>
                <li><strong>Examples:</strong> Shopping cart contents, form data</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Persistent Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Lifespan:</strong> Remain on your device for a set period or until manually deleted</li>
                <li><strong>Purpose:</strong> Remember preferences across multiple sessions</li>
                <li><strong>Examples:</strong> Login information, language preferences</li>
                <li><strong>Typical Duration:</strong> 12-24 months</li>
              </ul>
            </section>

            {/* First-Party vs Third-Party */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">First-Party vs. Third-Party Cookies</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">First-Party Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Set By:</strong> Fansclubonly directly</li>
                <li><strong>Purpose:</strong> Essential functionality, user experience, analytics</li>
                <li><strong>Control:</strong> We have full control over these cookies</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Third-Party Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Set By:</strong> External service providers (Google, advertising networks, etc.)</li>
                <li><strong>Purpose:</strong> Analytics, advertising, social media integration</li>
                <li><strong>Control:</strong> Managed by third parties according to their policies</li>
              </ul>
            </section>

            {/* How We Use Cookie Information */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Cookie Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use information collected through cookies to:
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Improve User Experience</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Remember your preferences and settings</li>
                <li>Personalize content and recommendations</li>
                <li>Provide seamless navigation</li>
                <li>Enhance search functionality</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Analyze Website Performance</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Understand user behavior and patterns</li>
                <li>Identify popular content and features</li>
                <li>Detect and fix technical issues</li>
                <li>Optimize website speed and performance</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Deliver Relevant Content</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Show creator recommendations based on interests</li>
                <li>Display relevant categories</li>
                <li>Customize search results</li>
                <li>Provide location-specific content</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Advertising and Marketing</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Display relevant advertisements</li>
                <li>Measure advertising effectiveness</li>
                <li>Manage advertising frequency</li>
                <li>Support affiliate partnerships</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Security and Fraud Prevention</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Detect and prevent fraudulent activity</li>
                <li>Secure user sessions</li>
                <li>Protect against abuse</li>
                <li>Maintain website integrity</li>
              </ul>
            </section>

            {/* Your Cookie Choices */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Your Cookie Choices and Controls</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You have several options to control and manage cookies:
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">1. Cookie Consent Banner</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When you first visit our Website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li><strong>Accept All Cookies:</strong> Allow all cookies for full functionality</li>
                <li><strong>Reject Non-Essential Cookies:</strong> Use only essential cookies</li>
                <li><strong>Customize Settings:</strong> Choose which cookie categories to enable</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">2. Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>

              <div className="space-y-4 mb-6">
                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Google Chrome</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-2">
                    <li>Click the three dots menu → Settings</li>
                    <li>Privacy and security → Cookies and other site data</li>
                    <li>Choose your preferred option</li>
                    <li>Manage exceptions and clear cookies</li>
                  </ol>
                  <p className="text-muted-foreground text-sm">
                    <strong>Help:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.google.com/chrome/answer/95647</a>
                  </p>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Mozilla Firefox</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-2">
                    <li>Click menu → Settings</li>
                    <li>Privacy & Security</li>
                    <li>Cookies and Site Data</li>
                    <li>Manage settings and exceptions</li>
                  </ol>
                  <p className="text-muted-foreground text-sm">
                    <strong>Help:</strong> <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Support</a>
                  </p>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Safari (Mac)</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-2">
                    <li>Safari menu → Preferences</li>
                    <li>Privacy tab</li>
                    <li>Manage cookies and website data</li>
                  </ol>
                  <p className="text-muted-foreground text-sm">
                    <strong>Help:</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Support</a>
                  </p>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Microsoft Edge</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-2">
                    <li>Click three dots → Settings</li>
                    <li>Cookies and site permissions</li>
                    <li>Manage and delete cookies and site data</li>
                  </ol>
                  <p className="text-muted-foreground text-sm">
                    <strong>Help:</strong> <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Support</a>
                  </p>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Safari (iOS)</h4>
                  <p className="text-muted-foreground">Settings → Safari → Block All Cookies (or customize)</p>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Chrome (Android)</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>Chrome app → three dots → Settings</li>
                    <li>Site settings → Cookies</li>
                    <li>Adjust preferences</li>
                  </ol>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Opt-Out Tools</h3>
              <div className="space-y-3 mb-6">
                <div className="pl-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Google Ads Settings</h4>
                  <p className="text-muted-foreground mb-1">Control personalized advertising from Google:</p>
                  <p className="text-muted-foreground"><strong>Visit:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://adssettings.google.com</a></p>
                </div>

                <div className="pl-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Network Advertising Initiative (NAI)</h4>
                  <p className="text-muted-foreground mb-1">Opt out of targeted advertising from NAI members:</p>
                  <p className="text-muted-foreground"><strong>Visit:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://optout.networkadvertising.org/</a></p>
                </div>

                <div className="pl-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Digital Advertising Alliance (DAA)</h4>
                  <p className="text-muted-foreground mb-1">Manage advertising preferences:</p>
                  <p className="text-muted-foreground"><strong>Visit:</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://optout.aboutads.info/</a></p>
                </div>

                <div className="pl-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">European Interactive Digital Advertising Alliance (EDAA)</h4>
                  <p className="text-muted-foreground mb-1">For European users:</p>
                  <p className="text-muted-foreground"><strong>Visit:</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.youronlinechoices.com/</a></p>
                </div>

                <div className="pl-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Google Analytics Opt-Out</h4>
                  <p className="text-muted-foreground mb-1">Browser add-on to prevent Google Analytics tracking:</p>
                  <p className="text-muted-foreground"><strong>Download:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">4. Mobile Device Settings</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground pl-4">
                  <strong>iOS:</strong> Settings → Privacy → Tracking → Toggle off "Allow Apps to Request to Track"
                </p>
                <p className="text-muted-foreground pl-4">
                  <strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization
                </p>
              </div>
            </section>

            {/* Impact of Disabling Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Impact of Disabling Cookies</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">What Happens When You Disable Cookies?</h3>

              <div className="space-y-4">
                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Essential Cookies Blocked</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Website may not function properly</li>
                    <li>Unable to maintain your session</li>
                    <li>Security features may not work</li>
                    <li>Cannot remember cookie preferences</li>
                  </ul>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies Blocked</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We cannot improve user experience based on data</li>
                    <li>Cannot identify technical issues effectively</li>
                    <li>No impact on your browsing experience</li>
                  </ul>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Functionality Cookies Blocked</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Need to reset preferences on each visit</li>
                    <li>Personalization features won't work</li>
                    <li>May need to re-select language/region</li>
                    <li>Loss of convenience features</li>
                  </ul>
                </div>

                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Advertising Cookies Blocked</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Still see advertisements (same quantity)</li>
                    <li>Ads will be less relevant to your interests</li>
                    <li>May see the same ad repeatedly</li>
                    <li>No impact on core functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Do Not Track */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Do Not Track (DNT) Signals</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals websites you visit that you do not want to have your online activity tracked.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                Our Position:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals, but we provide you with multiple options to control cookies and tracking as described in this policy.
              </p>
            </section>

            {/* Cookies and Personal Data */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookies and Personal Data</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">What Cookies Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Most cookies collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Technical information (IP address, browser type, device)</li>
                <li>Usage information (pages visited, time spent)</li>
                <li>Preferences (language, region)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Personal Identification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most cookies do NOT directly identify you personally. However, when combined with other information (such as login data), they may be used to identify you.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We are committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Transparency about cookie usage</li>
                <li>Providing control over non-essential cookies</li>
                <li>Protecting your privacy</li>
                <li>Complying with applicable data protection laws</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                For more information on how we handle personal data, please see our Privacy Policy.
              </p>
            </section>

            {/* Cookies and Children */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookies and Children</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Website is not intended for individuals under 18 years of age. We do not knowingly collect information from children through cookies or any other means.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you are under 18, please do not use our Website or provide any information through cookies or otherwise.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Changes in our cookie practices</li>
                <li>New features or services</li>
                <li>Changes in applicable laws</li>
                <li>Feedback from users</li>
                <li>Industry best practices</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">When We Update</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When we make significant changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We'll update the "Last Updated" date at the top</li>
                <li>We'll notify you via website banner or email</li>
                <li>We may request your renewed consent if required by law</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Your Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>
            </section>

            {/* International Users */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">International Users</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">European Union Users</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you are located in the European Economic Area (EEA), you have specific rights regarding cookies under the General Data Protection Regulation (GDPR) and the ePrivacy Directive.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
                Your Rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Right to be informed about cookie usage (this policy)</li>
                <li>Right to consent or refuse non-essential cookies</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to access data collected via cookies</li>
                <li>Right to data portability</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">California Users</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                California residents have rights under the California Consumer Privacy Act (CCPA) regarding information collected through cookies, particularly targeting and advertising cookies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
                Your Rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right to know what information is collected</li>
                <li>Right to opt-out of sale of personal information</li>
                <li>Right to non-discrimination</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us About Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or concerns about our use of cookies:
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> <a href="mailto:privacy@fansclubonly.com" className="text-primary hover:underline">privacy@fansclubonly.com</a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
                </p>
                <p className="text-muted-foreground">
                  <strong>General Support:</strong> <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
                </p>
                <p className="text-muted-foreground">
                  <strong>We typically respond within:</strong> 24-48 hours (business days)
                </p>
              </div>
            </section>

            {/* Related Policies */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Related Policies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For comprehensive information about how we protect your privacy:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong>Privacy Policy:</strong> <Link to="/privacy" className="text-primary hover:underline">View Privacy Policy</Link></li>
                <li><strong>Terms of Service:</strong> <Link to="/terms" className="text-primary hover:underline">View Terms of Service</Link></li>
              </ul>
            </section>

            {/* Cookie List */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookie List</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                Current Cookies Used on Fansclubonly
              </p>
              <p className="text-muted-foreground text-sm italic mb-4">
                *This section will be updated as we implement specific cookies
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-secondary/20">
                      <th className="border border-border p-3 text-left text-foreground">Cookie Name</th>
                      <th className="border border-border p-3 text-left text-foreground">Type</th>
                      <th className="border border-border p-3 text-left text-foreground">Purpose</th>
                      <th className="border border-border p-3 text-left text-foreground">Duration</th>
                      <th className="border border-border p-3 text-left text-foreground">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">_ga</td>
                      <td className="border border-border p-3 text-muted-foreground">Analytics</td>
                      <td className="border border-border p-3 text-muted-foreground">Google Analytics tracking</td>
                      <td className="border border-border p-3 text-muted-foreground">2 years</td>
                      <td className="border border-border p-3 text-muted-foreground">Google</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">_gid</td>
                      <td className="border border-border p-3 text-muted-foreground">Analytics</td>
                      <td className="border border-border p-3 text-muted-foreground">Google Analytics session</td>
                      <td className="border border-border p-3 text-muted-foreground">24 hours</td>
                      <td className="border border-border p-3 text-muted-foreground">Google</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">cookie_consent</td>
                      <td className="border border-border p-3 text-muted-foreground">Essential</td>
                      <td className="border border-border p-3 text-muted-foreground">Stores cookie preferences</td>
                      <td className="border border-border p-3 text-muted-foreground">12 months</td>
                      <td className="border border-border p-3 text-muted-foreground">Fansclubonly</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">session_id</td>
                      <td className="border border-border p-3 text-muted-foreground">Essential</td>
                      <td className="border border-border p-3 text-muted-foreground">Maintains user session</td>
                      <td className="border border-border p-3 text-muted-foreground">Session</td>
                      <td className="border border-border p-3 text-muted-foreground">Fansclubonly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm italic mt-4">
                Note: This is a representative list. The actual cookies used may vary based on your browsing behavior and third-party services.
              </p>
            </section>

            {/* Glossary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Glossary</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-foreground">Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Small text file stored on your device by a website</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">First-Party Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Cookie set by the website you're visiting</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Third-Party Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Cookie set by a domain other than the website you're visiting</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Session Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Temporary cookie deleted when you close your browser</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Persistent Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Cookie that remains on your device for a set period</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Essential Cookie:</dt>
                  <dd className="text-muted-foreground pl-4">Cookie necessary for website functionality</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Tracking:</dt>
                  <dd className="text-muted-foreground pl-4">Monitoring user behavior across websites or over time</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Personal Data:</dt>
                  <dd className="text-muted-foreground pl-4">Information that identifies or can identify an individual</dd>
                </div>
              </dl>
            </section>

            {/* Summary */}
            <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Summary</h2>
              <ul className="list-none space-y-3 text-muted-foreground">
                <li>✅ We use cookies to improve your experience</li>
                <li>✅ You can control non-essential cookies</li>
                <li>✅ Essential cookies are required for functionality</li>
                <li>✅ We respect your privacy and choices</li>
                <li>✅ You can change preferences at any time</li>
                <li>✅ We're transparent about cookie usage</li>
              </ul>
              <p className="text-center mt-6 text-lg font-semibold text-foreground">
                Thank you for taking the time to understand our Cookie Policy. Your privacy and control over your data are important to us.
              </p>
            </section>

            {/* Footer Note */}
            <section className="text-center border-t pt-8">
              <p className="text-muted-foreground italic">
                Fansclubonly - Transparent cookie practices for a better user experience
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
