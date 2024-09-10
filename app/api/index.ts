import axios from "axios";
import { setCookie } from "cookies-next";
import { LoginType, SignupType, ParseInitialRequestType, DiagnosisRequestType } from '@/schemas';


const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const LoginUser = async ({ username, password }: LoginType) => {
    const URL = '/v1/user/login';
    try {
        const response = await client.post(URL, { username, password })
        const { data } = response.data;
        setCookie('token', data.token)
        setCookie('user', JSON.stringify(data))

        return data
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }

}

export const SignInUser = async ({ name, email, username, password }: SignupType) => {
    const URL = '/v1/user/register';
    try {
        const response = await client.post(URL, { name, email, username, password })
        const { data } = response.data;
        setCookie('token', data.token)
        setCookie('user', JSON.stringify(data))
        return response.data.data
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }

}

export const ParseInitialRequest = async ({ age, sex, text }: ParseInitialRequestType) => {
    const URL = '/v1/parse';
    const payload = {
        age: { value: parseInt(age) },
        sex,
        text,
      };

    try {
        const response = await client.post(URL, payload);
        const { data } = response.data;

        console.log('INFERMEDICA BABYYY', data);
        
        return data
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }
}

export const GetDiagnosis = async ({ age, sex, text, evidence }: DiagnosisRequestType) => {
    const URL = '/v1/diagnosis';
    const payload = {
        age: { value: parseInt(age) },
        sex,
        text,
        evidence
      };

    try {
        const response = await client.post(URL, payload);
        const { data } = response.data;

        console.log('INFERMEDICA BABYYY', data);
        
        return data
    } catch (e: any) {
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