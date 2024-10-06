interface UseStorageInterface {
    sku: string;
    quantity: number;
    name: string;
    image: string;
}

export function useStorage() {
    function handleSettingStorage(basketObject:Array<UseStorageInterface> | any) {
        localStorage.setItem('basket', JSON.stringify(basketObject));
    }

    function handleGettingStorage(itemName: string | any):Array<UseStorageInterface> | any {
        return localStorage.getItem(itemName);
    }

    return [handleGettingStorage, handleSettingStorage];
}