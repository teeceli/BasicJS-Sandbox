 var getMaxProfit = function(stockPricesYesterday) {

    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
        return "Need more than two values to calculate profit";
    }

   
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

   
    for (var i=1; i < stockPricesYesterday.length; i++) {
        var currentPrice = stockPricesYesterday[i];

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }

        // update minPrice so it's always
        // the lowest price we've seen so far
        if (currentPrice < minPrice) {
        	minPrice = currentPrice;
        }
    }

    return maxProfit;
}

//var stockPricesYesterday = [15, 7, 5, 2, 1, 0];
var stockPricesYesterday = [10, 7, 5, 8, 11, 1];
//var stockPricesYesterday = [10];

console.log(getMaxProfit(stockPricesYesterday));
