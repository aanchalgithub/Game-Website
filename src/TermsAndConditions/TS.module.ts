import { Module } from "@nestjs/common";
import { TermsAndConditionsController } from "./TS.controller";
import { TermsAndConditionsService } from "./TS.service";

@Module({
    imports :[],
    controllers : [TermsAndConditionsController],
    providers : [TermsAndConditionsService]
})
export class TermsAndConditions{

}