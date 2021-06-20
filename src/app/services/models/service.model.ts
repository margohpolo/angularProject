export class Service {

    public svcId: string;
    public title: string;
    public heading: string;
    public description: string;

    constructor(id:string, ttl:string, hdr:string, desc:string) {
        this.svcId = id;
        this.title = ttl;
        this.heading = hdr;
        this.description = desc;
    }
}