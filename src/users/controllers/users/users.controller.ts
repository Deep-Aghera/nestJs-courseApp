import { Body,
         Controller,
         Get, 
         Post, 
         Req, 
         Res,
         Param, 
         UsePipes, 
         ValidationPipe, 
         ParseIntPipe 
        } from '@nestjs/common';

        
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {
            username : 'Deep',
            email : 'deepaghera001@gmail.com'
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData : CreateUserDto) {
    console.log(userData);
    return {};
    }
    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id: string) {
        console.log(id);
        return {id};
    }

}
