import { Time } from "@angular/common";

export interface User{
    name: string,
    mess: [
        time: Time,
        paragph: string,
    ]
}