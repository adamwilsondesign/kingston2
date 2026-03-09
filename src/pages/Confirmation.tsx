import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  ArrowRight,
  Download,
  Database,
  BookOpen,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/Card';
import { utilityBill, resident, transactionId } from '../data/demo';

export default function Confirmation() {
  const navigate = useNavigate();

  const paymentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="animate-fade-in-up mx-auto max-w-2xl p-6 lg:p-8">
      {/* Success banner */}
      <div className="mb-8 rounded-xl border border-success-500/20 bg-success-50 px-6 py-6 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-success-100">
          <CheckCircle2 className="h-7 w-7 text-success-600" />
        </div>
        <h1 className="text-2xl font-semibold text-surface-900">Payment Successful</h1>
        <p className="mt-1 text-sm text-surface-600">
          Your utility bill has been paid in full. Thank you.
        </p>
      </div>

      {/* Payment details card */}
      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-base font-semibold text-surface-900">Payment Details</h2>
        </CardHeader>
        <CardBody>
          <dl className="space-y-3 text-sm">
            <ReceiptRow label="Amount Paid" value={`$${utilityBill.amountDue.toFixed(2)}`} bold />
            <ReceiptRow label="Transaction ID" value={`#${transactionId}`} />
            <ReceiptRow label="Date" value={paymentDate} />
            <ReceiptRow label="Payment Method" value="Visa •••• 4242" />
            <div className="border-t border-surface-100 pt-3" />
            <ReceiptRow label="Service" value={utilityBill.service} />
            <ReceiptRow label="Account Number" value={utilityBill.accountNumber} />
            <ReceiptRow label="Service Address" value={utilityBill.serviceAddress} />
          </dl>
        </CardBody>
      </Card>

      {/* Email receipt notice */}
      <Card className="mb-4">
        <CardBody>
          <div className="flex items-center gap-3 rounded-lg bg-kingston-50 px-4 py-3">
            <Mail className="h-5 w-5 text-kingston-500 shrink-0" />
            <div>
              <p className="text-sm font-medium text-surface-900">Receipt emailed</p>
              <p className="text-xs text-surface-500">
                A confirmation receipt has been sent to{' '}
                <span className="font-medium text-surface-700">{resident.email}</span>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* City systems updated - visual confirmation */}
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-base font-semibold text-surface-900">City Systems Updated</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-success-500/20 bg-success-50 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-100">
                <Database className="h-4 w-4 text-success-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-surface-900">CIS Updated</p>
                <p className="text-xs text-surface-500">Payment recorded in Customer Information System</p>
              </div>
              <CheckCircle2 className="ml-auto h-5 w-5 text-success-500 shrink-0" />
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-success-500/20 bg-success-50 px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-100">
                <BookOpen className="h-4 w-4 text-success-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-surface-900">D365 Journal Entry Recorded</p>
                <p className="text-xs text-surface-500">Financial ledger updated via middleware sync</p>
              </div>
              <CheckCircle2 className="ml-auto h-5 w-5 text-success-500 shrink-0" />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/receipt')}
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-surface-200 bg-white text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
          >
            <Mail className="h-4 w-4" />
            View Email Receipt
          </button>
          <button
            onClick={() => navigate('/history')}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-kingston-500 text-sm font-semibold text-white shadow-sm transition-all hover:bg-kingston-600 hover:shadow-md active:scale-[0.98]"
          >
            Payment History
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex h-11 flex-1 items-center justify-center rounded-lg border border-surface-200 bg-white text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
          >
            Return to Dashboard
          </button>
          <button className="flex h-11 items-center justify-center gap-1.5 rounded-lg border border-surface-200 bg-white px-4 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50">
            <Download className="h-4 w-4" />
            PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function ReceiptRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <dt className="text-surface-500">{label}</dt>
      <dd className={`text-surface-900 ${bold ? 'text-base font-semibold' : ''}`}>{value}</dd>
    </div>
  );
}
