import { ValidActivePort } from "../interfaces/ValidActivePort";

export class AcessPort implements ValidActivePort
{
    numport: string;
    name: string;
    lastactive: string
    active: boolean;

    constructor(numport: string, name:string, lastactive: string)
    {
        this.numport = numport;
        this.name = name;
        this.lastactive = lastactive;
        this.active = this.isActive();
    }

    isActive(): boolean
    {
        const [hours, minutes, seconds] = this.lastactive.split(':').map(Number);
        return hours < 24;
    }
}