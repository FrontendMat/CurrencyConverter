import cls from './Select.module.css'
import {memo} from "react";

export const Select = (props) => {
    const {
        options,
        onChange,
        value,
        onCurrencyChange
    } = props;
    const data = Object.values(options);

    const onOptionClick = (e) => {
        onChange(e.target.value);
        onCurrencyChange(e.target.value)
    }

    return (
        <select
            value={value}
            className={cls.select}
            onChange={onOptionClick}
        >
            <option
                value={'Currency'}
                disabled
            >
                Select Currency
            </option>
            {data?.map(option => (
                <option
                    key={option.code}
                    value={option.code}
                >
                    {option.code}
                </option>
            ))}
        </select>
    );
};