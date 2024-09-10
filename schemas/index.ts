import {z} from 'zod';

const EvidenceArray = z.object({
  id: z.string(),
  choice_id: z.string(),
  source: z.optional(z.string())
})

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

export const ParseInitialRequestSchema = z.object({
    age: z.string({required_error:'Required'}),
    sex: z.string({required_error:'Required'}),
    text: z.string({required_error:'Required'}),
})

export const DiagnosisRequestSchema = z.object({
    age: z.string({required_error:'Required'}),
    sex: z.string({required_error:'Required'}),
    text: z.string({required_error:'Required'}),
    evidence: z.array(EvidenceArray)
})

export const ProductSchema = z.object({
category: z.string({required_error: 'Required'}),
  name: z.string({required_error:'Required'}),
  weight: z.string(),
  dosage: z.string(),
  expirationDate: z.string(),
  description: z.string().optional(),
  price: z.number({required_error:'Required'}),
  image: z.string({required_error: 'Required'})
})

export type ProductType = z.infer<typeof ProductSchema>
export type LoginType = z.infer<typeof LoginSchema>
export type SignupType = z.infer<typeof SignupSchema>
export type ParseInitialRequestType = z.infer<typeof ParseInitialRequestSchema>
export type DiagnosisRequestType = z.infer<typeof DiagnosisRequestSchema>
