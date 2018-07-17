import { Set } from '../../interfaces/set';

export class Post implements Set{
    public userId: number;
    public id: number;
    public title: string;
    public body: string;

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}
