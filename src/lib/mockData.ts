import { Stock } from "./types";

export const initialStocks: Stock[] = [
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 150.25,
    previousPrice: 149.8,
    percentageChange: 0.3,
    volume: 1000000,
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    price: 2750.8,
    previousPrice: 2745.5,
    percentageChange: 0.19,
    volume: 500000,
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    price: 285.9,
    previousPrice: 283.75,
    percentageChange: 0.76,
    volume: 750000,
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    price: 3300.45,
    previousPrice: 3290.2,
    percentageChange: 0.31,
    volume: 600000,
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc.",
    price: 890.5,
    previousPrice: 885.3,
    percentageChange: 0.59,
    volume: 900000,
  },
];
//Demo Data for initial stocks

// Function to generate a mock price update for a given stock
export function generateMockPriceUpdate(stock: Stock): Stock {
  const priceChange = (Math.random() - 0.5) * (stock.price * 0.02);

  const newPrice = stock.price + priceChange;

  const percentageChange =
    ((newPrice - stock.previousPrice) / stock.previousPrice) * 100;

  return {
    ...stock,
    previousPrice: stock.price,
    price: Number(newPrice.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(2)),
    volume: stock.volume + Math.floor(Math.random() * 10000),
  };
}
