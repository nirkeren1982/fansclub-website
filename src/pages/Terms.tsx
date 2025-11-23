import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Welcome Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to Fansclubonly</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of fansclubonly.com (the "Website"), operated by Fansclubonly ("we," "us," or "our"). By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Website.
              </p>
            </section>

            {/* Important Disclaimers */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Important Disclaimers</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">No Affiliation with OnlyFans</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fansclubonly is an independent creator directory and discovery platform. We are NOT affiliated with, endorsed by, sponsored by, or connected to OnlyFans.com or FENIX INTERNATIONAL LIMITED in any way. OnlyFans is a registered trademark of FENIX INTERNATIONAL LIMITED, and we make no claim to this or any related trademarks.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide organic traffic and visibility to content creators, helping them grow their audience and increase their revenue. We serve as a discovery tool connecting users with creators based on their preferences and interests.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Definitions</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For clarity, the following terms have specific meanings throughout these Terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>"We," "Us," "Our" refers to Fansclubonly and its operators</li>
                <li>"You," "Your," "User" refers to any person accessing or using the Website</li>
                <li>"Creator" refers to content creators whose profiles are listed on our Website</li>
                <li>"Content" refers to all text, images, information, and materials on the Website</li>
                <li>"Services" refers to all features, tools, and functionality provided through the Website</li>
              </ul>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                By accessing Fansclubonly, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are at least 18 years of age</li>
                <li>You have read, understood, and agree to these Terms</li>
                <li>You have the legal capacity to enter into this agreement</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>You understand the nature of our service as a directory and discovery platform</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Intellectual Property and Content Rights</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Creator Content Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We DO NOT own, claim, or store any creator content. All intellectual property rights in creator images, videos, text, and other materials belong exclusively to the respective creators.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">How We Handle Images</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We link to publicly available creator profile images from external platforms</li>
                <li>We do not host, store, or maintain copies of creator content on our servers</li>
                <li>We provide HTML references that direct your browser to publicly accessible content</li>
                <li>These references are similar to how search engines display image previews</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Copyright Respect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We respect intellectual property rights and comply with copyright laws. All creator media, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Profile photographs</li>
                <li>Promotional images</li>
                <li>Biographical content</li>
                <li>Any associated materials</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                ...remain the exclusive property of the creators themselves.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3 mt-4">Website Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                The design, structure, organization, code, and compilation of content on Fansclubonly are our intellectual property and are protected by copyright and trademark laws.
              </p>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">User Conduct and Restrictions</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Permitted Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You may use Fansclubonly for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Personal, non-commercial discovery of creators</li>
                <li>Researching creator profiles and categories</li>
                <li>Accessing publicly available information</li>
                <li>Following links to external creator platforms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Prohibited Activities</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You must NOT:
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mb-2">Content Violations</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Download, copy, reproduce, or distribute creator images or content</li>
                <li>Screenshot, record, or capture any creator materials for redistribution</li>
                <li>Remove, alter, or obscure any copyright notices or watermarks</li>
                <li>Claim ownership of any creator content</li>
                <li>Use content for commercial purposes without authorization</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Technical Violations</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Attempt to circumvent our technical protection measures</li>
                <li>Use automated tools, bots, or scrapers to access the Website</li>
                <li>Reverse engineer, decompile, or disassemble any Website code</li>
                <li>Interfere with or disrupt the Website's functionality</li>
                <li>Bypass any security or access control mechanisms</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Misuse of Service</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Impersonate any person or entity</li>
                <li>Provide false or misleading information</li>
                <li>Engage in fraudulent activities</li>
                <li>Harass, stalk, or threaten creators or other users</li>
                <li>Post spam, malware, or malicious content</li>
                <li>Collect user information without consent</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Legal Violations</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any applicable local, national, or international laws</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in illegal activities through or related to the Website</li>
                <li>Violate the terms of service of linked external platforms</li>
              </ul>
            </section>

            {/* Creator Opt-Out */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Creator Opt-Out Rights</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Removal Requests</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creators have the right to request removal from Fansclubonly at any time. We respect creator preferences regarding their visibility on our platform.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">How to Opt Out</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To request removal of your profile, please:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Send an email to: dmca@fansclubonly.com or support@fansclubonly.com</li>
                <li>Include your creator username</li>
                <li>Specify the platform (e.g., OnlyFans username)</li>
                <li>Provide verification of your identity as the creator</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will process legitimate removal requests within 7-10 business days.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Impact of Removal</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Please note that opting out means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Loss of free organic traffic from our platform</li>
                <li>Reduced discoverability for potential subscribers</li>
                <li>Removal from all search results and categories on our Website</li>
              </ul>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Links to External Platforms</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Third-Party Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our Website contains links to external platforms, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>OnlyFans creator profiles</li>
                <li>Social media accounts</li>
                <li>Other creator platforms</li>
                <li>Advertising partners</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Your Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When you click on external links:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You leave Fansclubonly and are subject to the terms and policies of the external platform</li>
                <li>We are not responsible for the content, privacy practices, or terms of external sites</li>
                <li>Your interactions with external platforms are solely between you and those platforms</li>
                <li>We do not guarantee the accuracy, safety, or legality of external content</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">No Endorsement</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                The presence of a link does not imply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Endorsement of the external platform or creator</li>
                <li>Verification of content accuracy</li>
                <li>Guarantee of service quality</li>
                <li>Association or partnership with the linked platform</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Use of Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use cookies and similar technologies to enhance your experience. By using our Website, you consent to our use of cookies as described in our Privacy Policy.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Cookie Purposes</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Essential functionality</li>
                <li>User preferences</li>
                <li>Analytics and performance monitoring</li>
                <li>Security features</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can manage cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">User-Generated Content and Comments</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">If We Offer Interactive Features</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Should we implement comment sections, forums, or other interactive features:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Your Responsibilities</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You are solely responsible for any content you post, and you represent that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You have the right to post such content</li>
                <li>Your content does not violate any third-party rights</li>
                <li>Your content complies with all applicable laws</li>
                <li>Your content is not defamatory, obscene, or offensive</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Our Rights</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Monitor all user-generated content</li>
                <li>Remove content that violates these Terms</li>
                <li>Remove content we deem inappropriate in our sole discretion</li>
                <li>Terminate accounts of users who violate these Terms</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">License Grant</h4>
              <p className="text-muted-foreground leading-relaxed">
                By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content for the purpose of operating and promoting our Website.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Disclaimer of Warranties</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">"As-Is" Service</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 uppercase font-semibold">
                FANSCLUBONLY IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR COMPLETENESS OF INFORMATION</li>
                <li>UNINTERRUPTED OR ERROR-FREE SERVICE</li>
                <li>FREEDOM FROM VIRUSES OR HARMFUL COMPONENTS</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">No Guarantee of Results</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>That you will find specific creators</li>
                <li>The accuracy of creator information</li>
                <li>The availability of external links</li>
                <li>That creators will accept new subscribers</li>
                <li>Any specific outcomes from using our service</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Third-Party Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We are not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The accuracy of creator-provided information</li>
                <li>Creator content or behavior on external platforms</li>
                <li>The availability or terms of external platforms</li>
                <li>Disputes between users and creators</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Maximum Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 uppercase font-semibold">
                TO THE FULLEST EXTENT PERMITTED BY LAW, FANSCLUBONLY AND ITS OPERATORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Direct Damages</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Any direct damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Your use or inability to use the Website</li>
                <li>Unauthorized access to your data</li>
                <li>Technical failures or interruptions</li>
                <li>Errors or inaccuracies in content</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Indirect Damages</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Cost of substitute services</li>
                <li>Consequential, incidental, or punitive damages</li>
                <li>Any damages arising from third-party conduct</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Jurisdictional Limitations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Some jurisdictions do not allow limitation of certain warranties or liabilities. In such cases, our liability shall be limited to the maximum extent permitted by law.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You agree to indemnify, defend, and hold harmless Fansclubonly and its operators, employees, affiliates, and partners from any claims, damages, losses, liabilities, and expenses (including reasonable attorney fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Your use or misuse of the Website</li>
                <li>Your violation of applicable laws</li>
                <li>Content you post or submit (if applicable)</li>
                <li>Your interactions with creators or other users</li>
              </ul>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Fansclubonly, you also agree to our Privacy Policy.
              </p>
            </section>

            {/* Geographic Restrictions */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Geographic Restrictions and Compliance</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Age Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You must be at least 18 years of age to use this Website. By using Fansclubonly, you represent and warrant that you meet this requirement.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Geographic Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for complying with all applicable laws and regulations in your jurisdiction. If the use of our Website is prohibited in your location, you must not access or use our services.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Modifications to Terms and Services</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Changes to Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We reserve the right to modify these Terms at any time. When we make changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We will update the "Last Updated" date</li>
                <li>Significant changes will be communicated via Website notice or email</li>
                <li>Your continued use after changes constitutes acceptance</li>
                <li>We may require your explicit consent for material changes</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Changes to Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
                <li>Modify, suspend, or discontinue any aspect of the Website</li>
                <li>Change features, functionality, or availability</li>
                <li>Impose limits on certain features</li>
                <li>Restrict access to parts or all of the Website</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We will make reasonable efforts to notify users of significant service changes.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Termination</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may stop using our Website at any time.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Suspend or terminate your access to the Website at any time</li>
                <li>Remove any content that violates these Terms</li>
                <li>Take legal action for Terms violations</li>
                <li>Terminate the Website entirely</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Effect of Termination</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your right to use the Website ceases immediately</li>
                <li>Provisions regarding intellectual property, disclaimers, and limitations of liability survive</li>
                <li>You remain liable for any violations that occurred before termination</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Dispute Resolution</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Informal Resolution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before initiating formal legal proceedings, we encourage you to contact us to seek an informal resolution of any disputes.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Arbitration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes that cannot be resolved informally may be subject to binding arbitration in accordance with [applicable arbitration rules].
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Class Action Waiver</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree that any disputes will be resolved on an individual basis and waive the right to participate in class actions or class-wide arbitration.
              </p>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Miscellaneous Provisions</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Entire Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fansclubonly regarding the use of our Website.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Severability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Waiver</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Assignment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may assign our rights and obligations under these Terms without your consent. You may not assign your rights or obligations without our prior written consent.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">No Agency</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and Fansclubonly.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Headings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Section headings are for convenience only and shall not affect the interpretation of these Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For questions, concerns, or notices regarding these Terms of Service:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Fansclubonly</strong>
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mb-3">
                <li>General Inquiries: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a></li>
                <li>DMCA Requests: <a href="mailto:dmca@fansclubonly.com" className="text-primary hover:underline">dmca@fansclubonly.com</a></li>
                <li>Privacy Matters: <a href="mailto:privacy@fansclubonly.com" className="text-primary hover:underline">privacy@fansclubonly.com</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We will respond to inquiries within a reasonable timeframe.
              </p>
            </section>

            {/* Acknowledgment */}
            <section className="bg-secondary/20 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Fansclubonly, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
