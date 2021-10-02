import { IData, IDataItem } from '../interfaces/iData';
import file from '../mocks/data.json'
import * as LocalStorage from './localStorage'

const getArrayProps = (obj: any) => Object.values(obj) as IData[];
const StorageName = "itemsList";

export const get_items = (): IDataItem[] => {

    const saved_item = LocalStorage.getItem(StorageName)
    if (saved_item) {

        return saved_item as IDataItem[];

    } else {
        const data = [...getArrayProps(file)];

        const items = format_initial_items(data);

        return items;
    }
}



export const save_items = (items: IDataItem[]) => {

    LocalStorage.saveItem(StorageName, items);

}

const format_initial_items = (items: IData[]) => {
    const itemsFormated: IDataItem[] = [];

    if (!items.length)
        return itemsFormated


    items.forEach(item => {
        const children = getArrayProps(item.children)

        itemsFormated.push({
            id: item.id,
            level: item.level,
            name: item.name,
            checked: false,
            children: format_initial_items(children),
            indeterminate: false
        });
    });

    return itemsFormated;
}