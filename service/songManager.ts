import {IManager} from "./IManager";
import {Song} from "../model/song";
import {Album} from "../model/album";

export class SongManager implements IManager<Song> {
    listSong: Song[] = [];

    add(t: Song): void {
        this.listSong.push(t);
    }

    edit(id: number, name: string): void {
        let index = this.findIndexById(id);
        if (index === -1) {
            console.log('Can not find this Song!!!')
        } else if (this.listSong[index].name === name) {
            console.log('The name of the Song is already used, please choose another name!!!!')

        } else {
            this.listSong[index].name = name;
            console.log('Change Name Success!!!')
        }
    }

    findAll(): Song[] {
        return this.listSong;
    }

    findIndexById(id: number): number {

        for (let i = 0; i < this.listSong.length; i++) {
            if (id === this.listSong[i].id) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findIndexById(id);
        if (index === -1) {
            console.log('Can not find this Song!!!')
        } else {
            this.listSong.splice(index, 1);
        }
    }

    findSongByAlbum(album: Album) {
        let listSongInAlbum = [];
        for (let i = 0; i < this.listSong.length; i++) {
            if (album.id === this.listSong[i].album.id) {
                listSongInAlbum.push(this.listSong[i]);
            }
        }
        return listSongInAlbum;
    }

    findByName(name: string): Song[] {
        let listSongFindByName = this.listSong.filter((song) => song.name.toLocaleLowerCase().includes(name))

        return listSongFindByName;


    }
}
