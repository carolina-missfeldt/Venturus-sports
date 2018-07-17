import { Set } from '../../interfaces/set';

export class Photo implements Set {
    public albumId: number;
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}

