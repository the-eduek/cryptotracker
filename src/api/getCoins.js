const getCoins = async () => {
    try {
        let coinData = [];

        const uri = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=40&tsym=NGN";

        const request = await fetch(uri); 
        if (!request.ok) {
            throw Error("Oops! Error fetching data.") 
        }

        const response = await request.json();
        response.Data.forEach(item => {
            const coin = {};
            coin.id = item.CoinInfo.Id;
            coin.name = item.CoinInfo.FullName;
            coin.symbol = item.CoinInfo.Name;
            const price = item.DISPLAY.NGN.PRICE
            coin.price = '₦' + price.slice(3);
            coin.percentage = item.RAW.NGN.CHANGEPCT24HOUR;
            coin.img = 'https://www.cryptocompare.com' + item.CoinInfo.ImageUrl;
            coin.isFav = false;
            coinData.push(coin)
        });
        
        return coinData
    } catch (error) {
        console.log(error.message)
    }
}

export default getCoins;