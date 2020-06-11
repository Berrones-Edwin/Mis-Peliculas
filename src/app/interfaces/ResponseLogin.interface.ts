export interface responseLogin {

    "token": string;
    "user": userResponseLogin[];

}


export interface userResponseLogin {
    "id": number;
    "name": string;
    "lastname": string;
    "email": string;
    "avatar": string;
}