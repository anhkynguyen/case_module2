import {Album} from "../model/album";
import {IManager} from "./IManager";

export class AlbumManager implements IManager<Album> {
    listAlbum: Album[] = [];

    add(t: Album): void {
        this.listAlbum.push(t);
    }

    edit(id: number, name: string): void {
        let index = this.findIndexById(id);
        if (index === -1) {
            console.log('Can not find this Album !!!')
        } else if (this.listAlbum[index].name === name) {
            console.log('The name of the Album is already used, please choose another name!!!!')

        } else {
            this.listAlbum[index].name = name;
            console.log('Change Name Success!!')
        }
    }

    findAll(): Album[] {
        return this.listAlbum;
    }

    findIndexById(id: number): number {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (id === this.listAlbum[i].id) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findIndexById(id);
        if (index === -1) {
            console.log('Can not find this Album')
        } else {
            this.listAlbum.splice(index, 1);
        }
    }

    findAlbumByIndex(index: number): Album {
        return this.listAlbum[index];
    }

    findByName(name: string): Album[] {
        let listAlbumFindByName = this.listAlbum.filter((album)=>album.name.includes(name))

        return listAlbumFindByName;
    }
}