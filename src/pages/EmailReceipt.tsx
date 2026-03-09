import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { utilityBill, resident, transactionId } from '../data/demo';

export default function EmailReceipt() {
  const navigate = useNavigate();

  const paymentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="animate-fade-in-up mx-auto max-w-2xl p-6 lg:p-8">
      <button
        onClick={() => navigate('/confirmation')}
        className="mb-6 flex items-center gap-1.5 text-sm text-surface-500 transition-colors hover:text-surface-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Confirmation
      </button>

      <p className="mb-3 text-xs text-surface-400 uppercase tracking-wider font-medium">Email Preview</p>

      {/* Email container — styled as an email */}
      <div className="rounded-xl border border-surface-200 bg-white shadow-lg overflow-hidden">
        {/* Email header meta */}
        <div className="border-b border-surface-100 bg-surface-50 px-6 py-3 text-xs text-surface-500 space-y-1">
          <div><span className="font-medium text-surface-600">From:</span> noreply@mykingston.ca</div>
          <div><span className="font-medium text-surface-600">To:</span> {resident.email}</div>
          <div><span className="font-medium text-surface-600">Subject:</span> Payment Receipt — Kingston Utility Bill #{transactionId}</div>
        </div>

        {/* Email body */}
        <div>
          {/* Kingston branded header */}
          <div className="bg-kingston-700 px-8 py-6 text-center">
            <img src="/kingston-logo.png" alt="City of Kingston" className="mx-auto h-14 w-auto mb-3" />
            <h1 className="text-lg font-semibold text-white">MyKingston Payment Receipt</h1>
            <p className="text-sm text-kingston-300 mt-0.5">City of Kingston — City Services Portal</p>
          </div>

          {/* Success callout */}
          <div className="px-8 py-6 border-b border-surface-100">
            <div className="rounded-lg bg-success-50 border border-success-500/20 px-5 py-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-success-100">
                <svg className="h-5 w-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base font-semibold text-surface-900">Payment Confirmed</p>
              <p className="mt-1 text-2xl font-bold text-surface-900">${utilityBill.amountDue.toFixed(2)}</p>
            </div>
          </div>

          {/* Payment details table */}
          <div className="px-8 py-6 border-b border-surface-100">
            <h2 className="text-sm font-semibold text-surface-900 mb-4 uppercase tracking-wider">Payment Details</h2>
            <table className="w-full text-sm">
              <tbody>
                <EmailRow label="Transaction ID" value={`#${transactionId}`} />
                <EmailRow label="Payment Date" value={paymentDate} />
                <EmailRow label="Payment Method" value="Visa •••• 4242" />
                <EmailRow label="Amount Paid" value={`$${utilityBill.amountDue.toFixed(2)} CAD`} bold />
              </tbody>
            </table>
          </div>

          {/* Utility bill details */}
          <div className="px-8 py-6 border-b border-surface-100">
            <h2 className="text-sm font-semibold text-surface-900 mb-4 uppercase tracking-wider">Utility Bill Details</h2>
            <table className="w-full text-sm">
              <tbody>
                <EmailRow label="Service" value={utilityBill.service} />
                <EmailRow label="Account Number" value={utilityBill.accountNumber} />
                <EmailRow label="Service Address" value={utilityBill.serviceAddress} />
                <EmailRow label="Billing Period" value={utilityBill.billingPeriod} />
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-surface-50 px-8 py-6 text-center">
            <p className="text-xs text-surface-500 leading-relaxed">
              This is an automated payment receipt from the City of Kingston.
              <br />
              If you have questions about this payment, please contact Kingston 311.
            </p>
            <div className="mt-4 border-t border-surface-200 pt-4">
              <p className="text-xs text-surface-400">
                City of Kingston &middot; 216 Ontario St, Kingston, ON K7L 2Z3
              </p>
              <p className="text-xs text-surface-400 mt-1">
                cityofkingston.ca &middot; 613-546-0000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <tr className="border-b border-surface-100 last:border-b-0">
      <td className="py-2.5 pr-4 text-surface-500 whitespace-nowrap">{label}</td>
      <td className={`py-2.5 text-right ${bold ? 'font-semibold text-surface-900' : 'text-surface-700'}`}>
        {value}
      </td>
    </tr>
  );
}
