import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/user/entities/user.entity';
import { OtpEntity } from 'src/modules/user/user/entities/otp.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,OtpEntity])],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
})
export class AuthModule {}
