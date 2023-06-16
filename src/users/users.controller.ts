import {
  Controller,
  Param,
  Query,
  Body,
  Get,
  Post,
  HttpStatus,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiQuery,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiQuery({ name: 'name', required: false })
  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  findAll(@Query('name') name?: string): User[] {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({
    schema: {
      type: 'object',
      example: {
        status: HttpStatus.NOT_FOUND,
        error: 'Пользователь не найден',
      },
    },
  })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'Пользователь не найден',
      });
    }
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({
    schema: {
      type: 'object',
      example: {
        status: HttpStatus.BAD_REQUEST,
        message: ['error message'],
        error: 'Bad Request',
      },
    },
  })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }
}
