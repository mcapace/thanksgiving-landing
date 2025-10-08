import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Rules | Wine Spectator x Hestan Thanksgiving Sweepstakes",
  description: "Official rules and terms for the Wine Spectator x Hestan Culinary Holiday Prize Package sweepstakes.",
};

export default function OfficialRulesPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-block text-wine-red hover:text-red-900 transition-colors mb-6 font-medium"
          >
            ← Back to Sweepstakes
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 mb-4">
            Official Rules & Terms
          </h1>
          <p className="text-stone-600 text-lg">
            Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 space-y-8">
          
          {/* NO PURCHASE NECESSARY */}
          <div className="border-l-4 border-wine-red pl-6">
            <p className="font-bold text-lg text-stone-900 uppercase tracking-wide">
              NO PURCHASE NECESSARY TO ENTER OR WIN
            </p>
            <p className="text-stone-600 mt-2">
              A purchase will not increase your chances of winning.
            </p>
          </div>

          {/* Section 1: Eligibility */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              1. Eligibility
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                The Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes (the &ldquo;Sweepstakes&rdquo;) 
                is open to legal residents of the fifty (50) United States and the District of Columbia who are 21 
                years of age or older at the time of entry.
              </p>
              <p>
                Employees, officers, and directors of M. Shanken Communications, Inc. (&ldquo;Sponsor&rdquo;), Hestan Culinary, 
                Viral Sweeps, and their respective parent companies, subsidiaries, affiliates, advertising and 
                promotion agencies, and the immediate family members (spouse, parents, children, and siblings 
                and their spouses) and household members of each are not eligible to enter or win.
              </p>
              <p>
                Void where prohibited by law. All federal, state, and local laws and regulations apply.
              </p>
            </div>
          </section>

          {/* Section 2: Sweepstakes Period */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              2. Sweepstakes Period
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                The Sweepstakes begins at 12:00:00 AM Eastern Time (&ldquo;ET&rdquo;) on October 14, 2025, 
                and ends at 11:59:59 PM ET on December 14, 2025 (the &ldquo;Sweepstakes Period&rdquo;).
              </p>
              <p>
                Sponsor&apos;s computer is the official time-keeping device for this Sweepstakes.
              </p>
            </div>
          </section>

          {/* Section 3: How to Enter */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              3. How to Enter
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                During the Sweepstakes Period, visit <strong>thanksgiving.winespectator.com</strong> and complete 
                the online entry form with your name, email address, and other required information. Click 
                &ldquo;Submit&rdquo; to receive one (1) entry into the Sweepstakes.
              </p>
              <p>
                <strong>Entry Limit:</strong> One (1) entry per person/email address for the entire Sweepstakes Period. 
                Additional entries may be earned through bonus actions as specified on the entry form (e.g., 
                social media shares, referrals).
              </p>
              <p>
                Entries received outside the Sweepstakes Period are void. All entries become the property of 
                Sponsor and will not be acknowledged or returned.
              </p>
            </div>
          </section>

          {/* Section 4: Prize Details */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              4. Prize Details
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                <strong>Grand Prize (1):</strong> Hestan Culinary Holiday Prize Package consisting of:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>One (1) Hestan Culinary Small Polished Roaster</li>
                <li>One (1) Hedley & Bennett Chef Apron</li>
                <li>One (1) Hestan Culinary 3-Piece Mixing Bowl Set</li>
              </ul>
              <p>
                <strong>Approximate Retail Value (&ldquo;ARV&rdquo;):</strong> $464.90 USD
              </p>
              <p>
                Prize will be awarded &ldquo;as is&rdquo; with no warranty or guarantee, either express or implied. 
                Winner is responsible for all applicable federal, state, and local taxes and any other costs 
                not specified herein. No substitution, transfer, or cash equivalent of prize is permitted, 
                except at Sponsor&apos;s sole discretion. Sponsor reserves the right to substitute a prize of 
                equal or greater value.
              </p>
            </div>
          </section>

          {/* Section 5: Winner Selection & Notification */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              5. Winner Selection & Notification
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                One (1) Grand Prize winner will be selected in a random drawing from all eligible entries 
                received during the Sweepstakes Period. The drawing will be conducted on or about December 19, 2025, 
                by Sponsor or its designated representative, whose decisions are final and binding.
              </p>
              <p>
                The potential winner will be notified by email within five (5) business days of the drawing. 
                The potential winner must respond within seventy-two (72) hours of notification and complete 
                all required affidavit and release forms within seven (7) days of notification. Failure to 
                respond or return required documents within the specified time period, or if prize notification 
                is returned as undeliverable, may result in disqualification and selection of an alternate winner.
              </p>
              <p>
                Winner may be required to sign and return an Affidavit of Eligibility, Liability Release, 
                and (where legal) Publicity Release within seven (7) days of notification attempt or prize 
                may be forfeited.
              </p>
            </div>
          </section>

          {/* Section 6: General Conditions */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              6. General Conditions
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                By entering, participants agree to be bound by these Official Rules and the decisions of 
                Sponsor, which are final and binding in all respects. Winner agrees to allow Sponsor to use 
                their name, likeness, and entry for promotional purposes without additional compensation, 
                except where prohibited by law.
              </p>
              <p>
                Sponsor is not responsible for lost, late, incomplete, invalid, unintelligible, illegible, 
                misdirected, or postage-due entries; lost, interrupted, or unavailable network connections; 
                or failed electronic communications. Proof of sending is not proof of receipt.
              </p>
              <p>
                Sponsor reserves the right to cancel, suspend, or modify the Sweepstakes if fraud, technical 
                failures, or any other factor impairs the integrity of the Sweepstakes, as determined by 
                Sponsor in its sole discretion.
              </p>
            </div>
          </section>

          {/* Section 7: Privacy */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              7. Privacy
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                Information collected from entrants is subject to Sponsor&apos;s Privacy Policy, available at{" "}
                <a href="https://www.winespectator.com/privacy" className="text-wine-red hover:underline">
                  winespectator.com/privacy
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              8. Limitation of Liability
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                By participating, entrants agree to release and hold harmless Sponsor, Hestan Culinary, 
                Viral Sweeps, and their respective parent companies, subsidiaries, affiliates, directors, 
                officers, employees, and agents from any and all liability for any injuries, losses, or 
                damages of any kind arising from or in connection with the Sweepstakes or acceptance, 
                possession, or use/misuse of any prize.
              </p>
            </div>
          </section>

          {/* Section 9: Disputes & Governing Law */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              9. Disputes & Governing Law
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                Except where prohibited, by entering, entrants agree that all issues and questions concerning 
                the construction, validity, interpretation, and enforceability of these Official Rules shall 
                be governed by the laws of the State of New York without giving effect to any choice of law 
                or conflict of law rules.
              </p>
              <p>
                Any dispute arising from or relating to the Sweepstakes shall be submitted to final and 
                binding arbitration in New York, New York.
              </p>
            </div>
          </section>

          {/* Section 10: Winner's List */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              10. Winner&apos;s List
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                For the name of the winner, available after January 15, 2026, send a self-addressed stamped 
                envelope to:
              </p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 mt-3">
                <p className="font-mono text-sm">
                  Wine Spectator Thanksgiving Sweepstakes Winner<br />
                  M. Shanken Communications, Inc.<br />
                  387 Park Avenue South, 8th Floor<br />
                  New York, NY 10016
                </p>
              </div>
            </div>
          </section>

          {/* Sponsor Information */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
              Sponsor
            </h2>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                <strong>M. Shanken Communications, Inc.</strong><br />
                387 Park Avenue South, 8th Floor<br />
                New York, NY 10016
              </p>
              <p className="text-sm text-stone-500 mt-6">
                © 2025 M. Shanken Communications, Inc. All rights reserved.
              </p>
            </div>
          </section>

        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <Link 
            href="/#sweepstakes" 
            className="inline-flex items-center gap-2 text-wine-red hover:text-red-900 transition-colors font-medium"
          >
            ← Return to Entry Form
          </Link>
        </div>
      </div>
    </main>
  );
}
