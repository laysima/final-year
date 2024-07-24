import { NextResponse, NextRequest } from 'next/server';
import axios from "axios";

export async function GET(request: Request) {
    const client =  axios.create ({baseURL: process.env.NEXT_PUBLIC_API_BASE_URL})
    const URL = "/v1/products";
    const response = await client.get(URL);
    const { data } = response.data;
    return NextResponse.json(await data, {status:200})

    // /1/product?id=69ac6ea-7c3f-4e96-8184-f78b22c405d1
}

