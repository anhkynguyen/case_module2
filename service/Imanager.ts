export interface IManager<T> {
    add(t: T): void;

    edit(id: number, name: string): void;

    remove(id: number): void;

    findIndexById(id: number): number;

    findAll(): T[];
    findByName(name:string):T[]
}