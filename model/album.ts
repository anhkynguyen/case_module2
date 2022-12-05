import {MusicWeb} from "./musicWeb";

export class Album {
    private _id: number;
    private _type: string;
    private _name: string;
    private _musicWeb: MusicWeb;

    constructor(id: number, type: string, name: string, musicWeb: MusicWeb) {
        this._id = id;
        this._type = type;
        this._name = name;
        this._musicWeb = musicWeb;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get musicWeb(): MusicWeb {
        return this._musicWeb;
    }

    set musicWeb(value: MusicWeb) {
        this._musicWeb = value;
    }
}