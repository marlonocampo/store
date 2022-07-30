import create from 'zustand';

const useStore = create((set) => ({
        dialog: false,
        openDialog: () => set({dialog: true}),
        closeDialog: () => set({dialog: false}),
    })
);

export default useStore;