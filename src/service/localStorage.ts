export const saveItem = (itemName: string, item: any) => {
    localStorage.setItem(itemName, JSON.stringify(item));
}


export const getItem = (itemName: string) => {
    const item = localStorage.getItem(itemName);
    
    if (item)
        return JSON.parse(item)

    return null;
}