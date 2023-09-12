import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidateCreateUserPipePipe } from 'src/users/pipes/validate-create-user-pipe/validate-create-user-pipe.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
// ParsePipe are validations in Nest
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  @UseGuards(AuthGuard)
  getUsers() {
    // @Query('sort', ParseBoolPipe) _sort: boolean, // @Query('sortBy') _sortBy: string,
    return this.userService.fetchUsers();
  }

  @Post('/')
  @UsePipes(new ValidationPipe()) // Validation to take effect the class validator
  createUser(@Body(ValidateCreateUserPipePipe) userData: CreateUserDto) {
    this.userService.createUser(userData);
    return userData;
  }

  @Get(':id')
  //   ParseIntPipe -> to expect a number id
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      return new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
