import { Module } from "@nestjs/common";
import { NewPuzzleController } from "./newPuzzle.controller";
import { NewPuzzleService } from "./newPuzzle.service";

@Module({
    imports : [],
    controllers :[NewPuzzleController],
    providers : [NewPuzzleService]
})
export class NewPuzzleModule{

}