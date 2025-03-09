"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeSection = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log("Fetching videos from backend...");
        const response = await axios.get("/api/youtube");
        console.log("Backend Response:", response.data);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="md:text-4xl  mb-6 text-center text-gray-800 dark:text-white font-sriracha leading-tight">
        Latest YouTube Videos
      </h2>
      {videos.length === 0 ? <p className="text-center text-gray-500 font-sriracha leading-tight">No videos found.</p> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map(
          (video) =>
            video.id.videoId && (
              <div key={video.id.videoId} className="shadow-xl p-4 rounded-lg transition transform hover:scale-105">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
                <h3 className="mt-3 text-lg font-semibold text-center text-gray-900 dark:text-white">
                  {video.snippet.title}
                </h3>
              </div>
            )
        )}
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-black bg-green-200 rounded-3xl shadow-md hover:bg-red-700 transition"
        >
          Visit YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default YouTubeSection;
