
import { registerAs } from "@nestjs/config";
export enum ConfigKeys{
    App="App",
    Db="Db",
    Jwt="Jwt"
    
}

const AppConfig =registerAs(ConfigKeys.App,()=>({
port:3000
}))


const JwtConfig=registerAs(ConfigKeys.Jwt,()=>({
    accessTokenSecret:"dmE6dcM1ljO6AWHDvWKcwZcW71x08fq1TcH7eL9wjTfAIzLTODq585L7QmMKigbLEBP4FEZHAPVbYRjlOpFL3KraAevPzhC0RCvP",
    refreshTokenSecret:"8bfa4C5pTU8rtwzOtdbAo9dRVIOB0vweRgxmk03T2Es98V5x0pgEYtlspX34kLXHigMa8WAVKBQgICRxbYEi0JAUItEh1Zow84Jq"
}))

const DbConfig=registerAs(ConfigKeys.Db,()=>({
    port:5432,
    host:"localhost",
    database:"auth-otp",
    username:"postgres",
    password:"123456",

}))


export const Configurations=[AppConfig,DbConfig,JwtConfig]