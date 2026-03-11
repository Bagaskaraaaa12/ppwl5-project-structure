import { db } from "../config/db";
import type { UserModel } from "../models/user.model";

export const userService = {
  getAll(): UserModel[] {
    const users = db.query("SELECT * FROM users").all() as UserModel[];
    return users.map(user => ({
      ...user,
      displayName: `${user.name} (${user.role})`
    }));
  },

  create(data: { name: string; role: string }) {
    db.query("INSERT INTO users (name, role) VALUES (?, ?)")
      .run(data.name, data.role);
  },

  delete(id: number) {
    db.query("DELETE FROM users WHERE id = ?").run(id);
  }
};