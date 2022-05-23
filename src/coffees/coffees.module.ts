import { Module } from '@nestjs/common';
import { CoffeesController } from './controllers/coffees.controller';
import { CoffeesService } from './services/coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
