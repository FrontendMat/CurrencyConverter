import {memo} from "react";
import cls from './Input.module.css';

export const Input = memo((props) => {
    const {
        type,
        value,
        onChange,
        placeholder
    } = props;

    const onInputChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <input
            className={cls.input}
            type={type}
            value={value}
            onChange={onInputChange}
            placeholder={placeholder}
        />
    );
});