export type UserRequest = {
    name: string;
    phone: string;
    cpf: string;
    email: string;
    city: string;
    state: string;
}

export type UserUpdateRequest = {
    id: string;
    name: string;
    phone: string;
    email: string;
    city: string;
    state: string;
}