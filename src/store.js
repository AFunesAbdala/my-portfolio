import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    ref: { current: null },
    setRef: (ref) => set(() => ({ ref }))
}))

export default useGlobalStore