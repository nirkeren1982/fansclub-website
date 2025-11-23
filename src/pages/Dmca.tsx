import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dmca = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">DMCA Policy and Copyright Information</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Our Commitment */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Commitment to Copyright Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fansclubonly respects the intellectual property rights of creators and complies with the Digital Millennium Copyright Act (DMCA), codified in Title 17, United States Code, Section 512 (17 U.S.C. § 512), and the World Intellectual Property Organization (WIPO) copyright treaties.
              </p>
            </section>

            {/* Understanding Our Service */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Our Service</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Fansclubonly operates as a <strong>creator directory and discovery platform</strong>. Our purpose is to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Help users discover content creators based on their preferences</li>
                <li>Provide creators with free organic traffic and visibility</li>
                <li>Connect potential subscribers with creators they're interested in</li>
                <li>Increase creator revenue through enhanced discoverability</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">What We DON'T Do</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We do NOT host, store, or distribute any creator content</li>
                <li>We do NOT display leaked, pirated, or unauthorized material</li>
                <li>We do NOT claim ownership of any creator images, videos, or media</li>
                <li>We do NOT bypass any security measures or paywalls</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">How Our Platform Works</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Think of Fansclubonly as a specialized search engine for creators—similar to how Google works, but focused specifically on creator discovery.
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Our Technical Approach</h4>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We link to publicly available creator profile images from external platforms</li>
                <li>We provide HTML references that direct your browser to publicly accessible content</li>
                <li>We do not make copies or store creator content on our servers</li>
                <li>All media remains on the original platforms (such as OnlyFans public profiles)</li>
              </ol>

              <h4 className="text-xl font-semibold text-foreground mb-2">What You See</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When you view a creator profile on Fansclubonly:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your browser fetches the publicly available profile image directly from the source platform</li>
                <li>We provide informational metadata (username, bio, subscription price) that is publicly accessible</li>
                <li>Clicking on a creator's profile takes you directly to their official platform page</li>
              </ul>
            </section>

            {/* Benefits to Creators */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Benefits to Creators</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Free Promotion and Traffic</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                By being listed on Fansclubonly, creators benefit from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Increased Visibility:</strong> Thousands of potential subscribers discover your profile</li>
                <li><strong>Targeted Traffic:</strong> Users searching for creators like you find your profile</li>
                <li><strong>No Cost Marketing:</strong> Completely free exposure and promotion</li>
                <li><strong>Enhanced Discoverability:</strong> Appear in relevant category searches</li>
                <li><strong>Revenue Growth:</strong> More visibility leads to more subscribers</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Comparison to Search Engines</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Just as creators benefit from appearing in Google search results, being listed on Fansclubonly helps you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Reach fans who are specifically looking for creators with your attributes</li>
                <li>Get found by users searching relevant categories</li>
                <li>Attract subscribers who otherwise wouldn't discover your profile</li>
                <li>Compete effectively in a crowded marketplace</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Optional Premium Promotion</h3>
              <p className="text-muted-foreground leading-relaxed">
                For creators who want even more exposure, we offer optional paid advertising and promotional features to further boost your profile visibility and subscriber growth.
              </p>
            </section>

            {/* Removal Requests */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Removal Requests (Opt-Out)</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Before You Request Removal</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We encourage you to consider the following before requesting removal:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>You will lose the free organic traffic we provide</li>
                <li>Potential subscribers may not find your profile</li>
                <li>Your visibility in relevant categories will be eliminated</li>
                <li>You may miss out on revenue opportunities from new fans</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                However, we fully respect your right to control how your profile is featured. If you still wish to be removed from Fansclubonly, we will honor your request.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">How to Opt Out</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To request removal of your profile from our directory:
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>1. Send an email to:</strong> <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a> or <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>2. Include the following information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Your creator username</li>
                <li>The platform where you create content (e.g., "OnlyFans")</li>
                <li>Your OnlyFans profile URL (if applicable)</li>
                <li>A brief statement requesting removal</li>
                <li>Method to verify your identity as the creator</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>3. Verification Required:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Send the email from an address associated with your creator account, OR</li>
                <li>Provide a link to a public post on your platform mentioning your removal request, OR</li>
                <li>Include a photo verification (holding a sign with your username and "Fansclubonly Removal")</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Processing Timeline</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We will acknowledge receipt of your request within 48 hours</li>
                <li>Complete removal will be processed within 7-10 business days</li>
                <li>You will receive confirmation once your profile has been removed</li>
              </ul>
            </section>

            {/* DMCA Claims */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">DMCA Copyright Infringement Claims</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">When to File a DMCA Notice</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                File a DMCA takedown notice if you believe:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>We are displaying copyrighted material without authorization</li>
                <li>Your intellectual property rights are being violated</li>
                <li>Content is being used in a way that exceeds fair use</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> Removal requests (opt-outs) are different from DMCA claims. If you simply want your profile removed from our directory, use the opt-out process above. DMCA notices are for copyright infringement claims.
              </p>
            </section>

            {/* DMCA Notice Requirements */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">DMCA Notice Requirements</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under 17 U.S.C. § 512(c)(3), a valid DMCA notice must include:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">1. Physical or Electronic Signature</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Handwritten signature on a scanned document, OR</li>
                    <li>Digital signature, OR</li>
                    <li>Typed full legal name with statement of authority</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">2. Identification of Copyrighted Work</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Detailed description of the copyrighted work claimed to be infringed</li>
                    <li>If multiple works, a representative list</li>
                    <li>Copyright registration number (if available)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">3. Identification of Infringing Material</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Specific URL(s) where the material appears on our Website</li>
                    <li>Detailed description sufficient to locate the material</li>
                    <li>Screenshots or examples (helpful but not required)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">4. Your Contact Information</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Full legal name</li>
                    <li>Mailing address</li>
                    <li>Telephone number</li>
                    <li>Email address</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">5. Good Faith Statement</h4>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    A statement that you have a good faith belief that the use of the material is not authorized by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>The copyright owner</li>
                    <li>The copyright owner's agent</li>
                    <li>The law</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">6. Accuracy and Authority Statement</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>A statement that the information in the notice is accurate</li>
                    <li>A statement under penalty of perjury that you are authorized to act on behalf of the copyright owner</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sample Notice */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample DMCA Notice</h2>
              <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
{`To: DMCA Agent, Fansclubonly
Email: dmca@fansclubonly.com

I, [Your Full Legal Name], hereby submit this DMCA Takedown Notice:

1. I am the copyright owner (or authorized agent) of the following work(s):
   [Describe the copyrighted work]

2. The following material on your website infringes my copyright:
   URL(s): [List specific URLs on fansclubonly.com]
   Description: [Describe the infringing material]

3. My contact information:
   Name: [Full Legal Name]
   Address: [Complete Mailing Address]
   Phone: [Phone Number]
   Email: [Email Address]

4. I have a good faith belief that the use of the copyrighted material 
   described above is not authorized by the copyright owner, its agent, 
   or the law.

5. I declare under penalty of perjury that the information in this notice 
   is accurate and that I am the copyright owner or authorized to act on 
   the copyright owner's behalf.

Signature: [Your Signature]
Date: [Date]`}
                </pre>
              </div>
            </section>

            {/* Where to Send */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Where to Send DMCA Notices</h2>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  <strong>Primary Contact:</strong><br />
                  Email: <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a>
                </p>
                <p className="text-muted-foreground mb-3">
                  <strong>Alternative Contact:</strong><br />
                  Email: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Subject Line:</strong> DMCA Takedown Notice
                </p>
              </div>
            </section>

            {/* Response to DMCA */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Response to DMCA Notices</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Processing Timeline</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Receipt Acknowledgment:</strong> Within 24-48 hours</li>
                <li><strong>Notice Review:</strong> 2-3 business days</li>
                <li><strong>Content Removal:</strong> If valid, within 5-7 business days</li>
                <li><strong>Confirmation:</strong> Email sent when action is completed</li>
              </ol>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Valid Notices</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If we receive a valid DMCA notice, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Promptly investigate the claim</li>
                <li>Remove or disable access to the allegedly infringing material</li>
                <li>Notify the affected party (if applicable)</li>
                <li>Document the notice for our records</li>
                <li>Take reasonable steps to prevent future infringement</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Invalid or Incomplete Notices</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If a notice is incomplete or invalid, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact the sender to request missing information</li>
                <li>Provide a reasonable opportunity to correct the notice</li>
                <li>Decline to process the notice if corrections are not made</li>
              </ul>
            </section>

            {/* Counter-Notification */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Counter-Notification Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe content was removed due to mistake or misidentification, you may submit a counter-notification.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Counter-Notification Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A valid counter-notification must include:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Your Physical or Electronic Signature</strong></li>
                <li><strong>Identification of Removed Material</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Description of the material that was removed</li>
                    <li>Location where it appeared before removal</li>
                  </ul>
                </li>
                <li><strong>Good Faith Statement</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Statement under penalty of perjury that you have a good faith belief that the material was removed due to mistake or misidentification</li>
                  </ul>
                </li>
                <li><strong>Consent to Jurisdiction</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Statement that you consent to the jurisdiction of the Federal District Court for your judicial district</li>
                    <li>Statement that you will accept service of process from the person who filed the original DMCA notice</li>
                  </ul>
                </li>
                <li><strong>Your Contact Information</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Name, address, phone number, and email</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Counter-Notification Process</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Send counter-notification to: <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a></li>
                <li>We will forward the counter-notification to the original complainant</li>
                <li>If the complainant does not file a court action within 10-14 business days, we may restore the removed content</li>
              </ol>
            </section>

            {/* Repeat Infringer Policy */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Repeat Infringer Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Fansclubonly has a policy of terminating, in appropriate circumstances, the accounts or access of users or creators who are repeat copyright infringers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Track copyright infringement claims</li>
                <li>Issue warnings for first-time violations</li>
                <li>Terminate access for repeat offenders</li>
                <li>Maintain records of infringement notices</li>
              </ul>
            </section>

            {/* Fair Use */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Fair Use Consideration</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Before filing a DMCA notice, please consider whether the use of copyrighted material may be protected under fair use doctrine (17 U.S.C. § 107).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Fair use factors include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Purpose and character of the use (commercial vs. nonprofit educational)</li>
                <li>Nature of the copyrighted work</li>
                <li>Amount and substantiality of the portion used</li>
                <li>Effect on the potential market for the original work</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Fansclubonly operates as a directory service providing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Informational purposes</li>
                <li>Limited display of publicly available profile images</li>
                <li>Links to original content sources</li>
                <li>No commercial exploitation of creator content</li>
              </ul>
            </section>

            {/* Misrepresentation Warning */}
            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h2 className="text-3xl font-bold text-foreground mb-4">Misrepresentation Warning</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Important:</strong> Under Section 512(f) of the DMCA, any person who knowingly materially misrepresents:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>That material is infringing, OR</li>
                <li>That material was removed or disabled by mistake or misidentification</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-3">
                ...may be subject to liability for damages, including costs and attorney fees.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>False DMCA claims can result in:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Civil liability</li>
                <li>Monetary damages</li>
                <li>Attorney fees and costs</li>
                <li>Potential criminal charges</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                Only file a DMCA notice if you have a genuine good faith belief that your copyright has been infringed.
              </p>
            </section>

            {/* Questions */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Questions and Assistance</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Need Help?</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have questions about:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Whether to file a DMCA notice or opt-out request</li>
                <li>How our platform works</li>
                <li>Your rights as a creator</li>
                <li>The DMCA process</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Contact us at: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Legal Advice</h3>
              <p className="text-muted-foreground leading-relaxed">
                This policy provides general information about DMCA procedures. It is not legal advice. For specific guidance about copyright law or DMCA procedures, please consult with a qualified attorney.
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Resources</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>US Copyright Office:</strong> <a href="https://www.copyright.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.copyright.gov</a></li>
                <li><strong>DMCA Information:</strong> <a href="https://www.dmca.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dmca.com</a></li>
                <li><strong>WIPO:</strong> <a href="https://www.wipo.int" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.wipo.int</a></li>
              </ul>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may update this DMCA Policy periodically to reflect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Changes in applicable laws</li>
                <li>Updates to our services</li>
                <li>Improvements to our procedures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Significant changes will be communicated through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Website notice</li>
                <li>Email notification (if applicable)</li>
                <li>Updated "Last Updated" date</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-secondary/20 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-3">
                <strong>DMCA Agent for Fansclubonly:</strong>
              </p>
              <p className="text-muted-foreground mb-2">
                Email: <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a>
              </p>
              <p className="text-muted-foreground mb-4">
                Support Email: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a>
              </p>
              <p className="text-muted-foreground">
                Please use "DMCA Notice" or "DMCA Counter-Notification" in the subject line as appropriate.
              </p>
            </section>

            {/* Final Note */}
            <section className="text-center border-t pt-8 mt-8">
              <p className="text-muted-foreground leading-relaxed italic">
                We respect intellectual property rights and are committed to responding promptly to valid copyright concerns while maintaining a platform that benefits both users and creators.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dmca;

