import { CategoryService } from './category.service';
import { Get } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}
    @Get()
    getCategories(){
         return this.categoryService.getCategories();
    }
}
