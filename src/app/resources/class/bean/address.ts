import { Set } from '../../interfaces/set';
import { Geo } from './geo';

export class Address implements Set {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;

    set(input: any) {
        Object.assign(this, input);
        this.geo = new Geo().set(input.geo);
        return this;
    }
}

