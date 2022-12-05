import {IManager} from "./IManager";
import {MusicWeb} from "../model/musicWeb";

export class MusicWebManager implements IManager<MusicWeb> {
    listMusicWeb: MusicWeb[] = []
    add(t: MusicWeb): void {
        this.listMusicWeb.push(t);
    }

    edit(id: number, name:string): void {

    }

    findAll(): MusicWeb[] {
        return [];
    }

    findIndexById(id: number): number {
        return 0;
    }

    remove(id: number): void {
    }

    findByName(name: string): MusicWeb[] {
        return [];
    }

}