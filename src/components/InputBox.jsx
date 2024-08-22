import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false
}){

    // Required of this function is to remove "zero" from input eg:-> when input have no. 08987 it will change it into 8987.
    const removeZero = (value)=>{
        let currency = Number(value) === '0'?'':value;
        return onAmountChange(currency);
    }

    return(
        <div className="bg-slate-100 flex p-3 justify-between rounded-md mb-6">
            <div className="flex flex-col justify-between w-2/5 gap-1">
                <label htmlFor="" className="font-medium text-base">{label}
                </label>
                <input 
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e)=> onAmountChange && removeZero(e.target.value)} 
                disabled={amountDisabled}
                className='text-center w-full outline-none border border-solid border-slate-500 rounded-md text-md py-1 px-2 ' />
            </div>
            <div className="flex flex-col justify-between gap-1">
                <p className="font-medium text-base">Currency Type</p>
                <select 
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                className="outline-none w-full border border-solid border-slate-500 rounded-md text-md py-1 px-2 bg-slate-500 text-slate-50" >
                {currencyOptions.map((currency)=> (<option key={currency} value={currency} >{currency}</option> ))} ;
                </select>
            </div>
        </div>
    )
}

export default InputBox;