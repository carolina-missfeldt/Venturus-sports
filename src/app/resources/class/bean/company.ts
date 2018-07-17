import { Set } from '../../interfaces/set';

export class Company implements Set {
    public name: string;
    public catchPhrase: string;
    public bs: string;

    set(input: any) {
        Object.assign(this, input);
        return this;
    }
}


