import cls from './Header.module.css'
import {HeaderItem} from "./HeaderItem/HeaderItem.jsx";
import {getHeaderCurrList} from "./lib/getHeaderCurrList.js";

export const Header = ({currencies, isLoading}) => {
    const headerItems = getHeaderCurrList(currencies);

    return (
        <header className={cls.header}>
            {headerItems?.map((currency) => (
                <HeaderItem
                    key={currency.code}
                    isLoading={isLoading}
                    text={currency.code}
                    amount={currency.amount}
                />
            ))}
        </header>
    );
};
