/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsInt, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
    @IsString()
    name: string ;
    @IsInt()
    age : number ;
}