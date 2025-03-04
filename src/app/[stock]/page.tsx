import {ChartContent} from "@/components/ChartContent";
import {notFound} from "next/navigation";
import {StockHistory} from "@/lib/types";

async function getTickerHistory(ticker: string) {
    const apiKey = process.env.API_KEY;
    const res = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2022-01-01/2025-01-01?apiKey=${apiKey}`,
        {cache: "force-cache"},
    );

    const data = await res.json();
    if (!data.results) notFound();
    return data;
}

export default async function StockPage({params}: { params: Promise<{ stock: string }> }) {


    const {stock} = await params;

    if (!stock) {
        notFound(); // Redirects to 404 if stock param is missing
    }


    const data = await getTickerHistory(stock);

    const tickerData =
        data.results?.map((item: StockHistory) => ({
            date: new Date(item.t).toLocaleDateString(), // Convert timestamp to date
            price: item.c, // Closing price
        })) || [];

    return <ChartContent data={tickerData} ticker={stock} type={"bar"}/>;
}
