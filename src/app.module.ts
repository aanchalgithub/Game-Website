import { Module } from '@nestjs/common';
import { UserModule } from './Users/User.Module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TermsAndConditions } from './TermsAndConditions/TS.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : '.env',
      isGlobal : true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    TermsAndConditions
  ],

})
export class AppModule {}
