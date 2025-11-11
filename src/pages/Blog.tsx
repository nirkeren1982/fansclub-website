import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "top-fitness-creators-2025",
    title: "Top 10 Fitness Creators to Follow in 2025",
    excerpt: "Discover the most inspiring fitness content creators who are transforming lives through their workout routines, nutrition tips, and motivational content.",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    category: "Fitness",
    date: "January 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "gaming-content-trends",
    title: "Gaming Content Trends You Can't Miss",
    excerpt: "From live streaming to short-form content, explore the latest trends shaping the gaming creator economy and what it means for viewers.",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    category: "Gaming",
    date: "January 12, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "lifestyle-creators-guide",
    title: "The Ultimate Guide to Lifestyle Creators",
    excerpt: "Learn how lifestyle creators are building authentic connections with their audience through daily vlogs, fashion tips, and life advice.",
    coverImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    category: "Lifestyle",
    date: "January 10, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "creator-economy-future",
    title: "The Future of the Creator Economy",
    excerpt: "Explore how the creator economy is evolving and what opportunities await content creators in the coming years.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    category: "Business",
    date: "January 8, 2025",
    readTime: "8 min read",
  },
  {
    id: 5,
    slug: "beauty-influencer-secrets",
    title: "Beauty Influencer Secrets Revealed",
    excerpt: "Behind the scenes with top beauty creators sharing their content creation process, favorite products, and industry insights.",
    coverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    author: {
      name: "Jessica Lee",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    },
    category: "Beauty",
    date: "January 5, 2025",
    readTime: "5 min read",
  },
  {
    id: 6,
    slug: "food-content-mastery",
    title: "Mastering Food Content Creation",
    excerpt: "Tips and tricks from successful food creators on photography, recipe development, and building a loyal following.",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    author: {
      name: "David Martinez",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556",
    },
    category: "Food",
    date: "January 3, 2025",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Creator Insights & News
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Stay updated with the latest trends, tips, and stories from the creator economy.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="w-full mt-4">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
