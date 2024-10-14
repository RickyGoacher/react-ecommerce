interface UseStorageInterface {
    sku: string;
    quantity: number;
    name: string;
    image: string;
}

export function useStorage() {
    function handleSettingStorage(basketObject:Array<UseStorageInterface> | any) {
        typeof window !== 'undefined' && localStorage.setItem('basket', JSON.stringify(basketObject));
    }

    function handleGettingStorage(itemName: string | any):Array<UseStorageInterface> | any {
        return (typeof window !== 'undefined') && localStorage.getItem(itemName);
    }

    return [handleGettingStorage, handleSettingStorage];
}

export function useAddressStorage() {
    function handleSettingStorage(basketObject:any) {
        (typeof window !== 'undefined') && localStorage.setItem('address', JSON.stringify(basketObject));
    }

    function handleGettingStorage(itemName: string | any):Array<UseStorageInterface> | any {
        return (typeof window !== 'undefined') && localStorage.getItem(itemName);
    }

    return [handleGettingStorage, handleSettingStorage];
}