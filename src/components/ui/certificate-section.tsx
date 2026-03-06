"use client";
import React from "react";
import { HeroParallax } from "@/components/blocks/hero-parallax";

/* ─── Certificate data ───────────────────────────────────────── */
/* Using user's 9 images and duplicating some to fill the 15 parallax slots */
const certificates = [
  {
    title: "Certificate 1",
    link: "#",
    thumbnail: "/certificates/C1.png",
  },
  {
    title: "Certificate 2",
    link: "#",
    thumbnail: "/certificates/C2.png",
  },
  {
    title: "Certificate 3",
    link: "#",
    thumbnail: "/certificates/C3.png",
  },
  {
    title: "Certificate 4",
    link: "#",
    thumbnail: "/certificates/C4.png",
  },
  {
    title: "Certificate 5",
    link: "#",
    thumbnail: "/certificates/C5.png",
  },
  // Row 2
  {
    title: "Certificate 6",
    link: "#",
    thumbnail: "/certificates/C6.png",
  },
  {
    title: "Certificate 7",
    link: "#",
    thumbnail: "/certificates/C7.png",
  },
  {
    title: "Certificate 8",
    link: "#",
    thumbnail: "/certificates/C8.png",
  },
  {
    title: "Certificate 9",
    link: "#",
    thumbnail: "/certificates/C9.png",
  },
  // Duplicating the most visually heavy ones to fill remaining 6 slots
  {
    title: "Certificate 1",
    link: "#",
    thumbnail: "/certificates/C1.png",
  },
  // Row 3
  {
    title: "Certificate 2",
    link: "#",
    thumbnail: "/certificates/C2.png",
  },
  {
    title: "Certificate 4",
    link: "#",
    thumbnail: "/certificates/C4.png",
  },
  {
    title: "Certificate 5",
    link: "#",
    thumbnail: "/certificates/C5.png",
  },
  {
    title: "Certificate 7",
    link: "#",
    thumbnail: "/certificates/C7.png",
  },
  {
    title: "Certificate 8",
    link: "#",
    thumbnail: "/certificates/C8.png",
  },
];

/* ─── Component ──────────────────────────────────────────────── */
export default function CertificateSection() {
  return (
    <section className="bg-black relative pt-16 sm:pt-24 mt-[100px] sm:mt-[250px]" id="certificate">
      <HeroParallax products={certificates} />
    </section>
  );
}
