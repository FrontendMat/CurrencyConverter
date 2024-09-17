import cls from './App.module.css'
import {Currency} from "./components/Currency/Currency.jsx";
import {Header} from "./components/Header/Header.jsx";
import {useEffect, useState} from "react";
import mockData from './api/mockData.json';
import {fetchCurrencyApi} from "./api/fetchCurrencyApi.js";
import {useCalculateCurrency} from "./hook/useCalculateCurrency.js";

function App() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setData(mockData)
        fetchCurrencyApi()
            .then(data => {
                if (data) setData(data)
            })    // резолвить помилку так як вичерпаний ліміт
            .finally(() => setIsLoading(false))
    }, []);

    const {
        fromCurrency,
        fromValue,
        changeFromCurrencyValue,
        toCurrency,
        toValue,
        setToCurrency,
        setFromCurrency,
        changeToCurrencyValue,
        changeFromCurrency,
        changeToCurrency
    } = useCalculateCurrency(data);

    return (
        <div className={cls.container}>
            <Header currencies={data}/>
            <div className={cls.title_wrapper}>
                <h1 className={cls.title}>Currency Converter</h1>
            </div>
            <div className={cls.wrapper}>
                <Currency
                    isLoading={isLoading}
                    text={'From:'}
                    inputValue={fromValue}
                    onChangeValue={changeFromCurrencyValue}
                    currency={fromCurrency}
                    currencyData={data}
                    onChange={setFromCurrency}
                    onChangCurrency={changeFromCurrency}
                />
                <Currency
                    isLoading={isLoading}
                    text={'To:'}
                    inputValue={toValue}
                    onChangeValue={changeToCurrencyValue}
                    currency={toCurrency}
                    currencyData={data}
                    onChange={setToCurrency}
                    onChangCurrency={changeToCurrency}
                />
            </div>
        </div>
    )
}

export default App;
