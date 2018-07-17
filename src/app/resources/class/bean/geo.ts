import { Set } from '../../interfaces/set';

export class Geo implements Set {
    public lat: string;
    public lng: string;

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}
