import { Game } from "../game/game.model";
import { User } from "../user/user.model";

export interface Session {
    idSession: string;
    score: number;
    idUser: number;
    idGame: number;
    user: User;
    game: Game;
}
