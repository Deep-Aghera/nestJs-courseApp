import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {
            username : 'Deep',
            email : 'deepaghera001@gmail.com'
        }
    }
}
