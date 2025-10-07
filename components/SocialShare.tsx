"use client";

import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function SocialShare({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Wine Spectator x Hestan Thanksgiving Recipes",
  description = "Discover 9 curated wine and recipe pairings for your Thanksgiving table",
}: SocialShareProps) {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      color: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: "hover:bg-blue-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${shareTitle}&body=${shareDescription}%0A%0A${shareUrl}`,
      color: "hover:bg-stone-600",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-stone-600 font-medium">Share these recipes:</p>
      <div className="flex gap-3">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-stone-100 text-stone-700 transition-all duration-300 ${link.color} hover:text-white shadow-md hover:shadow-lg hover:scale-110`}
              aria-label={`Share on ${link.name}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
        <button
          onClick={handleCopyLink}
          className="p-3 rounded-full bg-stone-100 text-stone-700 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
          aria-label="Copy link"
        >
          <Link2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

