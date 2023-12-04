import { create } from "zustand";

interface State {
    rates: Object;
    history: Object[];
    maxHistoryLength: number;
    updateRates: (newRates: Object) => void;
    addHistoryEntry: (newEntry: Object) => void;
    updateMaxHistoryLength: (historyLength: number) => void;
}

export const useStore = create<State>()((set) => {
    return {
        rates: {
            btc: {
                usd: 0,
                eur: 0
            },
            eth: {
                usd: 0,
                eur: 0,
                btc: 0
            }
        },
        history: [],
        maxHistoryLength: 10,
        updateRates: (newRates: Object) => set({rates: newRates}),
        addHistoryEntry: (newEntry: Object) => set((state) => ({ history: [newEntry, ...state.history].slice(state.maxHistoryLength) })),
        updateMaxHistoryLength: (historyLength: number) => set({maxHistoryLength: historyLength})
    }
})