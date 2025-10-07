"use client";

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function VerificationSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

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
            Email Verified!
          </h1>
          <p className="text-amber-50 text-lg">
            Welcome to Wine Country Thanksgiving
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-xl text-stone-700 mb-4">
              Thank you for confirming your email address!
            </p>
            {email && (
              <p className="text-sm text-stone-600 bg-stone-50 px-4 py-2 rounded-lg inline-block">
                {email}
              </p>
            )}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-3">
              📧 Check Your Inbox
            </h2>
            <p className="text-stone-700 mb-4">
              We&apos;ve sent you a welcome email with:
            </p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">✓</span>
                <span>Access to all 9 curated wine pairings</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">✓</span>
                <span>Downloadable recipe cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">✓</span>
                <span>Expert cooking tips and wine notes</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#recipes"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-wine-red text-white px-6 py-4 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View All Recipes
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#sweepstakes"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Enter Sweepstakes
            </Link>
          </div>

          <p className="text-center text-sm text-stone-500 mt-6">
            Didn&apos;t receive the email? Check your spam folder.
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

