import {useEffect,useState} from 'react'


function useCurrencyInfo(currency){
    const[Data,setData]= useState({})//we define a object inside usestate because if we dont call any url then so in this case it will not crash
    // u need to give the currency info .i want to call API when you load thid hook or call this hook and currency is not optional oyu need to give the information of currency
    useEffect(() => {//we are using useeffect hook because we want to call the API and we dont need to define a function for this
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())//convert url format into json format because data look like in json format but actually data is in the string format
        .then(()=>setData(Data[currency]))//pass the currency in which you want to convert the money and .then give the call back
        console.log(Data)//tell me what inside the data
    },[currency])
    console.log(Data)
    return Data;
}
 
export default useCurrencyInfo;//if we retun this method then we already take the access of the data ,custom hooks is completed