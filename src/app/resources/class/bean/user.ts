
import { Set } from '../../interfaces/set';
import { Address } from './address';
import { Company } from './company';
import { Post } from './post';
import { Photo } from './photo';
import { Album } from './album';

export class User implements Set {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: string;
    public website: string;
    public company: Company;
    public rideInGroup: string;
    public dayOfTheWeek: string;
    public posts: Array<Post> = [];
    public album: Array<Album> = [];

    set(input: any) {
        Object.assign(this, input);
        this.address = new Address().set(input.address);
        this.company = new Company().set(input.company);
        return this;
    }
}



