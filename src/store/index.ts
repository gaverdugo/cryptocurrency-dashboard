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
            btc: 0,
            eth: 0,
            eur: 0
        },
        history: [],
        maxHistoryLength: 10,
        updateRates: (newRates: Object) => set({rates: newRates}),
        addHistoryEntry: (newEntry: Object) => set((state) => ({ history: [newEntry, ...state.history].slice(state.maxHistoryLength) })),
        updateMaxHistoryLength: (historyLength: number) => set({maxHistoryLength: historyLength})
    }
})