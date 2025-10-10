/* eslint-disable @next/next/no-head-element */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

// ============================================
// Recipe Email Template
// ============================================

interface RecipeEmailProps {
  winery: string;
  wineName: string;
  dishName: string;
  recipeUrl: string;
  pdfUrl?: string;
}

export function RecipeEmail({
  winery,
  wineName,
  dishName,
  recipeUrl,
  pdfUrl,
}: RecipeEmailProps) {
  return (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1c1917;
            background: #f5f5f4;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #8B2332 0%, #7A1F2B 100%);
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            font-size: 32px;
            font-weight: 300;
            margin: 0 0 8px 0;
            letter-spacing: -0.5px;
          }
          .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            margin: 0;
          }
          .content { padding: 40px 30px; }
          .recipe-title {
            color: #8B2332;
            font-size: 28px;
            font-weight: 600;
            margin: 0 0 24px 0;
            line-height: 1.2;
          }
          .winery-card {
            background: linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%);
            border-left: 4px solid #8B2332;
            padding: 24px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .winery-name {
            color: #1c1917;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 8px 0;
          }
          .wine-name {
            color: #57534e;
            font-size: 18px;
            margin: 0 0 12px 0;
            font-style: italic;
          }
          .pairing-note {
            color: #78716c;
            font-size: 14px;
            line-height: 1.5;
          }
          .cta-container { text-align: center; margin: 32px 0; }
          .cta-button {
            display: inline-block;
            background: #8B2332;
            color: #ffffff !important;
            padding: 16px 40px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 12px rgba(139, 35, 50, 0.3);
          }
          .pdf-link { text-align: center; margin: 20px 0; }
          .pdf-link a {
            color: #8B2332;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
            margin: 32px 0;
          }
          .footer {
            background: #fafaf9;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer-title {
            color: #1c1917;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 4px 0;
          }
          .footer-subtitle {
            color: #78716c;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="email-container">
        <div className="header">
          <h1>🍷 Your Wine Pairing</h1>
          <p>Expert pairing for Thanksgiving</p>
        </div>
        
        <div className="content">
          <h2 className="recipe-title">{dishName}</h2>
          
          <div className="winery-card">
            <div className="winery-name">{winery}</div>
            <div className="wine-name">{wineName}</div>
            <p className="pairing-note">
              This exceptional pairing brings together the best of wine country and culinary excellence for an unforgettable Thanksgiving experience.
            </p>
          </div>
          
          <div className="cta-container">
            <a href={recipeUrl} className="cta-button">View Full Recipe →</a>
          </div>
          
          {pdfUrl && (
            <>
              <div className="divider"></div>
              <div className="pdf-link">
                <a href={pdfUrl}>📥 Download Recipe Card (PDF)</a>
              </div>
            </>
          )}
        </div>
        
        <div className="footer">
          <p className="footer-title">Wine Spectator × Hestan Culinary</p>
          <p className="footer-subtitle">Bringing Wine Country to Your Thanksgiving Table</p>
        </div>
      </div>
    </body>
  </html>
  );
}

// ============================================
// Verification Email Template
// ============================================

interface VerificationEmailProps {
  verificationUrl: string;
  recipientEmail: string;
}

export function VerificationEmail({
  verificationUrl,
  recipientEmail,
}: VerificationEmailProps) {
  return (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1c1917;
            background: #f5f5f4;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #8B2332 0%, #7A1F2B 100%);
            padding: 50px 30px;
            text-align: center;
          }
          .header-icon {
            font-size: 60px;
            margin-bottom: 16px;
          }
          .header h1 {
            color: #ffffff;
            font-size: 32px;
            font-weight: 300;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .content { padding: 40px 30px; }
          .content h2 {
            color: #8B2332;
            font-size: 26px;
            font-weight: 600;
            margin: 0 0 20px 0;
          }
          .content p {
            color: #57534e;
            font-size: 16px;
            margin: 0 0 16px 0;
          }
          .email-display {
            background: #f5f5f4;
            padding: 16px 20px;
            border-radius: 8px;
            margin: 24px 0;
            text-align: center;
          }
          .email-display strong {
            color: #1c1917;
            font-size: 16px;
            font-weight: 600;
          }
          .cta-container { text-align: center; margin: 32px 0; }
          .verify-button {
            display: inline-block;
            background: #8B2332;
            color: #ffffff !important;
            padding: 18px 48px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(139, 35, 50, 0.3);
          }
          .note {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 16px 20px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .note p {
            font-size: 14px;
            color: #78350f;
            margin: 0;
          }
          .footer {
            background: #fafaf9;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer-title {
            color: #1c1917;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 4px 0;
          }
          .footer-subtitle {
            color: #78716c;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="email-container">
        <div className="header">
          <div className="header-icon">📧</div>
          <h1>Confirm Your Email</h1>
        </div>
        
        <div className="content">
          <h2>One More Step...</h2>
          
          <p>Thank you for requesting the complete Wine Country Thanksgiving recipe collection!</p>
          
          <p>To receive your 9 curated wine pairings and recipes, please confirm your email address:</p>
          
          <div className="email-display">
            <strong>{recipientEmail}</strong>
          </div>
          
          <div className="cta-container">
            <a href={verificationUrl} className="verify-button">Confirm Email & Get Recipes →</a>
          </div>
          
          <div className="note">
            <p><strong>⏰ Quick action needed:</strong> This link will expire in 24 hours. If you didn't request this, you can safely ignore this email.</p>
          </div>
        </div>
        
        <div className="footer">
          <p className="footer-title">Wine Spectator × Hestan Culinary</p>
          <p className="footer-subtitle">Bringing Wine Country to Your Thanksgiving Table</p>
        </div>
      </div>
    </body>
  </html>
  );
}

// ============================================
// Welcome Email Template (with secure download)
// ============================================

interface WelcomeEmailProps {
  downloadUrl: string;
  recipientEmail: string;
}

export function WelcomeEmail({
  downloadUrl,
  recipientEmail,
}: WelcomeEmailProps) {
  return (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1c1917;
            background: #f5f5f4;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #8B2332 0%, #7A1F2B 100%);
            padding: 50px 30px;
            text-align: center;
          }
          .header-icon {
            font-size: 60px;
            margin-bottom: 16px;
          }
          .header h1 {
            color: #ffffff;
            font-size: 36px;
            font-weight: 300;
            margin: 0 0 8px 0;
            letter-spacing: -0.5px;
          }
          .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 18px;
          }
          .content { padding: 40px 30px; }
          .content h2 {
            color: #8B2332;
            font-size: 26px;
            font-weight: 600;
            margin: 0 0 20px 0;
          }
          .content p {
            color: #57534e;
            font-size: 16px;
            margin: 0 0 16px 0;
          }
          .highlight-box {
            background: linear-gradient(135deg, #fef3c7 0%, #fef0e8 100%);
            border-left: 4px solid #f59e0b;
            padding: 24px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .highlight-box h3 {
            color: #78350f;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 16px 0;
          }
          .highlight-box ul {
            margin: 0;
            padding-left: 20px;
          }
          .highlight-box li {
            color: #78350f;
            margin: 8px 0;
            font-size: 15px;
          }
          .cta-container { text-align: center; margin: 36px 0; }
          .download-button {
            display: inline-block;
            background: #8B2332;
            color: #ffffff !important;
            padding: 20px 50px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(139, 35, 50, 0.3);
          }
          .security-notice {
            background: #f0fdf4;
            border-left: 4px solid #22c55e;
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
          }
          .security-notice p {
            font-size: 14px;
            color: #14532d;
            margin: 0;
          }
          .security-notice strong {
            color: #15803d;
            font-size: 15px;
          }
          .bonus-box {
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            border: 2px solid #fca5a5;
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
            text-align: center;
          }
          .bonus-box p {
            color: #7f1d1d;
            font-size: 15px;
            margin: 0;
          }
          .footer {
            background: #fafaf9;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer-title {
            color: #1c1917;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 4px 0;
          }
          .footer-subtitle {
            color: #78716c;
            font-size: 14px;
            margin: 0 0 16px 0;
          }
          .footer-email {
            color: #a8a29e;
            font-size: 12px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="email-container">
        <div className="header">
          <div className="header-icon">🎉</div>
          <h1>Welcome!</h1>
          <p>Your recipes are ready to download</p>
        </div>
        
        <div className="content">
          <h2>Thank You for Confirming!</h2>
          
          <p>Your email has been verified successfully. You now have exclusive access to download the complete Wine Country Thanksgiving recipe collection!</p>
          
          <div className="highlight-box">
            <h3>📚 Your Recipe Collection Includes:</h3>
            <ul>
              <li>9 Expert Wine Pairings from Premium Wineries</li>
              <li>Gourmet Thanksgiving Recipes</li>
              <li>Professional Recipe Cards (PDF Format)</li>
              <li>Cooking Tips & Techniques</li>
              <li>Wine Tasting Notes</li>
            </ul>
          </div>
          
          <div className="cta-container">
            <a href={downloadUrl} className="download-button">📥 Download Full Recipe Book</a>
          </div>
          
          <div className="security-notice">
            <p><strong>🔒 Secure Download Link</strong><br />
            This is your personal download link. It can only be used once and expires in 7 days. Please download your recipe book now!</p>
          </div>
          
          <div className="bonus-box">
            <p><strong>🎁 Bonus:</strong> You've also been automatically entered into our sweepstakes for a chance to win a Hestan Culinary Prize Package valued at $464.90!</p>
          </div>
          
          <p style={{ fontSize: '14px', color: '#78716c', marginTop: '24px' }}>
            Questions about downloading? Reply to this email and we'll help you out.
          </p>
        </div>
        
        <div className="footer">
          <p className="footer-title">Wine Spectator × Hestan Culinary</p>
          <p className="footer-subtitle">Bringing Wine Country to Your Thanksgiving Table</p>
          <p className="footer-email">This email was sent to: {recipientEmail}</p>
        </div>
      </div>
    </body>
  </html>
  );
}
