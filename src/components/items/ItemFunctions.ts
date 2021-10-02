import { IDataItem } from "../../interfaces/iData";

const selectAutomatically = (items: IDataItem[]): IDataItem[] => {
    items.forEach(item => {

        let itemSelected = item.checked;

        if (item.children.length > 0)
            itemSelected = item.children.every(x => x.checked)

        item.checked = itemSelected;

        item.children = selectAutomatically(item.children);
        item.indeterminate = !itemSelected && item.children.some(x => x.indeterminate || x.checked)
    });

    return items
}

const selectItemsById = (items: IDataItem[], checked: boolean, id: string): IDataItem[] => {
    items.forEach(item => {
        const idFinded = item.id === id;

        item.checked = idFinded ? checked : item.checked;
        item.children = idFinded ? selectChildren(item.children, checked) : selectItemsById(item.children, checked, id);

    });

    return items
}

const selectChildren = (items: IDataItem[], checked: boolean): IDataItem[] => {
    if (!items.length)
        return [];

    return items.map(item => {

        return {
            id: item.id,
            level: item.level,
            name: item.name,
            checked: checked,
            children: selectChildren(item.children, checked),
            indeterminate: item.indeterminate
        };
    });
}

export const handle_select_items = (items: IDataItem[], checked: boolean, id: string, level: number): IDataItem[] => {
    let itemsSelected = selectItemsById(items, checked, id);

    for (let i = 0; i <= level; i++)
        itemsSelected = selectAutomatically(itemsSelected);

    return itemsSelected.slice()
}