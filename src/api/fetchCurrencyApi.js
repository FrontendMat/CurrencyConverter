export const API_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_8duyor6meggStSsOae7E5hggyHfzFdq1AWtSGDD8'

export const fetchCurrencyApi = () => {
    return fetch(API_URL)
        .then((res) => res.json())
        .then((json) => json.data)
        .catch(err => console.error(err));
}