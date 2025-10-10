/* eslint-disable @next/next/no-head-element */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

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
      <style>
        {`
          body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .wine-pairing {
            background: #fef3c7;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #d97706;
          }
          .cta-button {
            display: inline-block;
            background: #991b1b;
            color: white;
            padding: 14px 28px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px 10px 10px 0;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="header">
        <h1 style={{ margin: 0, fontSize: '28px' }}>🍷 Wine Country Thanksgiving</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Your Perfect Pairing Recipe</p>
      </div>
      
      <div className="content">
        <h2 style={{ color: '#7c2d12', marginTop: 0 }}>Your Recipe is Ready!</h2>
        
        <p>You've selected an amazing wine pairing for your Thanksgiving celebration:</p>
        
        <div className="wine-pairing">
          <p style={{ margin: '0 0 10px 0' }}><strong>🏛️ Winery:</strong> {winery}</p>
          <p style={{ margin: '0 0 10px 0' }}><strong>🍷 Wine:</strong> {wineName}</p>
          <p style={{ margin: 0 }}><strong>🍽️ Dish:</strong> {dishName}</p>
        </div>
        
        <p>Get started with this delicious pairing:</p>
        
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <a href={recipeUrl} className="cta-button">View Full Recipe</a>
          {pdfUrl && (
            <a href={pdfUrl} className="cta-button" style={{ background: '#d97706' }}>Download Recipe Card</a>
          )}
        </div>
        
        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '30px' }}>
          <strong>🎁 Want all 9 recipes?</strong><br />
          Visit our landing page to download the complete Wine Country Thanksgiving recipe collection.
        </p>
      </div>
      
      <div className="footer">
        <p>Wine Spectator x Hestan Culinary</p>
        <p>Bringing Wine Country to Your Thanksgiving Table</p>
      </div>
    </body>
  </html>
  );
}

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
      <style>
        {`
          body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .verify-button {
            display: inline-block;
            background: #991b1b;
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 18px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="header">
        <h1 style={{ margin: 0, fontSize: '28px' }}>📧 Confirm Your Email</h1>
      </div>
      
      <div className="content">
        <h2 style={{ color: '#7c2d12', marginTop: 0 }}>One More Step...</h2>
        
        <p>Thank you for requesting the complete Wine Country Thanksgiving recipe collection!</p>
        
        <p>To receive your 9 curated wine pairings and recipes, please confirm your email address:</p>
        
        <p style={{ background: '#f3f4f6', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
          <strong>{recipientEmail}</strong>
        </p>
        
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <a href={verificationUrl} className="verify-button">Confirm Email & Get Recipes</a>
        </div>
        
        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '30px' }}>
          This link will expire in 24 hours. If you didn't request this, you can safely ignore this email.
        </p>
      </div>
      
      <div className="footer">
        <p>Wine Spectator x Hestan Culinary</p>
      </div>
    </body>
  </html>
  );
}

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
      <style>
        {`
          body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
            color: white;
            padding: 40px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .highlight {
            background: #fef3c7;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #d97706;
          }
          .security-notice {
            background: #f0fdf4;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #22c55e;
            font-size: 14px;
          }
          .cta-button {
            display: inline-block;
            background: #991b1b;
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 18px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="header">
        <h1 style={{ margin: 0, fontSize: '32px' }}>🎉 Welcome!</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px', opacity: 0.9 }}>Your Wine Country Recipes Await</p>
      </div>
      
      <div className="content">
        <h2 style={{ color: '#7c2d12', marginTop: 0 }}>Thank You for Confirming!</h2>
        
        <p>Your email has been verified successfully. You now have exclusive access to download the complete Wine Country Thanksgiving recipe collection!</p>
        
        <div className="highlight">
          <h3 style={{ marginTop: 0, color: '#7c2d12' }}>📚 Your Recipe Collection Includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>9 Expert Wine Pairings from Premium Wineries</li>
            <li>Gourmet Thanksgiving Recipes</li>
            <li>Professional Recipe Cards (PDF Format)</li>
            <li>Cooking Tips & Techniques</li>
            <li>Wine Tasting Notes</li>
          </ul>
        </div>
        
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <a href={downloadUrl} className="cta-button">📥 Download Full Recipe Book</a>
        </div>
        
        <div className="security-notice">
          <strong>🔒 Secure Download Link</strong><br />
          This is your personal download link. It can only be used once and expires in 7 days. Please download your recipe book now!
        </div>
        
        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '30px' }}>
          <strong>🎁 Bonus:</strong> You've also been automatically entered into our sweepstakes for a chance to win a Hestan Culinary Prize Package valued at $464.90!
        </p>
        
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Questions about downloading? Reply to this email and we'll help you out.
        </p>
      </div>
      
      <div className="footer">
        <p><strong>Wine Spectator x Hestan Culinary</strong></p>
        <p>Bringing Wine Country to Your Thanksgiving Table</p>
        <p style={{ marginTop: '20px', fontSize: '12px' }}>
          This email was sent to: {recipientEmail}
        </p>
      </div>
    </body>
  </html>
  );
}

