"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function SocialShare() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/explore/locations/239570573/wine-spectator/?hl=en",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-yellow-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/WineSpectator",
      color: "hover:bg-blue-600",
    },
    {
      name: "X",
      icon: XIcon,
      url: "https://x.com/winespectator?lang=en",
      color: "hover:bg-black",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/wine-spectator/",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-stone-400 font-medium">Follow Wine Spectator:</p>
      <div className="flex gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-stone-800 text-stone-300 transition-all duration-300 ${link.color} hover:text-white shadow-md hover:shadow-lg hover:scale-110`}
              aria-label={`Follow us on ${link.name}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Custom X (Twitter) Icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
