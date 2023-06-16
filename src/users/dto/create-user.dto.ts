import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max, MinLength, MaxLength, IsAlpha } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsAlpha('ru-RU', {
    message: 'Имя должно быть написано на кириллице',
  })
  @MinLength(2, {
    message: 'Имя должно быть не менее 2 символов',
  })
  @MaxLength(50, {
    message: 'Имя должно быть не более 50 символов',
  })
  @ApiProperty({
    description: 'Имя пользователя',
    type: String,
    pattern: '^а-яА-ЯёЁ$',
    default: '',
    minLength: 2,
    maxLength: 50,
  })
  firstName: string;

  @IsString()
  @IsAlpha('ru-RU', {
    message: 'Фамилия должна быть написана на кириллице',
  })
  @MinLength(2, {
    message: 'Фамилия должна быть не менее 2 символов',
  })
  @MaxLength(50, {
    message: 'Фамилия должна быть не более 50 символов',
  })
  @ApiProperty({
    description: 'Фамилия пользователя',
    type: String,
    pattern: '^а-яА-ЯёЁ$',
    default: '',
    minLength: 2,
    maxLength: 50,
  })
  lastName: string;

  @IsInt({
    message: 'Возраст должен быть целым числом',
  })
  @Min(1, {
    message: 'Возраст должен быть не менее 1 года',
  })
  @Max(120, {
    message: 'Возраст должен быть не более 120 лет',
  })
  @ApiProperty({
    description: 'Возраст пользователя',
    type: Number,
    minimum: 1,
    maximum: 120,
    default: 0,
  })
  age: number;
}
