import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: 'ID пользователя',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'Имя пользователя',
    type: String,
    default: '',
    minLength: 2,
    maxLength: 50,
  })
  firstName: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    type: String,
    default: '',
    minLength: 2,
    maxLength: 50,
  })
  lastName: string;

  @ApiProperty({
    description: 'Возраст пользователя',
    type: Number,
    minimum: 1,
    maximum: 120,
    default: 0,
  })
  age: number;
}
