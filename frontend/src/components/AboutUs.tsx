import React from 'react'

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg leading-relaxed text-muted-foreground">
        We are the community edition of{" "}
        <span className="font-semibold text-primary">
          Proxmox VE Helper Scripts
        </span>
        , carrying forward the vision of{" "}
        <span className="font-semibold text-primary">'tteck,'</span> our
        project's brilliant creator.
      </p>

      <p className="text-lg leading-relaxed text-muted-foreground">
        Though tteck is no longer with us, their legacy lives on through our
        vibrant community. Together, we're simplifying hosting and empowering
        users worldwide.
      </p>

      <p className="text-lg leading-relaxed text-muted-foreground">
        Our collection of 200+ scripts helps automate common Proxmox VE tasks,
        from container creation to system maintenance. We believe in making
        server management accessible to everyone, whether you're running a home
        lab or enterprise environment.
      </p>

      <p className="text-lg leading-relaxed text-muted-foreground">
        Join our growing community of developers, system administrators, and
        homelab enthusiasts. Together, we're building tools that make Proxmox VE
        management simpler and more efficient for everyone.
      </p>
    </div>
  );
}
