import { createContext, useContext } from 'react';

export interface AppState {
  billPaid: boolean;
}

export interface AppContextValue {
  state: AppState;
  payBill: () => void;
  reset: () => void;
}

export const AppContext = createContext<AppContextValue>({
  state: { billPaid: false },
  payBill: () => {},
  reset: () => {},
});

export const useAppState = () => useContext(AppContext);
