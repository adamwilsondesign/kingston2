interface StatusBadgeProps {
  status: 'Outstanding' | 'Paid' | 'Processing' | 'Overdue';
}

const styles: Record<StatusBadgeProps['status'], string> = {
  Outstanding: 'bg-warning-50 text-warning-600 ring-warning-500/20',
  Overdue: 'bg-red-50 text-red-600 ring-red-500/20',
  Processing: 'bg-blue-50 text-blue-600 ring-blue-500/20',
  Paid: 'bg-success-50 text-success-600 ring-success-500/20',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      {status}
    </span>
  );
}
