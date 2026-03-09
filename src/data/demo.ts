export const resident = {
  name: 'David Chen',
  firstName: 'David',
  email: 'david.chen@example.com',
  avatar: 'DC',
};

export const utilityBill = {
  accountNumber: '455293',
  serviceAddress: '123 King St, Kingston, ON',
  amountDue: 132.40,
  dueDate: 'February 1, 2026',
  status: 'Outstanding' as const,
  service: 'Water & Sewer Utility',
  billingPeriod: 'October 1 – December 31, 2025',
  meterNumber: 'MTR-88421',
};

export const transactionId = '329842';

export const paymentHistoryItems = [
  {
    id: 'txn-001',
    date: 'January 15, 2026',
    description: 'Water & Sewer Utility',
    amount: 132.40,
    status: 'Paid' as const,
    transactionId: '329842',
    method: 'Visa •••• 4242',
  },
  {
    id: 'txn-002',
    date: 'October 3, 2025',
    description: 'Water & Sewer Utility',
    amount: 118.75,
    status: 'Paid' as const,
    transactionId: '284710',
    method: 'Visa •••• 4242',
  },
  {
    id: 'txn-003',
    date: 'July 5, 2025',
    description: 'Water & Sewer Utility',
    amount: 124.50,
    status: 'Paid' as const,
    transactionId: '241893',
    method: 'Visa •••• 4242',
  },
  {
    id: 'txn-004',
    date: 'April 2, 2025',
    description: 'Property Tax Installment',
    amount: 1_245.00,
    status: 'Paid' as const,
    transactionId: '198432',
    method: 'Bank Transfer',
  },
  {
    id: 'txn-005',
    date: 'January 8, 2025',
    description: 'Water & Sewer Utility',
    amount: 110.20,
    status: 'Paid' as const,
    transactionId: '163205',
    method: 'Visa •••• 4242',
  },
];
