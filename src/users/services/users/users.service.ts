import { CreateUserType } from 'src/utils/types';
import { Injectable } from '@nestjs/common';

@Injectable()
// Handles Business Logic
export class UsersService {
  private fakeUsers = [
    { username: 'roms', email: 'roms@gmail.com' },
    {
      username: 'tan',
      email: 'tan@gmail.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'tan', email: 'rj@tan.com' }
  }
}
