type User = {id: string, name: string, email: string};

const users: User[] = [];

export const createUser = (name: string, email: string): User => {
    const newUser = {id : `${Date.now()}`, name, email};
    users.push(newUser);
    return newUser;
}

export const findOne = (id:string): User | undefined => {
    return users.find(u => u.id === id);
}
