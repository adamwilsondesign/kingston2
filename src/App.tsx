import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shell from './components/Shell';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BillDetails from './pages/BillDetails';
import Checkout from './pages/Checkout';
import Processing from './pages/Processing';
import Confirmation from './pages/Confirmation';
import EmailReceipt from './pages/EmailReceipt';
import History from './pages/History';
import { AppContext } from './store';
import type { AppState } from './store';

export default function App() {
  const [state, setState] = useState<AppState>({ billPaid: false });

  const payBill = useCallback(() => {
    setState({ billPaid: true });
  }, []);

  const reset = useCallback(() => {
    setState({ billPaid: false });
  }, []);

  return (
    <AppContext value={{ state, payBill, reset }}>
      <BrowserRouter>
        <Routes>
          {/* Login — landing page, outside shell */}
          <Route index element={<Login />} />
          {/* Checkout — Shopify-style full page, no portal shell */}
          <Route path="checkout" element={<Checkout />} />
          {/* Portal shell routes */}
          <Route element={<Shell />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bill/utility" element={<BillDetails />} />
            <Route path="processing" element={<Processing />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="receipt" element={<EmailReceipt />} />
            <Route path="history" element={<History />} />
            {/* Placeholder routes for nav items */}
            <Route path="services" element={<Placeholder title="Services" />} />
            <Route path="payments" element={<Placeholder title="My Payments" />} />
            <Route path="profile" element={<Placeholder title="Profile" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-surface-900">{title}</h1>
        <p className="mt-1 text-sm text-surface-400">Coming soon</p>
      </div>
    </div>
  );
}
