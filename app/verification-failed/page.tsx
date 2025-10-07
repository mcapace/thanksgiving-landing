"use client";

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function VerificationFailedContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason');

  const getErrorMessage = () => {
    switch (reason) {
      case 'missing-token':
        return 'No verification token was provided.';
      case 'invalid-token':
        return 'The verification link is invalid or has expired.';
      case 'server-error':
        return 'A server error occurred during verification.';
      default:
        return 'Something went wrong during email verification.';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-stone-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <XCircle className="w-20 h-20 text-white mx-auto mb-4" />
          </motion.div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Verification Failed
          </h1>
          <p className="text-red-50 text-lg">
            We couldn&apos;t verify your email
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-xl text-stone-700 mb-4">
              {getErrorMessage()}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-3">
              💡 What to do next:
            </h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">1.</span>
                <span>Check that you clicked the most recent verification link</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">2.</span>
                <span>Verification links expire after 24 hours - request a new one if needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">3.</span>
                <span>Make sure you&apos;re using the complete link from your email</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#recipes"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-wine-red text-white px-6 py-4 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.location.href = '/#recipes'}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          </div>

          <p className="text-center text-sm text-stone-500 mt-6">
            Need help? Contact us for assistance.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function VerificationFailedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    }>
      <VerificationFailedContent />
    </Suspense>
  );
}

