import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    getAll(): IUser[] {
        return this.userService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IUser {
        return this.userService.getOne(id);
    }

    @Post('')
    create(@Body() user: IUser): IUser {
      console.log('Received user:', user);
      return this.userService.create(user);
    }

    @Put('/:id')
    edit(@Param('id') id: string, @Body() user: IUser): IUser {
      return this.userService.update(user);
    }

    @Delete('/:id')
    delete(@Param('id') id: string): void {
      this.userService.deleteUser(id);
    }
}
