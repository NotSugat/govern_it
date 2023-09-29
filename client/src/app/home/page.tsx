"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const HomePage = () => {
  const videoRef = useRef(null);
  const videoSrc = "http://localhost:8080/hls/test.m3u8";

  useEffect(() => {
    const video: any = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <div>
      <h2>Live Stream</h2>
      <video ref={videoRef} width="800" controls></video>
    </div>
  );
};

export default HomePage;
