import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, ResponseCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: uuid(),
      brand: 'BMW',
      model: 'M3',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'Q3',
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'C class',
    },
  ];

  finAll() {
    return this.cars;
  }

  finOneById(id: string) {
    const car = this.cars.find((car) => {
      return car.id === id;
    });
    if (!car) {
      throw new NotFoundException('No se encotraron coincidencias!!');
    }
    return car;
  }

  create(body: CreateCarDto): ResponseCarDto {
    const carToAdd: Car = {
      id: uuid(),
      ...body,
    };
    this.cars.push(carToAdd);
    return carToAdd;
  }

  update(id: string, body: UpdateCarDto): ResponseCarDto {
    const carArr = this.finOneById(id);
    if (body.id && body.id !== id) {
      throw new BadRequestException(
        'Las id no coinciden, imposible hacer la actualización',
      );
    }
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = {
      ...carArr,
      ...body,
      id,
    };
    return this.cars[index];
  }

  delete(id: string) {
    const carToDelete = this.finOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return carToDelete;
  }
}
