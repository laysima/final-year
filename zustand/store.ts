import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let cartStore: any = (set: any) => ({
    cart: [],
    orderNo: '',
    cart_grand_total: () => set((state: any) => ({

    })),

    add_to_cart: (payload: any) => set((state: any) => {
        const itemPresent = state.cart.find((item: any) => item.identifier === payload.identifier);
        if (!itemPresent) { return { ...state, cart: [...state.cart, payload] }; }
        const updatedItem = state.cart.map((item: any) => item.identifier === payload.identifier ? payload : item);
        return { ...state, cart: updatedItem };
    }),

    remove_from_cart: (identifier: any) => set((state: any) => {
        const newItem = state.cart.filter((trade: any) => trade.identifier !== identifier);
        return { ...state, cart: newItem };
    }),

    empty_cart: () => set(() => ({
        cart: []
    })),

    set_cart_grand_total: (payload: any) => set((state: any) => ({
        cart_grand_total: payload
    })),

    get_cart_grand_total: () => set((state: any) => ({
        cart_grand_total: state.cart.length
    })),

})

cartStore = devtools(cartStore);
cartStore = persist(cartStore, { name: 'g4m_cart' });

export const useCartStore = create(cartStore)