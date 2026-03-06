"use client";
import React, { useEffect } from "react";
import { MdCopyright } from "react-icons/md";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./contact-section.css";

const ContactSection = () => {
  useEffect(() => {
    const social = document.getElementById("contact-social-icons");
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll(".contact-social-span").forEach((item) => {
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

        if (x < 50 && x > 0 && y < 50 && y > 0) {
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
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:dimassrahmanda@gmail.com" data-cursor="disable">
                dimassrahmanda@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+62895398794700" data-cursor="disable">
                +62 895 3987 94700
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <div className="contact-social-icons" id="contact-social-icons">
              <span className="contact-social-span">
                <a
                  href="https://github.com/dimasrahmandaalfarizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="contact-social-span">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="contact-social-span">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <FaXTwitter />
                </a>
              </span>
              <span className="contact-social-span">
                <a
                  href="https://instagram.com/dmsrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>RAHMANDA</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
