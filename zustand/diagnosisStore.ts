import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";

type Evidence = any[]

type DiagnosisStore = { 
 age: number
 sex: string
 text: string
 evidence: Evidence
 setAge: (age: number) => void
 setSex: (sex: string) => void
 setText: (text: string) => void
 setEvidence: (evidence: Evidence) => void
 addEvidence: (item: any) => void
}


export const useDiagnosisStore = create<DiagnosisStore>()(
    persist(
        (set) => ({
        age: 0,
        sex: '',
        text: '',
        evidence: [],
       
        setAge: (age) => set({ age }),
        setSex: (sex) => set({ sex }),
        setText: (text) => set({ text }),
        setEvidence: (evidence) => set({ evidence }),
        addEvidence: (item) => set((state) => ({ evidence: [...state.evidence, item] })),
       }), 
        {
              name: "Diagnosis Store",
              storage: createJSONStorage(() => localStorage),
            }
        )
    
)