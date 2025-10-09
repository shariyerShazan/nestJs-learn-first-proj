/* eslint-disable prettier/prettier */
import { DatabaseService } from './database.service';
import { Controller } from '@nestjs/common';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseService : DatabaseService){}
    @Get("status")
    getStatus(){
        return {
            status: this.databaseService.getStatus()
        }
    }
}
