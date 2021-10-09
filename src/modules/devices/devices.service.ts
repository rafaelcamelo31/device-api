import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesService {
  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  findAll() {
    return `This action returns all devices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
