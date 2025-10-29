-- Supabase database schema for sweepstakes entries
-- Run this in your Supabase SQL editor

-- Create sweepstakes_entries table
CREATE TABLE IF NOT EXISTS sweepstakes_entries (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  agree_to_rules BOOLEAN NOT NULL DEFAULT false,
  agree_to_emails BOOLEAN NOT NULL DEFAULT false,
  entry_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_sweepstakes_entries_email ON sweepstakes_entries(email);
CREATE INDEX IF NOT EXISTS idx_sweepstakes_entries_entry_date ON sweepstakes_entries(entry_date);
CREATE INDEX IF NOT EXISTS idx_sweepstakes_entries_created_at ON sweepstakes_entries(created_at);

-- Enable Row Level Security
ALTER TABLE sweepstakes_entries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations
CREATE POLICY "Allow all operations on sweepstakes_entries" ON sweepstakes_entries
FOR ALL USING (true);
