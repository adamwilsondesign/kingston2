import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Card, { CardHeader } from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { paymentHistoryItems } from '../data/demo';
import { useAppState } from '../store';

export default function History() {
  const navigate = useNavigate();
  const { state } = useAppState();

  // If bill is paid, show the first item (the new payment). If not, skip it.
  const items = state.billPaid ? paymentHistoryItems : paymentHistoryItems.slice(1);

  return (
    <div className="animate-fade-in-up mx-auto max-w-4xl p-6 lg:p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-1.5 text-sm text-surface-500 transition-colors hover:text-surface-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-surface-900">Payment History</h1>
          <p className="mt-1 text-sm text-surface-500">
            View all your past transactions and receipts.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-surface-900">Transactions</h2>
            <span className="text-xs text-surface-400">{items.length} transactions</span>
          </div>
        </CardHeader>

        {/* Table header */}
        <div className="hidden sm:grid grid-cols-12 gap-4 border-b border-surface-100 px-6 py-2.5 text-xs font-medium text-surface-400 uppercase tracking-wider">
          <span className="col-span-2">Date</span>
          <span className="col-span-3">Description</span>
          <span className="col-span-2">Transaction ID</span>
          <span className="col-span-2">Method</span>
          <span className="col-span-1">Status</span>
          <span className="col-span-2 text-right">Amount</span>
        </div>

        {/* Rows */}
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center px-6 py-3.5 border-b border-surface-100 last:border-b-0 transition-colors hover:bg-surface-50 ${
              i === 0 && state.billPaid ? 'bg-success-50/50' : ''
            }`}
          >
            <span className="sm:col-span-2 text-sm text-surface-600">
              {item.date}
            </span>
            <span className="sm:col-span-3 text-sm font-medium text-surface-900 flex items-center gap-1.5">
              {item.description}
              {i === 0 && state.billPaid && (
                <span className="flex items-center gap-0.5 text-xs text-success-600 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  New
                </span>
              )}
            </span>
            <span className="sm:col-span-2 text-sm text-surface-500">
              #{item.transactionId}
            </span>
            <span className="sm:col-span-2 text-sm text-surface-500">
              {item.method}
            </span>
            <span className="sm:col-span-1">
              <StatusBadge status={item.status} />
            </span>
            <span className="sm:col-span-2 text-sm font-semibold text-surface-900 flex items-center justify-end gap-2">
              ${item.amount.toFixed(2)}
              <button className="text-surface-300 hover:text-kingston-500 transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
}
