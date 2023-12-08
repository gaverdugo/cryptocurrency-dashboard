import { create } from "zustand";
import { Rates } from "../types/types";

interface State {
    rates: Rates;
    btcHistory: Object[];
    ethHistory: Object[];
    maxHistoryLength: number;
    updateRates: (newRates: Rates) => void;
    addBtcHistoryEntry: (time: Date, newEntry: Rates) => void;
    addEthHistoryEntry: (time: Date, newEntry: Rates) => void;
    updateMaxHistoryLength: (historyLength: number) => void;
}

export const useStore = create<State>()((set) => {
    return {
        rates: {
            BTC: {
                USD: 0,
                EUR: 0
            },
            ETH: {
                USD: 0,
                EUR: 0,
                BTC: 0
            }
        },
        btcHistory: [],
        ethHistory: [],
        maxHistoryLength: 10,
        updateRates: (newRates: Rates) => set({rates: newRates}),
        addBtcHistoryEntry: (time: Date, newEntry: Rates) => set((state) => {
            return { btcHistory: [{time: time, usd: newEntry['BTC']['USD'], eur: newEntry['BTC']['EUR']}, ...state.btcHistory].slice(0, state.maxHistoryLength) }
        }),
        addEthHistoryEntry: (time: Date, newEntry: Rates) => set((state) => {
            return { ethHistory: [{time: time, usd: newEntry['ETH']['USD'], eur: newEntry['ETH']['EUR'], btc: newEntry['ETH']['BTC']}, ...state.ethHistory].slice(0, state.maxHistoryLength) }
        }),
        updateMaxHistoryLength: (historyLength: number) => set({maxHistoryLength: historyLength})
    }
})