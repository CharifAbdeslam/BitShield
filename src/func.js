
function convertData(data) {
	var keys = ["date", "open", "close", "high", "low", "volume"],
		i = 0,
		k = 0,
		obj = null,
		output = [];
	for (i = 0; i < data.length; i++) {
		obj = {};
		obj[keys[0]] = new Date(data[i][0]);
		for (k = 1; k < keys.length; k++) {
			obj[keys[k]] = data[i][k];
		}
		output.push(obj);
	}
	return output;
}
export function _getTicker(ticker){
  const promiseTicker = fetch("https://api.bitfinex.com/v2/ticker/"+ticker)
       .then(response => response.json())
       return promiseTicker
}
export function getData(ticker) {
	const promiseData = fetch("https://api.bitfinex.com/v2/candles/trade:5m:"+ticker+"/hist")
		.then(response => response.json())
		.then(data => convertData(data).reverse())
	return promiseData;
}
export function _getTrade(ticker){
  const promiseTrade = fetch("https://api.bitfinex.com/v2/trades/"+ticker+"/hist")
         .then(response =>response.json())
         return promiseTrade;
}
