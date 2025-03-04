import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.API_KEY;
        const searchTerm = await request.json();
        const response = await fetch(
            `https://api.polygon.io/v3/reference/tickers?active=true&limit=10&apiKey=${apiKey}&search=${searchTerm}`,
        );

        const searchData = await response.json();
        return NextResponse.json(searchData);
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error ? error.message : "Something went wrong",
            },
            {status: 400},
        );
    }
}
