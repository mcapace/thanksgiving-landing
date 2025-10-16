/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { Gift, Download, Users, Calendar, Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";

interface Entry {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  agreeToEmails: boolean;
  entryDate: string;
  ipAddress?: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/entries?password=${encodeURIComponent(password)}`);
      
      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries);
        setCount(data.count);
        setIsAuthenticated(true);
        // Store password in session for future requests
        sessionStorage.setItem('adminPassword', password);
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Failed to load entries");
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    const pass = sessionStorage.getItem('adminPassword') || password;
    window.open(`/api/admin/entries?format=csv&password=${encodeURIComponent(pass)}`, '_blank');
  };

  const selectRandomWinner = () => {
    if (entries.length === 0) return;
    const randomIndex = Math.floor(Math.random() * entries.length);
    const winner = entries[randomIndex];
    
    alert(`🎉 Random Winner Selected!\n\nName: ${winner.name}\nEmail: ${winner.email}\nPhone: ${winner.phone}\nEntry ID: ${winner.id}`);
  };

  // Check if already authenticated
  useEffect(() => {
    const savedPassword = sessionStorage.getItem('adminPassword');
    if (savedPassword) {
      setPassword(savedPassword);
      handleLogin({ preventDefault: () => {} } as React.FormEvent);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-stone-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-red/10 rounded-full mb-4">
              <Gift className="w-8 h-8 text-wine-red" />
            </div>
            <h1 className="font-serif text-3xl font-light text-stone-900 mb-2">
              Sweepstakes Admin
            </h1>
            <p className="text-stone-600">Enter password to view entries</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-wine-red focus:ring-4 focus:ring-wine-red/10 transition-all outline-none"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-red-800 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-wine-red to-red-900 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Access Admin Panel"}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-stone-500">
            Default password: <code className="bg-stone-100 px-2 py-1 rounded">winespec2025</code>
            <br />
            (Set ADMIN_PASSWORD in environment variables)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-light text-stone-900 flex items-center gap-3">
                <Gift className="w-8 h-8 text-wine-red" />
                Sweepstakes Admin
              </h1>
              <p className="text-stone-600 mt-1">Wine Spectator x Hestan Holiday Sweepstakes</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/admin/analytics"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Users className="w-4 h-4" />
                Analytics Dashboard
              </a>
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={() => {
                  sessionStorage.removeItem('adminPassword');
                  setIsAuthenticated(false);
                  setPassword("");
                  setEntries([]);
                }}
                className="text-stone-600 hover:text-stone-900 px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-wine-red/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wine-red/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-wine-red" />
              </div>
              <div>
                <p className="text-sm text-stone-600">Total Entries</p>
                <p className="text-3xl font-bold text-stone-900">{count}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-stone-600">Contest Ends</p>
                <p className="text-lg font-semibold text-stone-900">Dec 14, 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
            <button
              onClick={selectRandomWinner}
              disabled={count === 0}
              className="w-full h-full flex items-center justify-center gap-2 text-green-700 font-semibold hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Gift className="w-5 h-5" />
              Select Random Winner
            </button>
          </div>
        </div>

        {/* Entries Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200">
          <div className="px-6 py-4 bg-stone-50 border-b border-stone-200">
            <h2 className="font-serif text-2xl font-light text-stone-900">All Entries</h2>
          </div>

          {entries.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-16 h-16 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-600 text-lg">No entries yet</p>
              <p className="text-stone-500 text-sm mt-2">Entries will appear here as people submit the form</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100 border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Entry ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Email Opt-in
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-600 uppercase tracking-wider">
                      Entry Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {entries.map((entry, index) => (
                    <tr key={entry.id} className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-stone-600">
                        {entry.id.split('_').pop()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-stone-900">{entry.name}</div>
                        <div className="text-xs text-stone-500">DOB: {entry.dateOfBirth}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-stone-900 mb-1">
                          <Mail className="w-3 h-3 text-stone-400" />
                          {entry.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-stone-600">
                          <Phone className="w-3 h-3 text-stone-400" />
                          {entry.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-1 text-sm text-stone-600">
                          <MapPin className="w-3 h-3 text-stone-400 mt-0.5 flex-shrink-0" />
                          <span className="max-w-xs">{entry.address}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.agreeToEmails ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
                            <XCircle className="w-3 h-3" />
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                        {new Date(entry.entryDate).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Winner Selection Instructions
          </h3>
          <ol className="space-y-2 text-sm text-amber-800">
            <li><strong>1.</strong> After December 14, 2025, click "Select Random Winner" button above</li>
            <li><strong>2.</strong> Contact the winner via email/phone within 5 business days</li>
            <li><strong>3.</strong> Export CSV for your records and compliance</li>
            <li><strong>4.</strong> Winner must respond within 5 business days to claim prize</li>
            <li><strong>5.</strong> Send required legal documents (Affidavit, Liability Release)</li>
            <li><strong>6.</strong> Ship prize to winner's address after documents are returned</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

