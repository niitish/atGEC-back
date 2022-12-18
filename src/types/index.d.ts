import { UserType } from "../types/types";

export {};

declare global {
  namespace Express {
    interface Request {
      user: UserType;
    }
  }
}
