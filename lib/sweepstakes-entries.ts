// Sweepstakes entry management
// In production, this should use a real database (Postgres, MongoDB, etc.)

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

// In-memory storage (for development)
// In production, replace with actual database
const entries: SweepstakesEntry[] = [];

/**
 * Add a new sweepstakes entry
 */
export function addEntry(entry: Omit<SweepstakesEntry, 'id' | 'entryDate'>): SweepstakesEntry {
  const newEntry: SweepstakesEntry = {
    ...entry,
    id: generateEntryId(),
    entryDate: new Date(),
  };
  
  entries.push(newEntry);
  
  // Log entry (in production, save to database)
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
export function getEntryCount(): number {
  return entries.length;
}

/**
 * Check if email has already entered
 */
export function hasEmailEntered(email: string): boolean {
  return entries.some(entry => entry.email.toLowerCase() === email.toLowerCase());
}

/**
 * Get all entries (for admin/export)
 */
export function getAllEntries(): SweepstakesEntry[] {
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
export function exportEntriesToCSV(): string {
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

