/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Gift, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

// US States list
const US_STATES = [
  { code: '', name: 'Select State' },
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];

export default function SweepstakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    agreeToRules: false,
    agreeToEmails: false,
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/sweepstakes-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Almost there! Check your email to verify your address. Once verified, you'll get your sweepstakes confirmation and recipe book download link!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          agreeToRules: false,
          agreeToEmails: false,
        });
        
        // Scroll to success message
        setTimeout(() => {
          const successEl = document.getElementById('success-message');
          if (successEl) {
            successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        throw new Error(data.message || data.error || 'Failed to submit entry');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="sweepstakes" ref={ref} className="bg-gradient-to-br from-stone-50 via-white to-amber-50/20 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Gift className="w-16 h-16 text-wine-red mx-auto" strokeWidth={1.5} />
            </motion.div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 mb-4 tracking-tight">
              Enter to Win
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
              Your chance to win a Hestan Culinary Holiday Prize Package valued at <strong className="text-wine-red">$464.90</strong>
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border-2 border-amber-200 rounded-full">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-900">NO PURCHASE NECESSARY</span>
            </div>
          </div>

          {/* Main Container */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Prize Image & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Prize Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/giveaway/prize-package.jpg"
                  alt="Hestan Culinary Holiday Prize Package"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif text-2xl font-light">Hestan Culinary Prize Package</p>
                </div>
              </div>

              {/* Prize Details Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-100">
                <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-wine-red" />
                  What You Can Win
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine-red mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-stone-900">Hestan Culinary Small Polished Roaster</p>
                      <p className="text-sm text-stone-600">Professional-grade cookware for perfect holiday meals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine-red mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-stone-900">Hedley & Bennett Chef Apron</p>
                      <p className="text-sm text-stone-600">Premium apron for style and functionality</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine-red mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-stone-900">3-Piece Mixing Bowl Set</p>
                      <p className="text-sm text-stone-600">Essential tools for holiday prep and baking</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <p className="text-center">
                    <span className="text-sm text-stone-600">Total Prize Value:</span>
                    <span className="block text-3xl font-serif font-bold text-wine-red mt-1">$464.90</span>
                  </p>
                </div>
              </div>

              {/* Contest Dates */}
              <div className="bg-gradient-to-r from-stone-100 to-amber-50 rounded-lg p-5 border border-stone-200">
                <p className="text-sm text-stone-700 mb-2">
                  <strong className="text-stone-900">Entry Period:</strong> October 14 - December 14, 2025
                </p>
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900">Winner Announced:</strong> On or around December 19, 2025
                </p>
              </div>
            </motion.div>

            {/* Right Column - Entry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Success Message */}
              {status === 'success' && (
                <div id="success-message" className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-6 animate-fadeInUp">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-green-900 mb-2">Check Your Email!</h4>
                      <p className="text-green-800 text-sm leading-relaxed">{message}</p>
                      <p className="text-green-700 text-sm mt-3">
                        <strong>📧 Next Step:</strong> Click the verification link in your email to:
                      </p>
                      <ul className="text-green-700 text-sm mt-2 ml-4 list-disc list-inside">
                        <li>Confirm your sweepstakes entry</li>
                        <li>Get your recipe book download link</li>
                      </ul>
                      <p className="text-green-700 text-sm mt-3">
                        <em>The verification link expires in 24 hours.</em>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-6 animate-fadeInUp">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-red-900 mb-2">Entry Failed</h4>
                      <p className="text-red-800 text-sm">{message}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Entry Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-stone-200">
                <h3 className="font-serif text-3xl font-light text-stone-900 mb-6 text-center">
                  Complete Your Entry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                        First Name <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                        Last Name <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address <span className="text-wine-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone & DOB Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                        Phone Number <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-stone-700 mb-2">
                        Date of Birth <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 21)).toISOString().split('T')[0]}
                      />
                      <p className="text-xs text-stone-500 mt-1">Must be 21+ to enter</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-2">
                      Street Address <span className="text-wine-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                      placeholder="123 Main Street"
                    />
                  </div>

                  {/* City, State, Zip Row */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-2">
                        City <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        placeholder="San Francisco"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-stone-700 mb-2">
                        State <span className="text-wine-red">*</span>
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none bg-white"
                      >
                        {US_STATES.map(state => (
                          <option key={state.code} value={state.code}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-stone-700 mb-2">
                        Zip Code <span className="text-wine-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{5}"
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                        placeholder="94102"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4 pt-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="agreeToRules"
                        checked={formData.agreeToRules}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-wine-red border-2 border-stone-300 rounded focus:ring-2 focus:ring-wine-red/50 mt-0.5 cursor-pointer"
                      />
                      <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
                        I agree to the{' '}
                        <Link href="/official-rules" className="text-wine-red hover:text-red-900 font-medium underline" target="_blank">
                          Official Rules
                        </Link>{' '}
                        and confirm I am 21+ years of age. <span className="text-wine-red">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="agreeToEmails"
                        checked={formData.agreeToEmails}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-wine-red border-2 border-stone-300 rounded focus:ring-2 focus:ring-wine-red/50 mt-0.5 cursor-pointer"
                      />
                      <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
                        Yes, I'd like to receive wine and culinary inspiration from Wine Spectator (optional)
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-gradient-to-r from-wine-red to-red-900 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Entry...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5" />
                          Enter to Win
                        </>
                      )}
                    </button>
                  </div>

                  {/* Legal Text */}
                  <p className="text-xs text-stone-500 text-center leading-relaxed pt-2">
                    NO PURCHASE NECESSARY. Open to legal US residents, 21+. Void where prohibited.
                    See{' '}
                    <Link href="/official-rules" className="text-wine-red hover:underline" target="_blank">
                      Official Rules
                    </Link>{' '}
                    for complete details, including entry period, prize details, and odds.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
