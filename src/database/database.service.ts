/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false ;

    onModuleInit(){
        this.isConnected = true ;
        console.log("Database connected!");
    }
    
}
