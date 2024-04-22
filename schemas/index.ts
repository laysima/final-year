import {z} from 'zod';

export const LoginSchema = z.object({
    username: z.string({required_error:'Required'}),
    password: z.string({required_error:'Required'}),
})


export const SignupSchema = z.object({
    name: z.string({required_error:'Required'}),
    email: z.string({required_error:'Required'}).email(),
    username: z.string({required_error:'Required'}),
    password: z.string({required_error:'Required'}),
})

export type LoginType = z.infer<typeof LoginSchema>
export type SignupType = z.infer<typeof SignupSchema>