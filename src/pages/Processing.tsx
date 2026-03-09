import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAppState } from '../store';

export default function Processing() {
  const navigate = useNavigate();
  const { payBill } = useAppState();

  useEffect(() => {
    const timer = setTimeout(() => {
      payBill();
      navigate('/confirmation', { replace: true });
    }, 2200);
    return () => clearTimeout(timer);
  }, [navigate, payBill]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center animate-fade-in-up">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-kingston-50">
          <Loader2 className="h-8 w-8 text-kingston-500 animate-spin-slow" />
        </div>
        <h1 className="text-lg font-semibold text-surface-900">Processing your payment</h1>
        <p className="mt-2 text-sm text-surface-500">
          Please wait while we securely process your transaction...
        </p>
        <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-surface-200">
          <div
            className="h-full rounded-full bg-kingston-500"
            style={{
              animation: 'progress-fill 2s ease-in-out',
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
