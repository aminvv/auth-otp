import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './modules/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmDbConfig } from './config/typeOrm.config';
import { AuthModule } from './modules/auth/auth/auth.module';
import { UserModule } from './modules/user/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [CustomConfigModule,
    TypeOrmModule.forRootAsync({useClass:TypeOrmDbConfig,inject:[TypeOrmDbConfig]})
    ,AuthModule
    ,UserModule
    ,JwtModule
  ],
  controllers: [AppController],
  providers: [AppService,TypeOrmDbConfig],
})
export class AppModule {}
 