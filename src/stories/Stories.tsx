const Stories = () => {
  const featuredStory = {
    title: "Runway Showcase",
    description:
      "One of the standout moments from the Fashion Games was the Runway Showcase, a vibrant celebration of creativity, craftsmanship, and confidence. Participants and MSMEs from the Fashion Future Program brought the stage to life with stunning, handmade designs, beautifully modelled and full of personality.",
    image: "/stories/runway-showcase.png",
    link: "/stories/runway-showcase",
  };

  const otherStories = [
    {
      title:
        "Reflect. Realign. Reimagine: Co-Creating the Future of Work and Enterprise in Africa",
      image: "/stories/reflect-realign.png",
      link: "/stories/reflect-realign",
    },
    {
      title:
        "Reflect. Realign. Reimagine: Co-Creating the Future of Work and Enterprise in Africa",
      image: "/stories/artisan-skills.png",
      link: "/stories/artisan-skills",
    },
    {
      title:
        "Reflect. Realign. Reimagine: Co-Creating the Future of Work and Enterprise in Africa",
      image: "/stories/united-action.png",
      link: "/stories/united-action",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Featured Story */}
        <div className="flex flex-col md:flex-row mb-8 rounded-xl overflow-hidden shadow-lg bg-orange-600 md:max-h-[350px]">
          {/* Left: Image */}
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              {featuredStory.title}
            </h2>
            <p className="text-sm md:text-sm leading-relaxed mb-4">
              {featuredStory.description}
            </p>
            <a
              href={featuredStory.link}
              className="inline-block bg-white text-orange-600 px-5 py-2.5 text-sm rounded-lg hover:bg-gray-100 transition w-fit"
            >
              Read Full Story
            </a>
          </div>
        </div>

        {/* Other Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherStories.map((story, index) => (
            <a
              key={index}
              href={story.link}
              className={`group relative h-80 overflow-hidden shadow-lg block
                rounded-lg md:rounded-none
                ${
                  index === 0
                    ? "md:rounded-l-xl"
                    : index === otherStories.length - 1
                    ? "md:rounded-r-xl"
                    : ""
                }`}
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Hover Overlay with Title */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-sm md:text-sm leading-tight">
                  {story.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
