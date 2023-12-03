import './App.css'
import { Calculator } from './components/Calculator'
import { useEffect } from 'react'

function App() {

  useEffect(() => {

  }, [])

  return (
    <div className='bg-slate-700 min-h-screen flex'>
      <main className='mx-auto mt-16 max-w-3xl bg-slate-800 rounded-md px-24 py-6 h-auto shadow-md h-fit'>
        <h1 className='text-3xl font-bold text-slate-50'>
          CryptoCurrency Dashboard
        </h1>
        <section className='flex my-4'>

          <Calculator />
        </section>
        <section className='flex justify-around my-4'>
          <p className='text-slate-50 font-bold'>1 BTC = 3492.93</p>
          <p className='text-slate-50 font-bold'>1 ETH = 392.93 USD</p>
        </section>
        <section className='flex justify-around'>
          <table>
            <tr>
              <th>Time</th>
              <th>USD</th>
              <th>EUR</th>
              <th>BTC</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>
        </section>
      </main>
    </div>
  )
}

export default App
