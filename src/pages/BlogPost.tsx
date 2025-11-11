import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    title: "My Journey to Content Creation Success",
    author: {
      name: "Sarah Creates",
      username: "sarahcreates",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    publishDate: "March 15, 2024",
    readTime: "5 min read",
    category: "Lifestyle",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
    content: `
      <p>Starting my journey as a content creator was one of the most challenging yet rewarding decisions I've ever made. In this post, I want to share some insights and tips that helped me along the way.</p>

      <h2>Finding Your Niche</h2>
      <p>The first step was discovering what made my content unique. I spent weeks researching, experimenting, and listening to feedback from my early supporters. It's crucial to find that sweet spot between what you're passionate about and what resonates with your audience.</p>

      <h2>Building Authentic Connections</h2>
      <p>Success in content creation isn't just about numbers—it's about building genuine relationships with your audience. I make it a priority to engage with comments, host live sessions, and create content that adds real value to people's lives.</p>

      <h2>Consistency is Key</h2>
      <p>One of the biggest lessons I learned was the importance of consistency. Whether it's posting schedules, content quality, or engagement with followers, maintaining consistency builds trust and keeps your audience coming back.</p>

      <h2>Investing in Yourself</h2>
      <p>Don't be afraid to invest in better equipment, education, and tools that enhance your content. Every improvement you make in your craft shows in the final product and helps you stand out in a crowded space.</p>

      <p>Remember, everyone's journey is different. What works for me might not work for you, and that's perfectly fine. The key is to stay authentic, keep learning, and never stop improving.</p>
    `,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to={`/creator/${post.author.username}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Button>
          </Link>
        </div>

        {/* Cover Image */}
        <div className="w-full h-[400px] bg-muted overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Category Badge */}
          <Badge className="mb-4">{post.category}</Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b">
            <Link to={`/creator/${post.author.username}`}>
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex-1">
              <Link to={`/creator/${post.author.username}`}>
                <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                  {post.author.name}
                </h3>
              </Link>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Want More Content?</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get exclusive content and behind-the-scenes access
            </p>
            <Link to={`/creator/${post.author.username}`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Visit Profile
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
