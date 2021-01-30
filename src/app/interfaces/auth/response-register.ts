export interface  ResponseRegisterUser{
    user:User,
    token:string
}

interface User{
    "name":string,
    "lastname":string,
    "email":string,
    "avatar":string,
    "password":string,
    "updated_at":string,
    "created_at":string,
    "id":number
}