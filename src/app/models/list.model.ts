import { Config } from '../config';

export interface IListItem {
    id: string;
}

export interface IList<T extends IListItem> {
    matches: T[];
    total: number;
}



export interface IListOptions {
    page?: number;
    size?: number;
    total?: number;
    hasMore?: boolean;
    ref?: string;

}


export class ListOptions {
    public static MapSearchListOptions(options: IListOptions): any {
        // map each to its name in db, watch out for arrays

        return {
            ref: options.ref,
            p: options.page || 1,
            s: options.size || Config.Basic.defaultSize
        };

    }

    public static MapSeoOptions(options: IListOptions): any {
        return {
            page: options.page || 1
            // add other options here
        };
    }


}

export class DataList<T extends IListItem>  {
    public mapper?: (dataitem: any) => T;



    public NewDataList(dataset: any): IList<T> {
        return {
            total: dataset.result.total,
            matches: dataset.result.items.map(this.mapper)
        };
    }
}
