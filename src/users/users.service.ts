import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // {
  //   id: number,
  //   firstName: string,
  //   lastName: string,
  //   age: number
  // }
  private readonly users = [];

  findAll(name?: string): User[] {
    if (name) {
      const foundUsers: User[] = this.users.filter(
        (user) => user.firstName.toLowerCase() === name.toLowerCase(),
      );
      return foundUsers;
    }
    return this.users;
  }

  findById(userId: number): User {
    const foundUser = this.users.find((user) => user.id === userId);
    return foundUser;
  }

  create(createUserDto: CreateUserDto): User {
    const { firstName, lastName, age } = createUserDto;
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      age,
    };
    this.users.push(newUser);
    return newUser;
  }
}
