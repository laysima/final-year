import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id  
    const client =  axios.create ({baseURL: process.env.NEXT_PUBLIC_API_BASE_URL})
    const URL = `/v1/product?id=${id}`;
    const response = await client.get(URL);
    const { data } = response.data;
    return NextResponse.json(await data, {status:200})
}

// const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL })

// export async function GET(request: NextRequest) {

//     const params = request.nextUrl.searchParams
//     const id = params.get('id')

//     const URL = `/v1/product?id=${id}`

//     const res = await client.get(URL)
//     const { data } = res.data

//     console.log('data:', data)

//     return NextResponse.json({ data }, { status: 200 })
// }

