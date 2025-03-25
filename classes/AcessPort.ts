export class AcessPort
{
    numport: string;
    name: string;
    lastactive: string
    active: boolean;

    constructor(numport: string, name:string, lastactive: string)
    {
    
        this.numport = numport;
        this.name = name;
        this.active = this.isActive(Number(lastactive));
        this.lastactive = this.convertMilliseconds(Number(lastactive))
        
    }

    isActive(time: number): boolean
    {
        return time < 8640000
    }

    private convertMilliseconds(ms: number) {
        const seconds = Math.floor(ms / 100);
        if (seconds < 60) return `${seconds} segundo${seconds !== 1 ? 's' : ''} atrás`;
    
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minuto${minutes !== 1 ? 's' : ''} atrás`;
    
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hora${hours !== 1 ? 's' : ''} atrás`;
    
        const days = Math.floor(hours / 24);
        if (days < 30) return `${days} dia${days !== 1 ? 's' : ''} atrás`;
    
        const months = Math.floor(days / 30);
        if (months < 12) return `${months} ${months !== 1 ? 'meses' : 'mês'} atrás`;
    
        const years = Math.floor(months / 12);
        return `${years} ano${years !== 1 ? 's' : ''} atrás`;
    }
}