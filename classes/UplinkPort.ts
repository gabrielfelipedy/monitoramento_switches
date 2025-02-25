import { ValidActivePort } from "../interfaces/ValidActivePort";

export class UplinkPort implements ValidActivePort
{
    numport: string;
    name: string;
    inputvalue: string;
    outputvalue: string;
    active: boolean;

    constructor(numport: string, name:string, inputvalue: string, outputvalue: string)
    {
        this.numport = numport;
        this.name = name;
        this.inputvalue = inputvalue;
        this.outputvalue = outputvalue;
        this.active = this.isActive();
    }

    isActive(): boolean {
        return this.inputvalue !== '0.00 KB/s' || this.outputvalue !== '0.00 KB/s'
    }
}