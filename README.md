# Stock Purchase Calculator (JavaScript)

This is a simple stock purchase calculator that helps you calculate your profit or loss based on the stock's buying price, quantity, and the current price.

## How to Use

1. Input the buying price of the stock (`buyingPrice`): The price at which you bought the stock.
2. Input the quantity of the stock (`quantity`): The number of shares you purchased.
3. Input the current price of the stock (`currentPrice`): The current market price of the stock.

```javascript
function calculateProfitLoss(buyingPrice, quantity, currentPrice) {
    // Calculate the total cost and total value of the stocks
    const totalCost = buyingPrice * quantity;
    const totalValue = currentPrice * quantity;

    // Calculate the profit/loss and profit/loss percentage
    if (totalValue > totalCost) {
        const profitAmount = totalValue - totalCost;
        const profitPercentage = (profitAmount / totalCost) * 100;
        return `Congratulations! You have made a profit.\nProfit Amount: $${profitAmount.toFixed(2)}\nProfit Percentage: ${profitPercentage.toFixed(1)}%`;
    } else if (totalValue < totalCost) {
        const lossAmount = totalCost - totalValue;
        const lossPercentage = (lossAmount / totalCost) * 100;
        return `Oops! You have incurred a loss.\nLoss Amount: $${lossAmount.toFixed(2)}\nLoss Percentage: ${lossPercentage.toFixed(1)}%`;
    } else {
        return "No profit, no loss. You broke even!";
    }
}
```

## Example
Suppose you bought 10 shares of a stock at $50 each, and the current price is $60.

Buying Price (buyingPrice): $50
Quantity (quantity): 10
Current Price (currentPrice): $60

```javascript
const buyingPrice = 50;
const quantity = 10;
const currentPrice = 60;

const result = calculateProfitLoss(buyingPrice, quantity, currentPrice);
console.log(result);
```

# Disclaimer
This calculator is for educational and informational purposes only. It does not provide any financial advice or guarantee any specific financial outcomes. Always do your research and consult with a qualified financial advisor before making any investment decisions.

Please be aware that investing in stocks involves risks, and past performance is not indicative of future results. The calculator's results are based on the provided inputs and market conditions at the time of calculation, and actual investment outcomes may vary.
