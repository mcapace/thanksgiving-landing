"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function EmailCollectionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("submitting");

    // Simulate API call - replace with your actual email service integration
    // Options: Mailchimp, ConvertKit, SendGrid, your own API endpoint
    try {
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      // For now, we'll simulate success
      setTimeout(() => {
        setStatus("success");
        setMessage("Success! Check your email for the complete recipe book.");
        setEmail("");
        
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      }, 1000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-xl p-8 shadow-2xl">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-amber-50 mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
            Get the Complete Recipe Book
          </h3>
          <p className="text-amber-50/90">
            Receive all 9 recipes + automatic entry to win the Hestan prize package
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              disabled={status === "submitting" || status === "success"}
              className="w-full px-4 py-3 rounded-md border-2 border-amber-50/20 bg-white/95 text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all disabled:opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "submitting" && "Sending..."}
            {status === "success" && (
              <>
                <CheckCircle className="w-5 h-5" />
                Sent!
              </>
            )}
            {status === "idle" && "Send Me the Recipe Book"}
            {status === "error" && "Try Again"}
          </button>

          {message && (
            <p
              className={`text-sm text-center ${
                status === "success" ? "text-amber-50" : "text-red-200"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-xs text-amber-50/70 text-center">
            By submitting, you agree to receive emails from Wine Spectator and will be automatically entered into the sweepstakes. No purchase necessary.
          </p>
        </form>
      </div>
    </div>
  );
}

