import './App.css'

import { useEffect } from 'react'
import { Calculator } from './components/Calculator'
import { Table } from './components/Table'
import { Graph } from './components/Graph'
import { useMatrix } from './hooks/useMatrix'

function App() {

  const btcMatrix = useMatrix([{time: 'sup', usd: 'oop', eur: 'eep'}], 3, 5)
  const ethMatrix = useMatrix([], 4, 5)

  useEffect(() => {
    console.log('btcMatrix', btcMatrix)
  }, [])

  return (
    <div className='bg-slate-700 min-h-screen flex'>
      <main className='mx-auto mt-16 max-w-3xl bg-slate-800 rounded-md px-24 py-6 h-auto shadow-md h-fit'>
        <h1 className='text-3xl font-bold text-slate-50'>
          CryptoCurrency Dashboard
        </h1>
        <section className='flex my-4'>
          <Graph />
          <Calculator />
        </section>
        <section className='flex justify-around my-4'>
          <p className='text-slate-50 font-bold'>1 BTC = 3492.93</p>
          <p className='text-slate-50 font-bold'>1 ETH = 392.93 USD</p>
        </section>
        <section className='flex justify-around'>
          <Table columns={['Time', 'USD', 'EUR']} data={btcMatrix}/>
          <Table columns={['Time', 'USD', 'EUR', 'BTC']} data={ethMatrix}/>
        </section>
      </main>
    </div>
  )
}

export default App
