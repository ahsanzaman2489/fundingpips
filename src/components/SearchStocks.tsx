"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import {useCallback, useRef, useState} from "react";
import { useStore } from "@/lib/store";
import { Stock } from "@/lib/types";

export function SearchStocks() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { stocks, updateStocks } = useStore();

  const delayDebounceFn = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.currentTarget.value;

      if(delayDebounceFn.current){
        clearTimeout(delayDebounceFn.current);
      }

      setSearch(searchTerm);

      delayDebounceFn.current = setTimeout(async () => {
        setLoading(true);
        const response = await fetch(`/api/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(searchTerm),
        });

        const data = await response.json();

        setLoading(false);
        if (data?.results && data?.results?.length) {
          setSearchResults(data.results);
        }
        setOpen(true);
        console.log(data);
      }, 1000);
    },
    [setSearch],
  );

  const handleSelectStock = (ticker: string, name: string) => {
    setOpen(false);
    setSearch("");
    setSearchResults([]);

    const isStock = stocks.find((stock) => stock.ticker === ticker);

    console.log(isStock);

    if (isStock) {
      alert("ticker already selected");
    } else {
      const newStock: Stock = {
        ticker,
        name,
        price: 150.25,
        previousPrice: 149.8,
        percentageChange: 0.3,
        volume: 2000000,
      };

      updateStocks([...stocks, newStock]);
    }
  };

  return (
    <>
      <div className="p-6 ">
        <div className="relative">
          <Input
            placeholder="Search stocks"
            value={search}
            onChange={handleSearch}
          />

          {loading && (
            <Loader
              className="absolute mr-3 -ml-1 size-5 animate-spin text-blue-700 top-[11px] right-0"
              width={20}
            />
          )}
        </div>

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div></div>
          </DropdownMenuTrigger>
          {searchResults.length > 0 ? (
            <DropdownMenuContent align="end" hideWhenDetached>
              {searchResults.map((item: Stock) => (
                <DropdownMenuItem
                  onClick={() => handleSelectStock(item.ticker, item.name)}
                  key={item?.ticker + item?.composite_figi}
                >
                  {item?.ticker}&nbsp;|&nbsp;
                  <div className="RightSlot"> {item?.name}</div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent align="end" hideWhenDetached>
              <DropdownMenuItem>no results</DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </>
  );
}
