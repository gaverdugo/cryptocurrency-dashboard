// Defintion of types used in various places

export interface BtcRates {
    [USD: string]: number;
    [EUR:string]: number;
}

export interface EthRates {
    [USD: string]: number;
    [EUR:string]: number;
    [BTC:string]: number;
}

export interface Rates {
    [BTC: string]: BtcRates;
    [ETH: string]: EthRates;
}

export interface BtcHistory {
    time: Date;
    usd: number;
    eur: number;
}

export interface EthHistory {
    time: Date;
    usd: number;
    eur: number;
    btc: number;
}