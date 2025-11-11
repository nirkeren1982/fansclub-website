const FeaturedIn = () => {
  const publications = [
    "New York Post",
    "Vice",
    "Yahoo News",
    "Forbes",
    "New York Times"
  ];

  return (
    <section className="w-full py-12 bg-card border-y">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            As Featured In
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((pub) => (
              <div
                key={pub}
                className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
