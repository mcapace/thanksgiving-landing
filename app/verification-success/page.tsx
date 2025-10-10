"use client";

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Gift } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function VerificationSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const entryId = searchParams.get('entryId');
  const downloadToken = searchParams.get('token');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-wine-red to-red-900 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-20 h-20 text-white mx-auto mb-4" />
          </motion.div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            You&apos;re Entered!
          </h1>
          <p className="text-amber-50 text-lg">
            Sweepstakes Entry Confirmed
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Entry Confirmation */}
          <div className="text-center mb-8">
            <p className="text-xl text-stone-700 mb-4">
              🎉 Thank you for confirming your email!
            </p>
            {email && (
              <div className="bg-green-50 border-2 border-green-200 px-6 py-4 rounded-lg inline-block">
                <p className="text-sm text-green-800 font-semibold mb-1">Entry Confirmed</p>
                <p className="text-sm text-green-700">{email}</p>
                {entryId && (
                  <p className="text-xs text-green-600 mt-2">Entry ID: {entryId}</p>
                )}
              </div>
            )}
          </div>

          {/* Prize Package Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Gift className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                  Holiday Prize Package
                </h2>
                <p className="text-stone-700 text-sm mb-3">
                  You&apos;re entered to win:
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-stone-700 ml-9">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>Hestan Culinary Small Polished Roaster</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>Hedley & Bennett Chef Apron</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>3-Piece Mixing Bowl Set</span>
              </li>
            </ul>
            <p className="text-amber-900 font-bold mt-4 ml-9">Total Value: $464.90</p>
            <p className="text-sm text-stone-600 mt-4 ml-9">
              Winner announced: ~December 19, 2025
            </p>
          </div>

          {/* Recipe Book Download */}
          {downloadToken && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-wine-red/5 border-2 border-wine-red/20 p-6 rounded-lg mb-6"
            >
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3 text-center">
                🍷 Your Complete Recipe Book
              </h3>
              <p className="text-stone-700 text-sm mb-4 text-center">
                Download all 9 expert wine pairings and Thanksgiving recipes!
              </p>
              <a
                href={`/api/download-recipes?token=${encodeURIComponent(downloadToken)}`}
                className="w-full inline-flex items-center justify-center gap-3 bg-wine-red text-white px-6 py-4 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Full Recipe Book (PDF)
              </a>
              <p className="text-xs text-stone-500 mt-3 text-center">
                🔒 This link can only be used once and expires in 7 days
              </p>
            </motion.div>
          )}

          {/* Email Confirmation */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-900">
              <strong>📧 Confirmation Email Sent!</strong><br />
              Check your inbox for a confirmation email with your entry details and recipe book download link.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#recipes"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-900 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View All Recipes
            </Link>
            <Link
              href="/official-rules"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View Official Rules
            </Link>
          </div>

          <p className="text-center text-xs text-stone-500 mt-6">
            Good luck! The winner will be notified by email.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function VerificationSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    }>
      <VerificationSuccessContent />
    </Suspense>
  );
}

