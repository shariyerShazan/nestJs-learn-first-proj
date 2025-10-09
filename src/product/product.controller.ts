/* eslint-disable prettier/prettier */
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ProductService } from './product.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService){}
    @Get()
    @UseGuards(AuthGuard)
    getProducts(){
        return this.productService.getAllProducts();
    }
    @Get(":id")
    getProduct(@Param('id') id: string){
        return this.productService.getProductById(Number(id));
    }
}
