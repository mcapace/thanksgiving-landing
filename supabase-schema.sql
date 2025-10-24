-- Supabase database schema for analytics events
-- Run this in your Supabase SQL editor

-- Create analytics_events table
CREATE TABLE IF NOT EXISTS analytics_events (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('pdf_download', 'sweepstakes_entry', 'email_verification')),
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  user_agent TEXT,
  ip_address TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_timestamp ON analytics_events(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);

-- Create a view for analytics summary (optional)
CREATE OR REPLACE VIEW analytics_summary AS
SELECT 
  type,
  COUNT(*) as count,
  DATE_TRUNC('day', timestamp) as date
FROM analytics_events
GROUP BY type, DATE_TRUNC('day', timestamp)
ORDER BY date DESC;

-- Enable Row Level Security (RLS) - optional but recommended
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (adjust as needed for your security requirements)
CREATE POLICY "Allow all operations on analytics_events" ON analytics_events
FOR ALL USING (true);
