import Link from "next/link";
import { ChevronLeft, Gift, Calendar, Users, Award, FileText, Scale } from "lucide-react";

export const metadata = {
  title: 'Official Rules - Wine Spectator x Hestan Sweepstakes',
  description: 'Official rules and regulations for the Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes',
};

export default function OfficialRulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-wine-red hover:text-red-900 transition-colors font-medium mb-4 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Sweepstakes
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-stone-900">
            Official Rules & Regulations
          </h1>
          <p className="text-stone-600 mt-2">
            Wine Spectator x Hestan Culinary Holiday Prize Package Sweepstakes
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* NO PURCHASE NECESSARY Banner */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8 shadow-md">
          <p className="text-center text-lg font-bold text-amber-900 mb-2">
            NO PURCHASE NECESSARY TO ENTER OR WIN
          </p>
          <p className="text-center text-sm text-amber-800">
            A purchase will not improve your chances of winning. Void where prohibited by law.
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg shadow-md p-5 border border-stone-200">
            <Calendar className="w-8 h-8 text-wine-red mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">Entry Period</h3>
            <p className="text-sm text-stone-600">October 14 - December 14, 2025</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 border border-stone-200">
            <Gift className="w-8 h-8 text-wine-red mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">Prize Value</h3>
            <p className="text-sm text-stone-600">$464.90 (ARV)</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 border border-stone-200">
            <Users className="w-8 h-8 text-wine-red mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">Eligibility</h3>
            <p className="text-sm text-stone-600">US residents, 21+ years</p>
          </div>
        </div>

        {/* Detailed Rules */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">1</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Sponsor & Administrator</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                This sweepstakes is sponsored by M. Shanken Communications, Inc. ("Sponsor"), 825 Eighth Avenue, 30th Floor, New York, NY 10019.
              </p>
              <p>
                <strong>Promotional Partner:</strong> Hestan Culinary, 3600 Hestan Drive, Napa, CA 94558.
              </p>
              <p>
                The sweepstakes is administered by Wine Spectator, a publication of M. Shanken Communications, Inc.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">2</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Eligibility</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                Open to legal residents of the 50 United States and District of Columbia who are <strong>21 years of age or older</strong> at the time of entry.
              </p>
              <p className="font-semibold">NOT ELIGIBLE:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employees of Sponsor, Hestan Culinary, their respective parent companies, subsidiaries, affiliates, advertising and promotion agencies, and their immediate family members (spouse, parents, children, siblings) and household members</li>
                <li>Residents of states or territories where prohibited by law</li>
                <li>Individuals under 21 years of age</li>
              </ul>
              <p>
                Void where prohibited or restricted by law. All federal, state, and local laws and regulations apply.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">3</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Entry Period</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                The sweepstakes begins at <strong>12:00:01 AM Eastern Time (ET) on October 14, 2025</strong> and ends at <strong>11:59:59 PM ET on December 14, 2025</strong> (the "Entry Period").
              </p>
              <p>
                All entries must be received during the Entry Period. Sponsor's computer is the official timekeeping device for this sweepstakes.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">4</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">How to Enter</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p className="font-semibold">Online Entry:</p>
              <p>
                Visit <strong>thanksgiving.winespectator.com</strong> and complete the online entry form, providing all required information including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name (first and last)</li>
                <li>Valid email address</li>
                <li>Phone number</li>
                <li>Date of birth (to verify 21+ age requirement)</li>
                <li>Complete mailing address (street, city, state, zip code)</li>
              </ul>
              <p>
                You must agree to the Official Rules and confirm you are 21 years of age or older to submit an entry.
              </p>
              <p className="font-semibold text-wine-red">
                LIMIT: One (1) entry per person for the entire Entry Period.
              </p>
              <p>
                Multiple entries from the same person will be disqualified. Use of automated entry devices, scripts, or other mechanical means is prohibited and will result in disqualification.
              </p>
              <p className="font-semibold mt-6">Mail-In Entry (Alternative Method):</p>
              <p>
                To enter without internet access, hand-print your complete name, address, city, state, zip code, email address, phone number, and date of birth on a 3"x5" card and mail it in an envelope with proper postage to:
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 my-3">
                <p className="font-mono text-sm">
                  Wine Spectator Thanksgiving Sweepstakes<br />
                  M. Shanken Communications, Inc.<br />
                  825 Eighth Avenue, 30th Floor<br />
                  New York, NY 10019
                </p>
              </div>
              <p>
                Mail-in entries must be <strong>postmarked by December 14, 2025</strong> and <strong>received by December 21, 2025</strong>. Limit one mail-in entry per outer envelope. Entries submitted in any other manner will not be accepted.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">5</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Prize Details</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p className="font-semibold text-lg text-wine-red">
                One (1) Grand Prize
              </p>
              <p>
                The Grand Prize consists of a <strong>Hestan Culinary Holiday Prize Package</strong> including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hestan Culinary Small Polished Roaster</strong> – Professional-grade roasting pan ideal for holiday cooking (Approximate Retail Value: $229.95)</li>
                <li><strong>Hedley & Bennett Chef Apron</strong> – Premium chef's apron with adjustable straps (Approximate Retail Value: $84.95)</li>
                <li><strong>3-Piece Mixing Bowl Set</strong> – Stainless steel mixing bowls in multiple sizes (Approximate Retail Value: $150.00)</li>
              </ul>
              <p className="font-bold mt-4">
                Total Approximate Retail Value (ARV): $464.90
              </p>
              <p className="text-sm italic">
                Actual value may vary. Prize will be awarded "as is" with no warranty or guarantee, express or implied.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4">
                <p className="text-sm">
                  <strong>Prize Restrictions:</strong> No cash alternative or substitution of prize permitted, except by Sponsor in the event of prize unavailability, in which case a prize of equal or greater value will be awarded. Prize is not transferable or assignable. Winner is responsible for all applicable federal, state, and local taxes (if any). Winner may be issued an IRS Form 1099 for the value of the prize.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">6</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Winner Selection</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                One (1) Grand Prize winner will be selected in a <strong>random drawing</strong> conducted on or about <strong>December 17, 2025</strong> from among all eligible entries received during the Entry Period.
              </p>
              <p>
                The drawing will be conducted by Sponsor or its designated representative, whose decisions are final and binding in all matters relating to this sweepstakes.
              </p>
              <p>
                <strong>Odds of Winning:</strong> Odds of winning depend on the total number of eligible entries received during the Entry Period.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">7</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Winner Notification</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                The potential Grand Prize winner will be notified by <strong>email</strong> and/or <strong>phone</strong> on or about <strong>December 19, 2025</strong>, using the contact information provided at the time of entry.
              </p>
              <p>
                The potential winner must respond to the notification within <strong>five (5) business days</strong> to claim the prize. Failure to respond within this time period may result in disqualification and selection of an alternate winner.
              </p>
              <p>
                Before being declared the official winner, the potential winner may be required to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sign and return an Affidavit of Eligibility and Liability/Publicity Release</li>
                <li>Provide proof of age and residency</li>
                <li>Comply with all Official Rules</li>
              </ul>
              <p>
                If the potential winner is found to be ineligible, cannot be contacted, fails to respond in a timely manner, fails to return required documents, or if prize notification is returned as undeliverable, the potential winner will be disqualified and an alternate winner may be selected.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">8</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">General Conditions</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                By entering, participants agree to be bound by these Official Rules and the decisions of Sponsor, which are final and binding in all respects.
              </p>
              <p>
                By entering, participants agree that Sponsor, Hestan Culinary, and their respective parent companies, subsidiaries, affiliates, directors, officers, employees, and agents (collectively, "Released Parties") are not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lost, late, misdirected, damaged, incomplete, or illegible entries</li>
                <li>Errors in entry information</li>
                <li>Technical, hardware, software, or telephone malfunctions</li>
                <li>Failed, incomplete, or garbled computer or network transmissions</li>
                <li>Damage to participant's or any other person's computer</li>
                <li>Printing, typographical, human, or other errors in these Official Rules or in sweepstakes materials</li>
              </ul>
              <p>
                Sponsor reserves the right, in its sole discretion, to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Disqualify any individual found to be tampering with the entry process or the operation of the sweepstakes</li>
                <li>Cancel, terminate, modify, or suspend the sweepstakes if fraud, technical failures, or any other factor impairs the integrity of the sweepstakes</li>
                <li>Modify these Official Rules for clarification purposes without materially affecting the terms and conditions</li>
              </ul>
              <p>
                In the event of termination, Sponsor may, in its sole discretion, select winner(s) from among all eligible, non-suspect entries received prior to the event requiring such termination.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 9 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">9</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Release & Limitations of Liability</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                By entering, participants release and hold harmless the Released Parties from any and all liability for any injuries, losses, or damages of any kind caused by participation in this sweepstakes or resulting from acceptance, possession, or use of any prize, including without limitation, personal injury, death, and property damage.
              </p>
              <p>
                <strong>THE RELEASED PARTIES ARE NOT RESPONSIBLE FOR ANY INCORRECT OR INACCURATE INFORMATION, WHETHER CAUSED BY USERS, TAMPERING, HACKING, OR BY ANY EQUIPMENT OR PROGRAMMING ASSOCIATED WITH OR UTILIZED IN THE SWEEPSTAKES.</strong>
              </p>
              <p>
                Winner assumes all liability for any injury or damage caused or claimed to be caused by participation in this sweepstakes or use or redemption of any prize.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 10 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">10</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Publicity Release</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                Except where prohibited by law, entry and acceptance of prize constitute permission for Sponsor and Hestan Culinary to use winner's name, photograph, likeness, statements, biographical information, voice, and city/state address for advertising and promotional purposes worldwide and in all forms of media now known or hereafter developed, in perpetuity, without further compensation or notification.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 11 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">11</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Privacy Policy</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                Information collected from entrants is subject to Sponsor's Privacy Policy available at{' '}
                <a href="https://www.winespectator.com/privacy" className="text-wine-red hover:underline" target="_blank" rel="noopener noreferrer">
                  winespectator.com/privacy
                </a>.
              </p>
              <p>
                By entering, you agree that Sponsor and Hestan Culinary may contact you via email with information about their products, services, and promotions. You may opt-out of receiving such communications at any time.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 12 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">12</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Disputes & Governing Law</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                Except where prohibited, by entering, participants agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any and all disputes, claims, and causes of action arising out of or connected with this sweepstakes or any prize awarded shall be resolved individually, without resort to any form of class action</li>
                <li>Any and all claims, judgments, and awards shall be limited to actual out-of-pocket costs incurred, including costs associated with entering this sweepstakes, but in no event attorneys' fees</li>
                <li>Under no circumstances will any participant be permitted to obtain awards for, and participant hereby waives all rights to claim, punitive, incidental, and consequential damages and any other damages, other than for actual out-of-pocket expenses, and any and all rights to have damages multiplied or otherwise increased</li>
              </ul>
              <p className="font-semibold mt-4">
                This sweepstakes is governed by the laws of the State of New York, without regard to its conflict of laws principles. By entering, participants consent to the jurisdiction and venue of the federal, state, and local courts located in New York County, New York.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 13 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">13</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Winner List</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                For the name of the winner, send a self-addressed stamped envelope by <strong>January 15, 2026</strong> to:
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 my-3">
                <p className="font-mono text-sm">
                  Wine Spectator Thanksgiving Sweepstakes Winner<br />
                  M. Shanken Communications, Inc.<br />
                  825 Eighth Avenue, 30th Floor<br />
                  New York, NY 10019
                </p>
              </div>
              <p className="text-sm">
                Winner list requests will not be honored after January 15, 2026. Requests must include a self-addressed stamped envelope to receive a response.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 14 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wine-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-wine-red font-bold">14</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">Questions & Contact</h2>
            </div>
            <div className="pl-13 space-y-3 text-stone-700">
              <p>
                For questions regarding this sweepstakes, please contact:
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 my-3">
                <p>
                  <strong>Wine Spectator Sweepstakes</strong><br />
                  Email: <a href="mailto:info@winespectator.com" className="text-wine-red hover:underline">info@winespectator.com</a><br />
                  Subject Line: "Thanksgiving Sweepstakes Question"
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Section */}
        <div className="mt-12 bg-stone-100 rounded-xl p-8 text-center border border-stone-200">
          <p className="text-sm text-stone-600 mb-4">
            © 2025 M. Shanken Communications, Inc. All rights reserved.
          </p>
          <p className="text-xs text-stone-500 mb-6">
            Wine Spectator is a registered trademark of M. Shanken Communications, Inc.<br />
            Hestan Culinary is a trademark of Hestan Culinary.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-wine-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
          >
            <Gift className="w-5 h-5" />
            Back to Sweepstakes Entry
          </Link>
        </div>

      </main>
    </div>
  );
}
