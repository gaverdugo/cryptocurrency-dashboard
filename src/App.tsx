import { VictoryChart, VictoryGroup, VictoryLine } from 'victory'
import './App.css'
import { Calculator } from './components/Calculator'

function App() {

  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          fill: 'white'
        }
      }
    }
  }

  return (
    <div className='bg-slate-700 min-h-screen flex'>
      <main className='mx-auto mt-16 max-w-3xl bg-slate-800 rounded-md px-24 py-6 h-auto shadow-md h-fit'>
        <h1 className='text-3xl font-bold text-slate-50'>
          CryptoCurrency Dashboard
        </h1>
        <section className='flex my-4'>
          <VictoryChart domain={{y:[0, 5500]}} theme={chartTheme}>
            <VictoryGroup colorScale={"qualitative"}>
              <VictoryLine data={[
                {x: 1, y: 3000},
                {x: 2, y: 4000},
                {x: 3, y: 2000},
                {x: 4, y: 4000},
                {x: 5, y: 5000},
                {x: 5.3, y: 5050}
              ]}></VictoryLine>
              <VictoryLine data={[
                {x: 1, y: 200},
                {x: 2, y: 500},
                {x: 3, y: 700},
                {x: 4, y: 600},
                {x: 5.1, y: 300},
                {x: 5.2, y: 340},
                {x: 5.5, y: 347},
              ]}></VictoryLine>
            </VictoryGroup>
          </VictoryChart>
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
