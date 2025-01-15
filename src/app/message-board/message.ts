export class Message {
    id: number;
    name: string ;
    content: string;
    date: Date;
    constructor(name: string, content: string, id: number) {
        this.name = name;
        this.content = content;
        this.date = new Date();
        this.id = id;
    }
}
