import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { IUser, Leesstatus } from '@nx-emma-indiv/shared/api';
import { CreateUserDto, UpdateUserDto } from '@nx-emma-indiv/backend/dto';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    async getAll(): Promise<IUser[]> {
        return await this.userService.findAll();
    }

    @Get(':_id')
    async getOne(@Param('_id') _id: string): Promise<IUser | null> {
        return await this.userService.findOne(_id);
    }

    @Post('')
    async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        const {...userWithoutId } = createUserDto;
        return await this.userService.create(userWithoutId);
    }

    @Put(':id')
    async update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
      const updatedUser = await this.userService.update(userId, updateUserDto);
      return { message: 'User updated successfully', user: updatedUser };
    }
    
    @Delete('/:_id')
    async delete(@Param('_id') _id: string): Promise<void> {
        await this.userService.deleteUser(_id);
    }
    
    @Post('/login')
    async login(@Body() user: IUser): Promise<IUser | { error: string }> {
        const loggedInUser = await this.userService.login(user.email, user.password);
        return await loggedInUser;
    }

    // @Post('books/:_id')
    // async addOrUpdateLeesstatus(@Param('_id') userId: string, @Body('bookId') bookId: string, @Body('leesstatus') leesstatus: Leesstatus,): Promise<IUser> {
    //   return this.userService.addOrUpdateLeesstatus(userId, bookId, leesstatus);
    // }
    
    // @Delete('books/:_id')
    // async removeBookFromBookList(@Param('_id') userId: string, @Body('bookId') bookId: string,): Promise<IUser> {
    //   return this.userService.removeBookFromBookList(userId, bookId);
    // }

}