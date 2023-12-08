import { useStore } from "../store"

interface CalculatorResultProps {
    amount: number;
    from: string;
    to: string;
}

export function CalculatorResult({amount, from, to}: CalculatorResultProps) {
    const { rates } = useStore()
    return (
        <p className="text-slate-50 mr-1 p-1 col-span-3">
            {(amount / rates[from][to]).toLocaleString('fullwide', {maximumFractionDigits: 8})}
        </p>
    )
}