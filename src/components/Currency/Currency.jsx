import {Input} from "../../ui/Input/Input.jsx";
import {Select} from "../../ui/Select/Select.jsx";
import cls from './Currency.module.css';
import {memo} from "react";

export const Currency = memo((props) => {
    const {
        currencyData,
        onChange,
        currency,
        onChangeValue,
        onChangCurrency,
        inputValue,
        text
    } = props;

    const onCurrencyChange = (cur) => {
        onChangCurrency(inputValue, cur);
    }

    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>{text}</h1>
            <div className={cls.currency}>
                <Input
                    placeholder={'Value'}
                    value={inputValue}
                    type={'number'}
                    onChange={onChangeValue}
                />
                <Select
                    value={currency}
                    onChange={onChange}
                    onCurrencyChange={onCurrencyChange}
                    options={currencyData}
                />
            </div>
        </div>
    );
});
