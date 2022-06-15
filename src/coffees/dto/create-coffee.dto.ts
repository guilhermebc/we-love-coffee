import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The brand of a coffee' })
  @IsString()
  brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  flavors: string[];
}
