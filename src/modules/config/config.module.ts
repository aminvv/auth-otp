import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {Configurations  } from "../../config/config";
 

@Module({
    imports:[ConfigModule.forRoot({load:Configurations,isGlobal:true})]
})

export class CustomConfigModule{}
