import { Component as KineticNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { ProfileCard } from "@/components/ui/profile-card";

export default function Home() {
  return (
    <>
      <KineticNav />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <ProfileCard
          name="Dimas Rahmanda Alfarizi"
          title="Front-End Developer & UI Enthusiast"
          description="Dimas is a passionate front-end developer with a keen eye for design and user experience. He builds modern, responsive web applications using React, Next.js, and TypeScript, creating seamless digital experiences that leave a lasting impression."
          imageUrl="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          githubUrl="https://github.com/dimasrahmandaalfarizi"
          twitterUrl="#"
          youtubeUrl="#"
          linkedinUrl="#"
        />
      </main>
    </>
  );
}

