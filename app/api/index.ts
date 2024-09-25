import axios from "axios";
import { setCookie } from "cookies-next";
import { LoginType, SignupType, ParseInitialRequestType, DiagnosisRequestType, CreateOrderType } from '@/schemas';


const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const LoginUser = async ({ email, password }: LoginType) => {
    const URL = '/v1/user/login';
    try {
        const response = await client.post(URL, { email, password })
        const { data } = response.data;
        setCookie('token', data.token)
        setCookie('user', JSON.stringify(data))

        return data
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }

}

export const SendOtp = async ({ email }: { email: string }) => {
    const URL = '/v1/password/reset/otp/send';
    try {
        const response = await client.post(URL, { email })
                
        return { data: response.data.data, success: response.data.success }
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }
}

export const VerifyOtp = async ({ email, code }: { email: string, code: string }) => {
    const URL = '/v1/password/reset/otp/verify';
    try {
        const response = await client.post(URL, { email, code })
        return { data: response.data.data, success: response.data.success }
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }
}

export const ResetPassword = async ({ email, newPassword }: { email: string, newPassword: string }) => {
    const URL = '/v1/password/reset';
    try {
        const response = await client.post(URL, { email, newPassword })
        return { data: response.data.data, success: response.data.success }    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }
}


export const SignInUser = async ({ name, email, password }: SignupType) => {
    const URL = '/v1/user/register';
    try {
        const response = await client.post(URL, { name, email, password })
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

export const orderHistory = async ({ customerEmail }: {customerEmail:string}) => {
    const URL = `/v1/orders/history?customerEmail=${customerEmail}`;

    try {
        const response = await client.get(URL);
        const { data } = response.data;
        
        return data
    } catch (e: any) {
        throw new Error(e.response.data.error.message)
    }
}

export const CreateOrder = async ({ customerEmail, products, totalCost }: CreateOrderType) => {
    const URL = '/v1/order/create';
    
    const payload = { products, customerEmail, totalCost: Number(totalCost) }

    console.log('CREATE PAYLOAD', payload)

    try {
        const response = await client.post(URL, payload);
        const { data } = response.data;

        console.log('RESPONSE FROM CREATE', data)
        
        return data
    } catch (e: any) {
        console.log('ERROR FROM CREATE', e.response.data)

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