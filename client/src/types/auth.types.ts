import { LoginSchema } from "../validations/auth.schema";

export type LoginFormValues = LoginSchema;

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}
