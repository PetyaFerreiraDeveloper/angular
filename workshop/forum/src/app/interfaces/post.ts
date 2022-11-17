import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
    created_at: string;
    updatedAt: string;
    likes: string[];
    text: string;
    userId: IUser;
    _id: string;
    _v: number;
    themeId: ITheme;
}