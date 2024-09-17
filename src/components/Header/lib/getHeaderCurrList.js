
export function getHeaderCurrList(currencies) {
    return [
        { code: 'USD', amount: currencies.UAH?.value },
        { code: 'EUR', amount: currencies.UAH?.value / currencies.EUR?.value }
        // можна лгко додати інші значення
    ]
}