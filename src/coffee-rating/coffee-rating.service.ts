import { Injectable } from '@nestjs/common';
import { CoffeesService } from '../coffees/services/coffees.service';

@Injectable()
export class CoffeeRatingService {
    constructor(private readonly coffesService: CoffeesService) {}
}
