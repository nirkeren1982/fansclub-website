import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-8 md:px-12 lg:px-16 py-12 md:py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Fansclubonly</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">Welcome to the Future of Creator Discovery</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fansclubonly is your trusted companion in the exciting world of online content creation. We've built something special—a platform that makes discovering talented creators simple, enjoyable, and reliable. Whether you're searching for your next favorite creator or you're a creator looking to grow your audience, we're here to help you succeed.
              </p>
            </section>

            {/* Our Story */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">The Discovery Problem</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                In today's digital landscape, thousands of talented creators are producing incredible content across various platforms. But there's a challenge: <strong>discoverability</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-3">
                For users, finding creators who match their specific interests often means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Scrolling endlessly through social media</li>
                <li>Navigating through multiple link aggregators</li>
                <li>Relying on word-of-mouth recommendations</li>
                <li>Spending hours searching without great results</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-3">
                For creators, standing out in a crowded market means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Competing for visibility on saturated platforms</li>
                <li>Struggling to reach their target audience</li>
                <li>Missing out on potential subscribers</li>
                <li>Investing significant time in self-promotion</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Fansclubonly was created to solve this discovery problem for both sides of the equation. We built a comprehensive, searchable directory that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Connects users directly with creators who match their interests</li>
                <li>Provides creators with free organic traffic and visibility</li>
                <li>Eliminates the need for endless scrolling and searching</li>
                <li>Makes discovery fast, precise, and enjoyable</li>
              </ul>
            </section>

            {/* What We Do */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">For Users: Discover Your Perfect Creators</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fansclubonly is your personal guide to the world of content creators. We offer:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Powerful Search Capabilities</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Advanced Filtering:</strong> Find creators by category, location, pricing, and more</li>
                <li><strong>Smart Search:</strong> Natural language queries that understand what you're looking for</li>
                <li><strong>Category Browsing:</strong> Explore organized collections of creators by interest</li>
                <li><strong>Trending Discovery:</strong> See what's popular and who's gaining attention</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Comprehensive Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Every creator profile includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Profile images and biographical information</li>
                <li>Subscription pricing details</li>
                <li>Content statistics (photos, videos, engagement)</li>
                <li>Direct links to creator platforms</li>
                <li>Category classifications</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">User-Friendly Experience</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Clean, intuitive interface</li>
                <li>Fast loading and responsive design</li>
                <li>Mobile-friendly browsing</li>
                <li>Regularly updated information</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">For Creators: Grow Your Audience</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're a content creator, Fansclubonly provides powerful benefits:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Free Organic Traffic</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>No Cost Promotion:</strong> Completely free visibility and exposure</li>
                <li><strong>Targeted Discovery:</strong> Reach users specifically searching for creators like you</li>
                <li><strong>SEO Benefits:</strong> Appear in relevant searches across the internet</li>
                <li><strong>Increased Revenue:</strong> More visibility leads to more subscribers</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Enhanced Discoverability</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Category Placement:</strong> Be found in all relevant category searches</li>
                <li><strong>Search Optimization:</strong> Appear in results for users' specific preferences</li>
                <li><strong>Profile Optimization:</strong> Showcase your best attributes and offerings</li>
                <li><strong>Regular Updates:</strong> Keep your profile current with the latest information</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Competitive Advantage</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Level Playing Field:</strong> New and established creators both benefit</li>
                <li><strong>Market Positioning:</strong> Stand out from competitors</li>
                <li><strong>Audience Insights:</strong> Understand what users are searching for</li>
                <li><strong>Growth Potential:</strong> Scale your subscriber base organically</li>
              </ul>
            </section>

            {/* Mission and Values */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission and Values</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Core Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 text-lg font-semibold">
                To connect users with creators they'll love while helping creators build sustainable, growing businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We believe that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Every creator deserves to be discovered</li>
                <li>Users should easily find content that resonates with them</li>
                <li>Discovery should be transparent, honest, and user-friendly</li>
                <li>Creators should have access to free promotional channels</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
              
              <h4 className="text-xl font-semibold text-foreground mb-2">Transparency</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We operate with complete honesty about:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>How our platform works</li>
                <li>What we do (and don't do) with content</li>
                <li>Our business model and practices</li>
                <li>Our relationship with creators and users</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Respect</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We respect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Creator intellectual property and copyright</li>
                <li>User privacy and data protection</li>
                <li>Platform terms of service</li>
                <li>Applicable laws and regulations</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Quality</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We're committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Accurate, up-to-date information</li>
                <li>Clean, functional design</li>
                <li>Reliable service delivery</li>
                <li>Continuous improvement</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Community</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We believe in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Supporting creator success</li>
                <li>Providing value to users</li>
                <li>Building mutually beneficial relationships</li>
                <li>Creating a positive ecosystem</li>
              </ul>
            </section>

            {/* How We're Different */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">How We're Different</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Not Just Another Directory</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What sets Fansclubonly apart from other platforms:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Comprehensive Coverage</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Extensive database of verified creators</li>
                <li>Regular updates and new additions</li>
                <li>Multiple data points for each profile</li>
                <li>Thorough categorization</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Superior Search Technology</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Advanced filtering capabilities</li>
                <li>Intelligent search algorithms</li>
                <li>Multi-criteria discovery</li>
                <li>Relevant, accurate results</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Commitment to Creators</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Free promotion (no hidden costs)</li>
                <li>Respect for intellectual property</li>
                <li>Easy opt-out process if desired</li>
                <li>Optional premium promotion available</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">User-Centric Design</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fast, responsive interface</li>
                <li>Intuitive navigation</li>
                <li>Clear information presentation</li>
                <li>Mobile optimization</li>
              </ul>
            </section>

            {/* Important Clarifications */}
            <section className="bg-secondary/20 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Important Clarifications</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Independent Operation</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
                Fansclubonly is completely independent. We want to be crystal clear:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mb-4">
                <li>❌ We are NOT affiliated with OnlyFans.com</li>
                <li>❌ We are NOT endorsed by FENIX INTERNATIONAL LIMITED</li>
                <li>❌ We are NOT connected to OnlyFans in any way</li>
                <li>✅ We operate as an independent directory service</li>
                <li>✅ OnlyFans is a registered trademark of FENIX INTERNATIONAL LIMITED</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Relationship with Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
                We do not own, host, or store creator content:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We link to publicly available profile images from external platforms</li>
                <li>We provide HTML references that direct browsers to source content</li>
                <li>All intellectual property remains with the creators</li>
                <li>We do not claim copyright over any creator materials</li>
                <li>We respect DMCA and international copyright laws</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Business Model</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">
                Transparency in how we operate:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Our primary service is completely free for both users and creators</li>
                <li>We generate revenue through advertising partnerships</li>
                <li>We offer optional premium promotion for creators who want extra visibility</li>
                <li>We do not charge users subscription fees</li>
                <li>We do not sell creator content or user data</li>
              </ul>
            </section>

            {/* Who We Are */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">A Passionate Team</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind Fansclubonly is a dedicated team of professionals who genuinely care about what we do:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Our Expertise</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Technology:</strong> Experienced developers building robust, scalable platforms</li>
                <li><strong>Marketing:</strong> Digital marketing specialists who understand creator promotion</li>
                <li><strong>Content:</strong> Professionals who appreciate quality and authenticity</li>
                <li><strong>User Experience:</strong> Designers focused on intuitive, enjoyable interfaces</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Our Passion</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're not just building a business—we're building a solution to a real problem we've experienced ourselves. As users who've struggled to find creators we love, and as advocates for creators trying to grow their audience, we understand both sides of the equation.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Excellence</h3>
              
              <h4 className="text-xl font-semibold text-foreground mb-2">Continuous Improvement</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Regular platform updates and enhancements</li>
                <li>Responsive to user and creator feedback</li>
                <li>Investment in better search technology</li>
                <li>Expansion of features and capabilities</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Reliability</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Consistent uptime and performance</li>
                <li>Regular database updates</li>
                <li>Prompt response to issues</li>
                <li>Transparent communication</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Support</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Responsive customer service</li>
                <li>Clear documentation and FAQs</li>
                <li>Easy contact for questions</li>
                <li>Respect for creator autonomy</li>
              </ul>
            </section>

            {/* Our Vision */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision for the Future</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Where We're Headed</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're constantly evolving and have exciting plans:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-2">Short-Term Goals</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Expand our creator database to provide even more options</li>
                <li>Enhance search and filtering capabilities</li>
                <li>Improve mobile experience</li>
                <li>Add new categories and classifications</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Long-Term Vision</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Become the premier creator discovery platform</li>
                <li>Implement AI-powered recommendation systems</li>
                <li>Develop creator analytics tools</li>
                <li>Build community features for users and creators</li>
              </ul>

              <h4 className="text-xl font-semibold text-foreground mb-2">Always Free Core Service</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                No matter how we grow, our commitment remains:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Free organic visibility for creators</li>
                <li>Free discovery for users</li>
                <li>Respect for intellectual property</li>
                <li>Transparent, honest operation</li>
              </ul>
            </section>

            {/* Why Trust Us */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why You Can Trust Us</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Legitimacy and Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Full compliance with DMCA and copyright laws</li>
                <li>Respect for platform terms of service</li>
                <li>Transparent business practices</li>
                <li>Clear privacy policies</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Thousands of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Users discovering creators they love</li>
                <li>Creators gaining new subscribers</li>
                <li>Successful connections made</li>
                <li>Hours saved in the discovery process</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">User Satisfaction</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our greatest achievement is:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Happy users finding exactly what they're looking for</li>
                <li>Creators reporting increased subscriber counts</li>
                <li>Positive feedback from both sides</li>
                <li>Growing community trust</li>
              </ul>
            </section>

            {/* Get Involved */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get Involved</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">For Users</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Start discovering amazing creators today:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Browse our categories</li>
                <li>Use our search features</li>
                <li>Explore trending creators</li>
                <li>Find your favorites</li>
                <li>Support the creators you love</li>
              </ol>

              <h3 className="text-2xl font-semibold text-foreground mb-3">For Creators</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Maximize your visibility:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Verify your profile information is accurate</li>
                <li>Keep your public profiles updated</li>
                <li>Engage with your growing audience</li>
                <li>Consider optional premium promotion</li>
                <li>Track your results</li>
              </ol>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Questions or Feedback?</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We'd love to hear from you:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>General inquiries: <a href="mailto:support@fansclubonly.com" className="text-primary hover:underline">support@fansclubonly.com</a></li>
                <li>Creator services: <a href="mailto:creators@fansclubonly.com" className="text-primary hover:underline">creators@fansclubonly.com</a></li>
                <li>Technical issues: <a href="mailto:tech@fansclubonly.com" className="text-primary hover:underline">tech@fansclubonly.com</a></li>
                <li>Partnership opportunities: <a href="mailto:partnerships@fansclubonly.com" className="text-primary hover:underline">partnerships@fansclubonly.com</a></li>
              </ul>
            </section>

            {/* Join Community */}
            <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join the Fansclubonly Community</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Whether you're searching for inspiration, entertainment, or connection, or you're a creator building your dream business, Fansclubonly is here to help you succeed.
              </p>
              <p className="text-foreground text-xl font-semibold">
                Together, we're building a better way to discover and be discovered.
              </p>
            </section>

            {/* Thank You */}
            <section className="text-center border-t pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Thank You</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thank you for choosing Fansclubonly. We're honored to be part of your discovery journey and committed to making your experience exceptional.
              </p>
              <p className="text-xl font-semibold text-foreground mb-6">
                Let's discover something amazing together.
              </p>
              <p className="text-muted-foreground italic">
                Fansclubonly - Connecting Creators with Their Perfect Audience
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
