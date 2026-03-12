import { Injectable } from '@nestjs/common';

const validKeys=[
    "a1b2c3",
    "x1y2z3"
]

@Injectable()
export class ApiKeyValidatorService {

    async isKeyPresent(key:string){
        return validKeys.includes(key)
    }
}
