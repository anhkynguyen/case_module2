import {Album} from "./album";

export class Song {
    private _id : number;
    private _name: string;
    private _singer :string;
    private _album :Album;

    constructor(id: number, name: string, singer: string, album: Album) {
        this._id = id;
        this._name = name;
        this._singer = singer;
        this._album = album;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get album(): Album {
        return this._album;
    }

    set album(value: Album) {
        this._album = value;
    }
}