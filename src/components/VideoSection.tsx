"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("showcase-video") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full h-screen">
      {/* Video Element */}
      <video
        id="showcase-video"
        className="w-full h-full object-cover"
        controls={isPlaying}
        poster="/video-thumbnail.jpg"
      >
        <source src="/showcase-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <button
            onClick={handlePlay}
            className="hover:scale-110 transition-transform"
            aria-label="Play video"
          >
            <Play size={80} className="text-white ml-2" fill="white" />
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoSection;