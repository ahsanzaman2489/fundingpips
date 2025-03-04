"use client";
import * as React from "react";
import { useEffect } from "react";
import { useStore } from "@/lib/store";
import { generateMockPriceUpdate } from "@/lib/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon, XIcon, EyeIcon } from "lucide-react";
import { SearchStocks } from "@/components/SearchStocks";
import Link from "next/link";

export default function WatchList() {
  const { stocks, updateStocks } = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map(generateMockPriceUpdate);
      updateStocks(updatedStocks);
    }, 5000);

    return () => clearInterval(interval);
  }, [stocks, updateStocks]);

  const handleDelete = (ticker: string) => {
    const updatedStocks = stocks.filter((stock) => stock.ticker !== ticker);
    updateStocks(updatedStocks);
  };

  return (
    <div className="rounded-lg border bg-card">
      <SearchStocks />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticker</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Change</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            {stocks.length > 1 && (
              <TableHead className="text-right">Action</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.name + stock.ticker}>
              <TableCell className="font-medium">{stock.ticker}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell className="text-right">
                ${stock.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={`flex items-center justify-end ${
                    stock.percentageChange >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stock.percentageChange >= 0 ? (
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(stock.percentageChange).toFixed(2)}%
                </span>
              </TableCell>
              <TableCell className="text-right">
                {stock.volume.toLocaleString()}
              </TableCell>
              <TableCell className="flex justify-end">
                <Link href="/[stock]" as={`/${stock.ticker}`}>
                  <EyeIcon className="mr-1 text-right text-green-400" />
                </Link>
                {stocks.length > 1 && (
                  <XIcon
                    className="mr-1 text-right text-yellow-400"
                    onClick={() => handleDelete(stock.ticker)}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
