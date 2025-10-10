// Sweepstakes entry management
// Using Upstash Redis for persistence

import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export interface SweepstakesEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  agreeToRules: boolean;
  agreeToEmails: boolean;
  entryDate: Date;
  ipAddress?: string;
}

const ENTRIES_KEY = 'sweepstakes:entries';

/**
 * Load all entries from Redis
 */
async function loadEntries(): Promise<SweepstakesEntry[]> {
  try {
    const entries = await redis.get<Array<Omit<SweepstakesEntry, 'entryDate'> & { entryDate: string }>>(ENTRIES_KEY);
    
    if (!entries) {
      return [];
    }
    
    // Convert date strings back to Date objects
    return entries.map((entry) => ({
      ...entry,
      entryDate: new Date(entry.entryDate)
    }));
  } catch (error) {
    console.error('Error loading entries from Redis:', error);
    return [];
  }
}

/**
 * Save all entries to Redis
 */
async function saveEntries(entries: SweepstakesEntry[]): Promise<void> {
  try {
    await redis.set(ENTRIES_KEY, entries);
  } catch (error) {
    console.error('Error saving entries to Redis:', error);
    throw error;
  }
}

/**
 * Add a new sweepstakes entry
 */
export async function addEntry(entry: Omit<SweepstakesEntry, 'id' | 'entryDate'>): Promise<SweepstakesEntry> {
  const entries = await loadEntries();
  
  const newEntry: SweepstakesEntry = {
    ...entry,
    id: generateEntryId(),
    entryDate: new Date(),
  };
  
  entries.push(newEntry);
  await saveEntries(entries);
  
  // Log entry
  console.log('New sweepstakes entry:', {
    id: newEntry.id,
    email: newEntry.email,
    name: `${newEntry.firstName} ${newEntry.lastName}`,
    date: newEntry.entryDate,
  });
  
  return newEntry;
}

/**
 * Get total entry count
 */
export async function getEntryCount(): Promise<number> {
  const entries = await loadEntries();
  return entries.length;
}

/**
 * Check if email has already entered
 */
export async function hasEmailEntered(email: string): Promise<boolean> {
  const entries = await loadEntries();
  return entries.some(entry => entry.email.toLowerCase() === email.toLowerCase());
}

/**
 * Get all entries (for admin/export)
 */
export async function getAllEntries(): Promise<SweepstakesEntry[]> {
  const entries = await loadEntries();
  return [...entries];
}

/**
 * Generate unique entry ID
 */
function generateEntryId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return `entry_${timestamp}_${random}`;
}

/**
 * Export entries to CSV format
 */
export async function exportEntriesToCSV(): Promise<string> {
  const entries = await loadEntries();
  
  const headers = [
    'ID',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Date of Birth',
    'Address',
    'City',
    'State',
    'Zip Code',
    'Entry Date',
    'IP Address'
  ];
  
  const rows = entries.map(entry => [
    entry.id,
    entry.firstName,
    entry.lastName,
    entry.email,
    entry.phone,
    entry.dateOfBirth,
    entry.address,
    entry.city,
    entry.state,
    entry.zipCode,
    entry.entryDate.toISOString(),
    entry.ipAddress || 'N/A'
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  return csvContent;
}
