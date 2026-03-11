import { db } from "../config/db";
import type { User } from "../types/user.type";

export const userRepository = {
  findAll(): User[] {
    return db.query("SELECT id, name, role FROM users").all() as User[];
  },

  // create & update ada di file index.ts

  delete(id: number) {
    // implementasikan query "DELETE FROM users WHERE id = ?"
  }
};
