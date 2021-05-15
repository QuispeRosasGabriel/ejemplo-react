export const useLocalStorage = () => {

    const setItemFromLocalStorage = (key, value) => localStorage.setItem(key, value);

    const getItemFromLocalStorage = (key) => localStorage.getItem(key);

    return {
        setItemFromLocalStorage,
        getItemFromLocalStorage
    }
}