import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { LoginType, SignupType } from '@/schemas';


const client =  axios.create ({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const LoginUser = async ({ username, password }:LoginType) => {
    const URL = '/v1/user/login';
    try {
        const response = await client.post(URL, { username, password}) 
        const  { data } = response.data;
        return data
    } catch (e:any) {
        throw new Error(e.response.data.error.message)
    }

}

export const SignInUser = async ({ name, email, username, password }:SignupType) => {
    const URL = '/v1/user/register';
    try {
        const response = await client.post(URL, { name, email, username, password}) 
        const  { data } = response.data;
        setCookie('token', data.token)
        setCookie('user', JSON.stringify(data))
        return response.data.data
    } catch (e:any) {
        throw new Error(e.response.data.error.message)
    }

}

// export const GetProducts = async () => {
//     const URL = "/v1/products";
//     try {
//       const response = await client.get(URL);
//       const { data } = response.data;
//       return data;
//     } catch (e: any) {
//       throw new Error(e.response.data.error.message);
//     }
//   };