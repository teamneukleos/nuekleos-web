"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const YOUTUBE_VIDEO_ID = "bi44GBpZ73M";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full h-screen">
      {/* YouTube Embed */}
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/bi44GBpZ73M?autoplay=1&rel=0"
          title="Showcase Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* Thumbnail */}
          <img
            src="/video-thumbnail.jpg"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <button
              onClick={handlePlay}
              className="hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play size={80} className="text-white ml-2" fill="white" />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default VideoSection;