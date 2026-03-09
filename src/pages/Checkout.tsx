import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown, Lock } from 'lucide-react';
import { utilityBill, resident } from '../data/demo';

export default function Checkout() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(resident.email);
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [expiry, setExpiry] = useState('08/27');
  const [cvv, setCvv] = useState('•••');
  const [cardName, setCardName] = useState(resident.name);
  const [discountCode, setDiscountCode] = useState('');
  const [_showDiscount, setShowDiscount] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Shopify-style top header bar */}
      <div className="border-b border-surface-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-kingston-700 p-0.5">
              <img src="/kingston-logo.png" alt="Kingston" className="h-full w-full object-contain" />
            </div>
            <span className="text-base font-semibold text-surface-900">MyKingston</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-surface-400">
            <Lock className="h-3.5 w-3.5" />
            <span>Secure checkout</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT COLUMN — Checkout form */}
          <div className="order-2 lg:order-1 lg:col-span-7 px-6 lg:px-12 py-8 lg:py-10">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center gap-1 text-xs text-surface-400">
              <span className="text-kingston-500 cursor-pointer hover:underline" onClick={() => navigate('/bill/utility')}>Bill</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-kingston-500 cursor-pointer hover:underline">Information</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-surface-600 font-medium">Payment</span>
            </nav>

            {/* Express checkout */}
            <div className="mb-8">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-surface-400">Express checkout</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* Apple Pay */}
                <button
                  onClick={() => navigate('/processing')}
                  className="flex h-12 items-center justify-center gap-0.5 rounded-md bg-black text-white transition-opacity hover:opacity-90"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-sm font-medium">Pay</span>
                </button>

                {/* PayPal */}
                <button className="flex h-12 items-center justify-center rounded-md bg-[#FFC439] transition-opacity hover:opacity-90">
                  <svg className="h-5" viewBox="0 0 101 32" fill="none">
                    <path d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z" fill="#253B80"/>
                    <path d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z" fill="#253B80"/>
                    <path d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z" fill="#253B80"/>
                    <path d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.137 23.7 L 61.937 18.1 C 62.037 17.6 62.437 17.2 63.037 17.2 L 65.537 17.2 C 70.637 17.2 73.637 14.7 74.437 9.8 C 74.737 7.7 74.437 6 73.437 4.8 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z" fill="#179BD7"/>
                    <path d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z" fill="#179BD7"/>
                    <path d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z" fill="#179BD7"/>
                  </svg>
                </button>

                {/* Google Pay */}
                <button className="flex h-12 items-center justify-center gap-1 rounded-md border border-surface-200 bg-white transition-colors hover:bg-surface-50">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-medium text-surface-700">Pay</span>
                </button>
              </div>
            </div>

            {/* OR divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-surface-400 uppercase tracking-wider">Or pay with card</span>
              </div>
            </div>

            {/* Contact information */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-surface-900">Contact information</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-11 w-full rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
              />
              <label className="mt-2 flex items-center gap-2 text-xs text-surface-600">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-surface-300 text-kingston-500" />
                Email me with news and offers
              </label>
            </div>

            {/* Payment */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-surface-900">Payment</h3>
              <p className="mb-3 text-xs text-surface-500">All transactions are secure and encrypted.</p>

              <div className="rounded-md border border-surface-300 overflow-hidden">
                {/* Card number header */}
                <div className="flex items-center justify-between border-b border-surface-200 bg-surface-50 px-3 py-2.5">
                  <span className="text-sm text-surface-700 font-medium">Credit card</span>
                  <div className="flex gap-1.5">
                    <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600 text-[7px] font-bold text-white">VISA</div>
                    <div className="flex h-5 w-8 items-center justify-center rounded bg-red-500 text-[7px] font-bold text-white">MC</div>
                    <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-400 text-[7px] font-bold text-white">AMEX</div>
                  </div>
                </div>

                <div className="p-3 space-y-3">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card number"
                    className="h-10 w-full rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
                  />
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Name on card"
                    className="h-10 w-full rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="Expiration date (MM/YY)"
                      className="h-10 w-full rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
                    />
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="Security code"
                      className="h-10 w-full rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pay button */}
            <button
              onClick={() => navigate('/processing')}
              className="flex h-14 w-full items-center justify-center rounded-md bg-kingston-500 text-base font-semibold text-white shadow-sm transition-all hover:bg-kingston-600 active:scale-[0.99]"
            >
              Pay now &middot; ${utilityBill.amountDue.toFixed(2)}
            </button>
          </div>

          {/* RIGHT COLUMN — Order summary */}
          <div className="order-1 lg:order-2 lg:col-span-5 border-b lg:border-b-0 lg:border-l border-surface-200 bg-surface-50 px-6 lg:px-10 py-8 lg:py-10">
            {/* Order summary header (mobile toggle) */}
            <button
              className="flex w-full items-center justify-between lg:hidden mb-4"
              onClick={() => setShowDiscount(v => !v)}
            >
              <span className="text-sm font-semibold text-kingston-500 flex items-center gap-1">
                Order summary
                <ChevronDown className="h-4 w-4" />
              </span>
              <span className="text-lg font-semibold text-surface-900">${utilityBill.amountDue.toFixed(2)}</span>
            </button>

            <h3 className="hidden lg:block text-base font-semibold text-surface-900 mb-6">Order summary</h3>

            {/* Line item */}
            <div className="flex items-start gap-4 pb-5 border-b border-surface-200">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-surface-200 bg-white">
                <svg className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-surface-500 text-[10px] font-semibold text-white">1</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-surface-900">Kingston Utility Bill</p>
                <p className="text-xs text-surface-500 mt-0.5">Account #: {utilityBill.accountNumber}</p>
                <p className="text-xs text-surface-500">Service: {utilityBill.serviceAddress}</p>
              </div>
              <span className="text-sm font-medium text-surface-900">${utilityBill.amountDue.toFixed(2)}</span>
            </div>

            {/* Discount code */}
            <div className="flex gap-2 py-5 border-b border-surface-200">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Discount code"
                className="h-10 flex-1 rounded-md border border-surface-300 bg-white px-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-500 focus:ring-1 focus:ring-kingston-500"
              />
              <button className="h-10 rounded-md border border-surface-300 bg-surface-100 px-4 text-sm font-medium text-surface-500 transition-colors hover:bg-surface-200">
                Apply
              </button>
            </div>

            {/* Totals */}
            <div className="py-5 space-y-2 border-b border-surface-200 text-sm">
              <div className="flex justify-between text-surface-600">
                <span>Subtotal</span>
                <span>${utilityBill.amountDue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-surface-600">
                <span>Service fee</span>
                <span className="text-surface-500">$0.00</span>
              </div>
            </div>

            {/* Grand total */}
            <div className="flex items-center justify-between pt-5">
              <span className="text-base text-surface-600">Total</span>
              <div className="text-right">
                <span className="text-xs text-surface-400 mr-2">CAD</span>
                <span className="text-2xl font-semibold text-surface-900">${utilityBill.amountDue.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
