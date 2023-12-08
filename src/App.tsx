import './App.css'

import { useEffect } from 'react'
import { Calculator } from './components/Calculator'
import { Table } from './components/Table'
import { Graph } from './components/Graph'
import { useStore } from './store'
import { useInterval } from './hooks/useInterval'

import cryptoCompareLogo from './assets/Cryptocompare_logo.png'

function App() {

  const { rates, btcHistory, ethHistory, updateRates, addBtcHistoryEntry, addEthHistoryEntry } = useStore()

  const fetchNewData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,BTC`).then((res) => res.json()).then(data => {
      const currentTime = new Date()

      updateRates(data)
      addBtcHistoryEntry(currentTime, data)
      addEthHistoryEntry(currentTime, data)
    })
  }

  useEffect(() => {
    fetchNewData()
  }, [])

  useInterval(() => {
    fetchNewData()
  }, 10000) // 10 seconds

  return (
    <div className='bg-slate-700 min-h-screen flex'>
      <main className='mx-auto mt-16 max-w-3xl bg-slate-800 rounded-md px-24 py-6 h-auto shadow-md h-fit'>
        <h1 className='text-3xl font-bold text-slate-50'>
          CryptoCurrency Dashboard
        </h1>
        <section className='grid grid-cols-1 md:grid-cols-2 my-4'>
          <Graph />
          <Calculator />
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 my-4'>
          <p className='text-red-500 font-bold px-1'>1 BTC = {rates['BTC']['USD'] || 0}</p>
          <p className='text-green-500 font-bold px-1'>1 ETH = {rates['ETH']['USD'] || 0} USD</p>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2'>
          <Table columns={['Time', 'USD', 'EUR']} data={btcHistory}/>
          <Table columns={['Time', 'USD', 'EUR', 'BTC']} data={ethHistory}/>
        </section>
        <section className='flex mt-5 text-slate-400 text-sm justify-center items-center'>
          Data provided by <a href={import.meta.env.VITE_API_URL}><img className='h-16' src={cryptoCompareLogo} alt="Cryptocompare logo" /></a>
        </section>
      </main>
    </div>
  )
}

export default App
