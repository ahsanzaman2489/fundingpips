export interface Stock {
  composite_figi?: string | undefined;
  ticker: string;
  name: string;
  price: number;
  previousPrice: number;
  percentageChange: number;
  volume: number;
}
export interface StockHistory {
  "v": number,
  "vw": number,
  "o": number,
  "c": number,
  "h": number,
  "l": number,
  "t": number,
  "n": number
}

export interface ChartData {
  date: string,
  price: number,
}
