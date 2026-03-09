import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Droplets,
  MapPin,
  Calendar,
  Hash,
  Gauge,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { utilityBill } from '../data/demo';
import { useAppState } from '../store';

export default function BillDetails() {
  const navigate = useNavigate();
  const { state } = useAppState();

  return (
    <div className="animate-fade-in-up mx-auto max-w-3xl p-6 lg:p-8">
      {/* Breadcrumb / back */}
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-6 flex items-center gap-1.5 text-sm text-surface-500 transition-colors hover:text-surface-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      {/* Header area */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <Droplets className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-surface-900">{utilityBill.service}</h1>
            <p className="text-sm text-surface-500">Account #{utilityBill.accountNumber}</p>
          </div>
        </div>
        <StatusBadge status={state.billPaid ? 'Paid' : 'Outstanding'} />
      </div>

      {/* Amount due banner */}
      {!state.billPaid && (
        <div className="mb-6 rounded-xl border border-warning-500/20 bg-warning-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-warning-600">Amount Due</p>
              <p className="text-3xl font-bold text-surface-900 mt-0.5">
                ${utilityBill.amountDue.toFixed(2)}
              </p>
              <p className="text-sm text-surface-500 mt-1">Due by {utilityBill.dueDate}</p>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="rounded-lg bg-kingston-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-kingston-600 hover:shadow-md active:scale-[0.98]"
            >
              Pay Bill
            </button>
          </div>
        </div>
      )}

      {state.billPaid && (
        <div className="mb-6 rounded-xl border border-success-500/20 bg-success-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-success-600">Paid</p>
              <p className="text-3xl font-bold text-surface-900 mt-0.5">
                ${utilityBill.amountDue.toFixed(2)}
              </p>
              <p className="text-sm text-surface-500 mt-1">Payment received — Thank you</p>
            </div>
          </div>
        </div>
      )}

      {/* Account details */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-surface-900">Account Details</h2>
        </CardHeader>
        <CardBody>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <DetailRow icon={Hash} label="Account Number" value={utilityBill.accountNumber} />
            <DetailRow icon={MapPin} label="Service Address" value={utilityBill.serviceAddress} />
            <DetailRow icon={Calendar} label="Billing Period" value={utilityBill.billingPeriod} />
            <DetailRow icon={Gauge} label="Meter Number" value={utilityBill.meterNumber} />
          </dl>
        </CardBody>
      </Card>

      {/* Charges breakdown */}
      <Card className="mt-4">
        <CardHeader>
          <h2 className="text-base font-semibold text-surface-900">Charges Breakdown</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            <ChargeRow label="Water consumption (42 m³)" amount={78.60} />
            <ChargeRow label="Sewer service charge" amount={38.50} />
            <ChargeRow label="Infrastructure levy" amount={15.30} />
            <div className="border-t border-surface-200 pt-3 flex justify-between">
              <span className="text-sm font-semibold text-surface-900">Total</span>
              <span className="text-sm font-semibold text-surface-900">$132.40</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Hash;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-50">
        <Icon className="h-4 w-4 text-surface-400" />
      </div>
      <div>
        <dt className="text-xs text-surface-500">{label}</dt>
        <dd className="text-sm font-medium text-surface-900">{value}</dd>
      </div>
    </div>
  );
}

function ChargeRow({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-surface-600">{label}</span>
      <span className="text-surface-900">${amount.toFixed(2)}</span>
    </div>
  );
}
