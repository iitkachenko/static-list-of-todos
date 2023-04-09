export interface ITodo {
    user: IUser | null;
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}