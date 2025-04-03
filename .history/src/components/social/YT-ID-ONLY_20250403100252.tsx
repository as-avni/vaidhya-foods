"use client";

import React, { useState, useEffect } from "react";

const YouTubeSection1 = () => {
  const CHANNEL_ID = "UC0uCiPuoXRBCFxo6Ljfh6oQ";
  const RSS_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_FEED_URL)}`);
        const data = await response.json();

        // Parse RSS feed manually (since we can't use XML parsers in React)
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "application/xml");
        const entries = xml.querySelectorAll("entry");

        // Extract video IDs (latest first)
        const videoIds = Array.from(entries)
          .slice(0, 3) // Limit to 3 videos
          .map((entry) => entry.querySelector("yt\\:videoId, videoId")?.textContent || "");

        setVideos(videoIds);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  },);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="md:text-4xl mb-6 text-center text-black font-sriracha leading-tight">
        Latest YouTube Videos
      </h2>

      {videos.length === 0 ? (
        <p className="text-center text-gray-500 font-sriracha leading-tight">No videos found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((videoId, index) => (
            <iframe
              key={index}
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Latest Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
      className="px-6 py-2 text-black bg-[#98be52] rounded-3xl shadow-md hover:bg-[#c4d89d] transition"
        >
          Visit YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default YouTubeSection1;
