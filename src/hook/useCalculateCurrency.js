import {useEffect, useState} from "react";

export function useCalculateCurrency(data) {

    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);

    const newData = Object.values(data);

    const changeFromCurrencyValue = (value) => {
        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency)
        const toCurrencyData = newData.find(currency => currency.code === toCurrency)

        const result = (value / fromCurrencyData.value) * toCurrencyData.value;

        setToValue(result.toFixed(2));
        setFromValue(value);
    }

    const changeToCurrencyValue = (value) => {
        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency)
        const toCurrencyData = newData.find(currency => currency.code === toCurrency)

        const result = (fromCurrencyData.value / toCurrencyData.value) * value;

        setToValue(value);
        setFromValue(result.toFixed(2));
    }

    const changeToCurrency = (value, cur) => {
        const fromCurrencyData = newData.find(currency => currency.code === cur)
        const toCurrencyData = newData.find(currency => currency.code === toCurrency)

        const result = (fromCurrencyData.value / toCurrencyData.value) * value;

        setToValue(result.toFixed(2));
        setFromValue(fromValue);
    }

    const changeFromCurrency = (value, cur) => {
        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency)
        const toCurrencyData = newData.find(currency => currency.code === cur)

        const result = (value / fromCurrencyData.value) * toCurrencyData.value;

        setToValue(toValue);
        setFromValue(result.toFixed(2));
    }

    return {
        fromCurrency,
        toCurrency,
        fromValue,
        toValue,
        setFromCurrency,
        setToCurrency,
        changeFromCurrencyValue,
        changeToCurrencyValue,
        changeToCurrency,
        changeFromCurrency
    }
}