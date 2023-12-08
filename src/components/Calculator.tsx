import React, { useState } from "react"
import { CalculatorResult } from "./CalculatorResult"

export function Calculator() {

  const [toCurrency, setToCurrency] = useState('USD')
  const [fromCurrency, setFromCurrency] = useState('BTC')
  const [amount, setAmount] = useState(0)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value) {
      setAmount(Number(e.target.value))
    }
  }

    return (
        <div className='bg-slate-900 px-5 py-6 rounded-md flex flex-col'>
            <p className='text-slate-50 font-bold mt-4'>Calculator</p>
            <div className='grid grid-cols-4'>
              <input value={amount} onChange={(e) => handleAmountChange(e)} className='rounded-sm mr-1 bg-slate-700 text-slate-50 border border-slate-600 p-1 col-span-3' type='number'/>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='rounded-sm bg-slate-800 text-slate-50 border border-slate-700 p-1'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>
            <div className='grid grid-cols-4 mt-3'>
              <CalculatorResult amount={amount} from={fromCurrency} to={toCurrency}/>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='rounded-sm bg-slate-800 text-slate-50 border border-slate-700 p-1'>
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
              </select>
            </div>
        </div>
    )
}