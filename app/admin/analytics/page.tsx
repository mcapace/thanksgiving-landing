"use client";

import { useState, useEffect } from 'react';
import { BarChart3, Download, Users, FileText, Mail, TrendingUp, Calendar, ArrowLeft } from 'lucide-react';

interface AnalyticsData {
  summary: {
    totalSweepstakesEntries: number;
    totalFullRecipeBookDownloads: number;
    totalIndividualRecipeDownloads: number;
    totalEmailVerifications: number;
    conversionRate: string;
  };
  timeframes: {
    last24Hours: {
      sweepstakesEntries: number;
      fullRecipeBookDownloads: number;
      individualRecipeDownloads: number;
    };
    last7Days: {
      sweepstakesEntries: number;
      fullRecipeBookDownloads: number;
      individualRecipeDownloads: number;
    };
    last30Days: {
      sweepstakesEntries: number;
      fullRecipeBookDownloads: number;
      individualRecipeDownloads: number;
    };
  };
  recipeStats: Array<{
    recipeId: number;
    recipeName: string;
    winery: string;
    downloads: number;
    lastDownloaded: string | null;
  }>;
  recentEvents: Array<{
    id: string;
    type: string;
    timestamp: string;
    metadata: any;
  }>;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState('');

  const fetchAnalytics = async () => {
    if (!authToken) {
      setError('Please enter admin token');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/admin/analytics', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }

      const result = await response.json();
      setData(result.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
    } finally {
      setLoading(false);
    }
  };

  const exportData = async () => {
    if (!authToken) return;

    try {
      const response = await fetch('/api/admin/analytics', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'export' }),
      });

      if (!response.ok) throw new Error('Export failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'analytics-export.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed');
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchAnalytics();
    }
  }, [authToken]);

  if (!authToken) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Analytics</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Token
              </label>
              <input
                type="password"
                id="token"
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin token"
              />
            </div>
            <button
              onClick={fetchAnalytics}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Access Analytics
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchAnalytics}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <a
                href="/admin"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Admin
              </a>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Wine Spectator x Hestan Thanksgiving Landing Page</p>
          </div>
          <button
            onClick={exportData}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Sweepstakes Entries</p>
                <p className="text-2xl font-bold text-gray-900">{data.summary.totalSweepstakesEntries}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Full Recipe Book Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{data.summary.totalFullRecipeBookDownloads}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Download className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Individual Recipe Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{data.summary.totalIndividualRecipeDownloads}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{data.summary.conversionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeframe Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Last 24 Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Entries:</span>
                <span className="font-semibold">{data.timeframes.last24Hours.sweepstakesEntries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Full Downloads:</span>
                <span className="font-semibold">{data.timeframes.last24Hours.fullRecipeBookDownloads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Individual Downloads:</span>
                <span className="font-semibold">{data.timeframes.last24Hours.individualRecipeDownloads}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Last 7 Days
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Entries:</span>
                <span className="font-semibold">{data.timeframes.last7Days.sweepstakesEntries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Full Downloads:</span>
                <span className="font-semibold">{data.timeframes.last7Days.fullRecipeBookDownloads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Individual Downloads:</span>
                <span className="font-semibold">{data.timeframes.last7Days.individualRecipeDownloads}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Last 30 Days
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Entries:</span>
                <span className="font-semibold">{data.timeframes.last30Days.sweepstakesEntries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Full Downloads:</span>
                <span className="font-semibold">{data.timeframes.last30Days.fullRecipeBookDownloads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Individual Downloads:</span>
                <span className="font-semibold">{data.timeframes.last30Days.individualRecipeDownloads}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Popularity */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Recipe Popularity (Individual Downloads)
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Winery</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Downloaded</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.recipeStats.map((recipe) => (
                  <tr key={recipe.recipeId}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {recipe.recipeName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.winery}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.downloads}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.lastDownloaded ? new Date(recipe.lastDownloaded).toLocaleDateString() : 'Never'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Recent Activity (Last 50 Events)
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.recentEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(event.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.type === 'sweepstakes_entry' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'pdf_download' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {event.metadata.email && <div>Email: {event.metadata.email}</div>}
                      {event.metadata.recipeName && <div>Recipe: {event.metadata.recipeName}</div>}
                      {event.metadata.winery && <div>Winery: {event.metadata.winery}</div>}
                      {event.metadata.pdfType && <div>Type: {event.metadata.pdfType}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
