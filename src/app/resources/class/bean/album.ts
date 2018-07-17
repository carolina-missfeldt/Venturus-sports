import { Set } from '../../interfaces/set';

export class Album implements Set{
    public userId: number;
    public id: number;
    public title: string;

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}
