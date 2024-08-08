import { NextResponse } from "next/server";
import axios from "axios";
import { setCookie } from 'cookies-next';

export async function GET() {
    const URL = "/v1/user/login";
    const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + URL);
    const { data } = response.data;

    setCookie('token', data.token)
    setCookie('user', JSON.stringify(data))

    return NextResponse.json(data, { status: 200 })
}

