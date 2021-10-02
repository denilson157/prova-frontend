export interface IData {
    id: string,
    name: string,
    level: number,
    children: IData[]
}

export interface IDataItem {
    id: string,
    name: string,
    level: number,
    checked: boolean,
    indeterminate: boolean,
    children: IDataItem[]
}