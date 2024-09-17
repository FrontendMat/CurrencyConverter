import {useEffect, useState} from "react";

export function useCalculateCurrency(data) {

    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);

    const newData = Object.values(data);

    const changeFromCurrencyValue = (value) => {
        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency)
        const toCurrencyData = newData.find(currency => currency.code === toCurrency)

        const result = (value / fromCurrencyData.value) * toCurrencyData.value;

        setToValue(result);
        setFromValue(value);
    }

    const changeToCurrencyValue = (value) => {
        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency)
        const toCurrencyData = newData.find(currency => currency.code === toCurrency)

        const result = (fromCurrencyData.value / toCurrencyData.value) * value;

        setToValue(value);
        setFromValue(result);
    }

    const changeFromCurrency = (value, cur) => {
        if (!cur) cur = fromCurrency;

        const fromCurrencyData = newData.find(currency => currency.code === cur);
        const toCurrencyData = newData.find(currency => currency.code === toCurrency);

        const result = (value / fromCurrencyData.value) * toCurrencyData.value;

        setToValue(result);
        setFromValue(fromValue);
    }

    const changeToCurrency = (value, cur) => {
        if (!cur) cur = toCurrency;

        const fromCurrencyData = newData.find(currency => currency.code === fromCurrency);
        const toCurrencyData = newData.find(currency => currency.code === cur);

        const result = (fromValue / fromCurrencyData.value) * toCurrencyData.value;

        setToValue(result);
        setFromValue(fromValue);
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