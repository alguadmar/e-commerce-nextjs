//Importa zustand para manejar el estado global
import {create} from 'zustand'

//Define los tipos para nuestro estado
interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

//Crea el estado como un hook
export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))
