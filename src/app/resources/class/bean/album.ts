import { Set } from '../../interfaces/set';
import { Photo } from './photo';

export class Album implements Set {
    public userId: number;
    public id: number;
    public title: string;
    public photos: Array<Photo> = [];

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}
