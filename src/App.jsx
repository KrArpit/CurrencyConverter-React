import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); 

  function swap(){
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert =()=>{
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div 
    className='bg-[url(https://images.pexels.com/photos/20232209/pexels-photo-20232209/free-photo-of-currencies-and-finance-stock-exchange-calculator-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] w-full h-screen bg-cover bg-center flex items-center justify-center overflow-y-hidden'
    >
      <div className='bg-[rgba(255,255,255,.5)] shadow-2xl w-11/12 sm:w-2/5 rounded-lg relative flex flex-col p-5 '>
      <div className=' w-full '>
        <form onSubmit={(e)=>{e.preventDefault()}} >
          <div> 
            <InputBox 
                label="From"
                amount={amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency)=>(setFrom(currency))}
                onAmountChange={(amount)=>(setAmount(amount))}
                selectCurrency = {from}
            /> </div>
          <div>
            <button 
             onClick={swap}    
              className='bg-blue-500 px-3 py-1 text-lg absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-3 text-slate-50 border-2 border-white rounded-lg'>swap</button>
          </div>
          <div> <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOptions = {options}
                onCurrencyChange = {(currency)=>(setTo(currency))}
                selectCurrency = {to}
                amountDisabled
            /> </div>
        </form>
      </div>
        <button 
        onClick={convert}
        className='bg-blue-500 text-xl py-2 rounded-md text-white font-semibold'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default App
