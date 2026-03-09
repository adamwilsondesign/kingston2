import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('david.chen@example.com');
  const [password, setPassword] = useState('••••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-kingston-800 p-4">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-kingston-700/40" />
        <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-kingston-700/30" />
      </div>

      <div className="relative w-full max-w-md animate-fade-in-up">
        {/* Logo area */}
        <div className="mb-8 text-center">
          <img
            src="/kingston-logo.png"
            alt="City of Kingston"
            className="mx-auto h-20 w-auto"
          />
          <h1 className="mt-4 text-2xl font-semibold text-white">MyKingston</h1>
          <p className="mt-1 text-sm text-kingston-300">City Services Portal</p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-white/10 bg-white shadow-2xl">
          <div className="px-8 pt-8 pb-2">
            <h2 className="text-lg font-semibold text-surface-900">Sign in to your account</h2>
            <p className="mt-1 text-sm text-surface-500">
              Access your city services, bills, and account information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-8 pt-4">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-surface-700">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-lg border border-surface-200 bg-white px-3.5 text-sm text-surface-900 outline-none transition-all placeholder:text-surface-400 focus:border-kingston-400 focus:ring-2 focus:ring-kingston-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="block text-sm font-medium text-surface-700">
                    Password
                  </label>
                  <button type="button" className="text-xs font-medium text-kingston-500 hover:text-kingston-600">
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-lg border border-surface-200 bg-white px-3.5 text-sm text-surface-900 outline-none transition-all placeholder:text-surface-400 focus:border-kingston-400 focus:ring-2 focus:ring-kingston-100"
                />
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-kingston-500 text-sm font-semibold text-white shadow-sm transition-all hover:bg-kingston-600 hover:shadow-md active:scale-[0.98]"
              >
                Sign In
              </button>
            </div>

            {/* SSO divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-surface-400">or continue with</span>
              </div>
            </div>

            {/* SSO buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-surface-200 bg-white text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-surface-200 bg-white text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                Apple
              </button>
            </div>
          </form>
        </div>

        {/* Secure footer */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-kingston-400">
          <Lock className="h-3 w-3" />
          <span>Secure sign-in powered by MyKingston &middot; Auth0 SSO</span>
        </div>
      </div>
    </div>
  );
}
