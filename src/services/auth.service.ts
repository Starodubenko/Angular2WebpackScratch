
import {User} from "../model/user";
export class auth {

    public getUserByCredentials = (login: string, password: string): User => {
        //todo make query to back-end and map data to User format.
        return null;
    };

    private convertDataInUser = (data: any): User => {
        return new User(data.firstname, data.lastname, data.email);
    }


}
