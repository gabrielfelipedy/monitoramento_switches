import { Port } from "./Port";

export interface PortList {
    id: number;
    jsonrpc: string;
    result: Array<Port>;
}