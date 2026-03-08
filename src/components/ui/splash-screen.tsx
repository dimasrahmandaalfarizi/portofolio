"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoading, useProgress } from "@/context/loading-provider";

const SplashScreen = ({ percent }: { percent: number }) => {
  const { setIsLoading, setLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Start the progress simulation
  useProgress(setLoading);

  if (percent >= 100 && !loaded) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  // Handle auto-completion without initialFX requirement from reference
  useEffect(() => {
    if (isLoaded) {
      setClicked(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1900); // Wait for the expanding black circle (800ms) and fade out (1000ms)
    }
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className={`loading-header ${clicked ? "opacity-0 transition-opacity duration-1000" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          RAHMANDA
        </a>
      </div>
      
      <div className={`loading-screen transition-opacity duration-1000 ${clicked ? "pointer-events-none delay-[800ms] opacity-0" : ""}`}>
        <div className="loading-marquee selection:bg-transparent flex flex-col gap-2 md:gap-4">
          <Marquee speed={40} gradient={false} direction="left">
            <span>A FRONTEND DEVELOPER</span> <span>A BACKEND DEVELOPER</span>
            <span>A UI / UX DESIGNER</span> <span>A CREATIVE DEVELOPER</span>
          </Marquee>
          <Marquee speed={50} gradient={false} direction="right">
            <span>MODERN WEB DESIGN</span> <span>SMOOTH ANIMATIONS</span>
            <span>RESPONSIVE INTERFACES</span> <span>INTERACTIVE EXPERIENCES</span>
          </Marquee>
          <Marquee speed={60} gradient={false} direction="left">
            <span>REACT & NEXT.JS</span> <span>TAILWIND CSS</span>
            <span>TYPESCRIPT</span> <span>GSAP ANIMATIONS</span>
          </Marquee>
          <Marquee speed={45} gradient={false} direction="right">
            <span>CLEAN CODE</span> <span>PERFORMANCE FOCUSED</span>
            <span>ACCESSIBLE DESIGN</span> <span>BEST PRACTICES</span>
          </Marquee>
          <Marquee speed={55} gradient={false} direction="left">
            <span>PIXEL PERFECT</span> <span>USER CENTRIC</span>
            <span>ATTENTION TO DETAIL</span> <span>INNOVATIVE SOLUTIONS</span>
          </Marquee>
        </div>
        
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>
          
          {/* Main button that shows Loading % and then Welcome */}
          <div 
            className={`loading-button ${loaded && "loading-complete"}`}
            onClick={() => {
              if (loaded) setIsLoaded(true); 
            }}
          >
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2 cursor-pointer">
              <span>Welcome</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
