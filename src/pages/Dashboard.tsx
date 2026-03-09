import { useNavigate } from 'react-router-dom';
import {
  Droplets,
  Home,
  ArrowRight,
  FileText,
  AlertCircle,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { resident, utilityBill } from '../data/demo';
import { useAppState } from '../store';

export default function Dashboard() {
  const navigate = useNavigate();
  const { state } = useAppState();
  const billPaid = state.billPaid;

  return (
    <div className="animate-fade-in-up mx-auto max-w-5xl p-6 lg:p-8">
      {/* Welcome banner */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-surface-900">
          Welcome back, {resident.firstName}
        </h1>
        <p className="mt-1 text-sm text-surface-500">
          Here's an overview of your City of Kingston accounts and services.
        </p>
      </div>

      {/* Summary cards row */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${billPaid ? 'bg-success-50' : 'bg-warning-50'}`}>
              {billPaid ? (
                <CheckCircle2 className="h-5 w-5 text-success-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-warning-500" />
              )}
            </div>
            <div>
              <p className="text-sm text-surface-500">Outstanding Balance</p>
              <p className="text-xl font-semibold">
                {billPaid ? '$0.00' : `$${utilityBill.amountDue.toFixed(2)}`}
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-kingston-50">
              <FileText className="h-5 w-5 text-kingston-500" />
            </div>
            <div>
              <p className="text-sm text-surface-500">Active Services</p>
              <p className="text-xl font-semibold">3</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-100">
              <Building2 className="h-5 w-5 text-surface-500" />
            </div>
            <div>
              <p className="text-sm text-surface-500">Properties</p>
              <p className="text-xl font-semibold">1</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Bills section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-surface-900">Bills & Balances</h2>
            <span className="text-xs text-surface-400">Updated today</span>
          </div>
        </CardHeader>

        {/* Utility bill row */}
        <div
          className="group flex cursor-pointer items-center gap-4 border-b border-surface-100 px-6 py-4 transition-colors hover:bg-surface-50"
          onClick={() => navigate('/bill/utility')}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
            <Droplets className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-surface-900">{utilityBill.service}</p>
              <StatusBadge status={billPaid ? 'Paid' : 'Outstanding'} />
            </div>
            <p className="text-xs text-surface-500 mt-0.5">
              Account #{utilityBill.accountNumber} · Due {utilityBill.dueDate}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-base font-semibold ${billPaid ? 'text-success-600' : 'text-surface-900'}`}>
              ${utilityBill.amountDue.toFixed(2)}
            </p>
            {!billPaid && (
              <p className="text-xs text-kingston-500 font-medium mt-0.5 flex items-center justify-end gap-1 group-hover:underline">
                Pay now <ArrowRight className="h-3 w-3" />
              </p>
            )}
          </div>
        </div>

        {/* Property tax row (disabled/implied) */}
        <div className="flex items-center gap-4 border-b border-surface-100 px-6 py-4 opacity-60">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
            <Home className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-surface-900">Property Tax</p>
              <StatusBadge status="Paid" />
            </div>
            <p className="text-xs text-surface-500 mt-0.5">
              Account #331047 · Next installment April 15, 2026
            </p>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-success-600">$0.00</p>
          </div>
        </div>

        {/* Parking permit row (disabled/implied) */}
        <div className="flex items-center gap-4 px-6 py-4 opacity-60">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
            <FileText className="h-5 w-5 text-purple-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-surface-900">Parking Permit</p>
              <StatusBadge status="Paid" />
            </div>
            <p className="text-xs text-surface-500 mt-0.5">
              Permit #PKG-2025-1482 · Expires December 31, 2026
            </p>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-success-600">$0.00</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
