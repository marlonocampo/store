import create from 'zustand';

const useStore = create ((set)=>({
    openDialogActualizar: false,
    setOpenDialogActualizar: (open)=>set({open})
}))

export default useStore;