const getRates = async () => {
    try {
        const uri = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SOL,DOGE,BNB,ADA,SHIB&tsyms=USD,EUR,NGN,GBP";

        const request = await fetch(uri); 
        if (!request.ok) {
            throw Error("Oops! Error fetching data.") 
        }

        const response = await request.json();
        return response
    } catch (error) {
        const errMsg = error.message;
        return errMsg
    }
}

export default getRates;