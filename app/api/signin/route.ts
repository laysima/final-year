import { NextResponse } from "next/server";
import { LoginType } from "@/schemas";
import axios from "axios";

export async function GET(request: Request) {
    const client =  axios.create ({baseURL: process.env.NEXT_PUBLIC_API_BASE_URL })
    const URL = "/v1/user/login";
    const response = await client.get(URL,);
    const { data } = response.data;
    return NextResponse.json(await data, {status:200})
}

