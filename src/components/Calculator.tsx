export function Calculator() {
    return (
        <div className='bg-slate-900 px-5 py-6 rounded-md'>
            <p className='text-slate-50 font-bold'>Calculator</p>
            <div className='flex'>
              <input className='rounded-sm mr-2' type='number'/>
              <select className='rounded-sm px-1'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>
            <div className='flex mt-2'>
              <input className='rounded-sm mr-2' type='number'/>
              <select className='rounded-sm px-1'>
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
              </select>
            </div>
        </div>
    )
}