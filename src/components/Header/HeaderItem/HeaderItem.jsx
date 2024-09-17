import cls from './HeaderItem.module.css';

export const HeaderItem = ({text, amount, isLoading}) => {

    if (isLoading) {
        return (
            <p className={cls.load}/>
        )
    }

    return (
        <p className={cls.item}>
            <span>{text}:</span> {amount?.toFixed(2)}
        </p>
    );
};