import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserModel, UserDocument } from './user/user.schema';
import { IUser } from '@nx-emma-indiv/shared/api';
// import { Meal, MealDocument } from '@avans-nx-workshop/backend/features';
import { CreateUserDto, UpdateUserDto } from '@nx-emma-indiv/backend/dto';

@Injectable()
export class UserService {
    private readonly logger: Logger = new Logger(UserService.name);

    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>
    ) {}

    async findAll(): Promise<IUser[]> {
        this.logger.log(`Finding all items`);
        const items = await this.userModel.find();
        return items;
    }

    async findOne(_id: string): Promise<IUser | null> {
        this.logger.log(`finding user with id ${_id}`);
    
        // Check if id is null
        if (_id === null || _id === "null") {
            this.logger.debug('ID is null or "null"');
            return null;
        }   
        const item = await this.userModel.findOne({ _id: _id }).exec(); 
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }
    

    async findOneByEmail(email: string): Promise<IUser | null> {
        this.logger.log(`Finding user by email ${email}`);
        const item = this.userModel
            .findOne({ emailAddress: email })
            .select('-password')
            .exec();
        return item;
    }

    async create(userDto: CreateUserDto): Promise<IUser> {
        this.logger.log(`Create user ${userDto.naam}`);
        
        // Sluit _id expliciet uit
        const { _id, ...userWithoutId } = userDto;
        
        const createdItem = await this.userModel.create(userWithoutId);
        return createdItem;
    }
    
      
    async update(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const existingUser = await this.userModel.findById(userId).exec();
      
        if (!existingUser) {
          throw new NotFoundException(`User with id ${userId} not found`);
        }
      
        // Update user properties
        Object.assign(existingUser, updateUserDto);
      
        // Save the updated user
        const updatedUser = await existingUser.save();
      
        return updatedUser;
    }
    

    async deleteUser(_id: string): Promise<void> {
      this.logger.log(`Deleting user with id ${_id}`);
      const deletedItem = await this.userModel.findByIdAndDelete(_id).exec();

      if (!deletedItem) {
          this.logger.debug('User not found for deletion');
          throw new NotFoundException(`User with _id ${_id} not found`);
      }

      this.logger.log(`User deleted successfully`);
  }
}