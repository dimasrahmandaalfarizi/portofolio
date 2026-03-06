"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./social-icons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    // Use a clean array of standard cleanups
    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animationFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section" style={{ pointerEvents: 'none' }}>
      <div className="social-icons" data-cursor="icons" id="social" style={{ pointerEvents: 'auto' }}>
        <span>
          <a href="https://github.com/dimasrahmandaalfarizi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://dimasrahmandaalfarizi.com/resume.pdf" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
