import { Investment } from "./investment.model";

export class User {
    id = "";
    firstname = "";
    lastname = "";
    email = "";
    admin = false;
    phone = "";
    created_at = "";
    gender = "";
    nationality = "";
    dob = "";
    wallet_address = "";
    address = "";
    verified = false;
    referred: Array<User> = [];
    investments: Array<Investment> = [];
    image = "";
    privateKey = "";
}
