import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CoffeesController } from './controllers/coffees.controller';
import { CoffeesService } from './services/coffees.service';
import { Coffee } from './entities/coffees.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEES_BRAND } from './coffees.constants';
import { Connection } from 'typeorm';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    ConfigModule.forFeature(coffeesConfig),
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEES_BRAND,
      // Note "async" here, and Promise/Async event inside the Factory function
      // Could be a database connection / API call / etc
      // In our case we're just "mocking" this type of event with a Promise
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('[!] Async factory');
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
